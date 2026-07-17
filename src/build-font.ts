import fs from 'fs'
import path from 'path'
import { Readable } from 'stream'
import { SVGIcons2SVGFontStream } from 'svgicons2svgfont'
import svg2ttf from 'svg2ttf'
import ttf2woff2Module from 'wawoff2'

const ROOT = path.join(__dirname, '..')
const SVG_DIR = path.join(ROOT, 'src', 'icons')  // Use original SVGs, not optimized (SVGO corrupts paths)
const DIST = path.join(ROOT, 'dist')
const FONT_DIR = path.join(DIST, 'font')
const VUE3_DIR = path.join(DIST, 'vue3')
const UNIAPP_DIR = path.join(DIST, 'uniapp')
const BASE_DIR = path.join(ROOT, 'src', 'base')

// ── Helpers ──

function toPascalCase(str: string): string {
  return str.replace(/(^|-)(\w)/g, (_, __, c) => c.toUpperCase())
}

function toComponentName(fileName: string): string {
  const name = fileName.replace('.svg', '')
  return `Vu${toPascalCase(name)}`
}

function getAllSvgFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    // Skip optimized, font-ready, png-cache directories
    if (file === 'optimized' || file === 'font-ready' || file === 'font-ready-flat' || file === 'png-cache') {
      return
    }
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      getAllSvgFiles(filePath, fileList)
    } else if (file.endsWith('.svg')) {
      fileList.push(filePath)
    }
  })
  return fileList
}

function ensureDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

function resetDir(dirPath: string): void {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 })
  }
  fs.mkdirSync(dirPath, { recursive: true })
}

function writeFileSync(filePath: string, content: string | Buffer): void {
  let retries = 3
  while (retries > 0) {
    try {
      fs.writeFileSync(filePath, content, 'utf-8')
      return
    } catch (error: any) {
      if (error.code === 'EPERM' || error.code === 'EACCES') {
        retries--
        if (retries > 0) {
          Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 500)
          continue
        }
      }
      throw error
    }
  }
}

// ── Phase 1: Generate Font ──

function generateFont(iconNames: string[], fontUrl?: string): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log('🔤 Generating icon font...')

    ensureDir(FONT_DIR)

    const svgFiles = getAllSvgFiles(SVG_DIR).sort((a, b) => a.localeCompare(b))

    // Deduplicate by filename
    const seen = new Set<string>()
    const uniqueFiles: { path: string; name: string }[] = []
    for (const svgPath of svgFiles) {
      const fileName = path.basename(svgPath)
      if (seen.has(fileName)) continue
      seen.add(fileName)
      uniqueFiles.push({ path: svgPath, name: fileName.replace('.svg', '') })
    }

    // Build icon names
    iconNames.length = 0
    for (const { name } of uniqueFiles) {
      iconNames.push(name)
    }

    console.log(`📦 Processing ${iconNames.length} unique SVGs for font generation`)

    const fontStream = new SVGIcons2SVGFontStream({
      fontName: 'vu-icons',
      fontHeight: 500,
      normalize: true,
      log: () => {}
    })

    const svgFontChunks: string[] = []
    fontStream.on('data', (chunk: string) => svgFontChunks.push(chunk))
    fontStream.on('end', async () => {
      try {
        const svgFont = svgFontChunks.join('')

        const glyphCount = (svgFont.match(/<glyph/g) || []).length
        console.log(`🔤 SVG font contains ${glyphCount} glyphs`)

        if (glyphCount === 0) {
          throw new Error('No glyphs generated in SVG font')
        }

        // SVG font → TTF
        const ttf = Buffer.from(svg2ttf(svgFont).buffer)

        // TTF → WOFF2 (async)
        const woff2 = await ttf2woff2Module.compress(ttf)

        // Write font files
        fs.writeFileSync(path.join(FONT_DIR, 'vu-icons.woff2'), woff2)

        // Generate CSS
        const css = generateCSS(iconNames, fontUrl)
        fs.writeFileSync(path.join(FONT_DIR, 'vu-icons.css'), css)

        // Generate JSON
        fs.writeFileSync(path.join(FONT_DIR, 'vu-icons.json'), JSON.stringify(iconNames, null, 2))

        console.log(`✅ Generated font with ${iconNames.length} icons`)
        resolve()
      } catch (err) {
        reject(err)
      }
    })
    fontStream.on('error', (err: any) => {
      // Some SVGs may have path data that causes parsing warnings
      // These are non-fatal - the glyph is still included in the font
      if (err.message && err.message.includes('parsing the glyph')) {
        console.warn(`⚠️ Warning: ${err.message}`)
        return
      }
      reject(err)
    })

    // Process each SVG manually with explicit metadata
    let codepoint = 0xe000

    for (const { path: svgPath, name } of uniqueFiles) {
      let content = fs.readFileSync(svgPath, 'utf-8')

      // Preprocess SVG for font generation
      content = content.replace(/currentColor/g, 'black')
      content = content.replace(/fill="none"/g, '')
      content = content.replace(/<path([^>]*)\/>/g, (match: string, attrs: string) => {
        if (!attrs.includes('fill=')) {
          return `<path${attrs} fill="black"/>`
        }
        return match
      })

      // Create a readable stream with metadata
      const readable = Readable.from([Buffer.from(content)])
      ;(readable as any).metadata = {
        name: name,
        unicode: [String.fromCodePoint(codepoint++)]
      }

      fontStream.write(readable)
    }

    fontStream.end()
  })
}

function generateCSS(iconNames: string[], fontUrl?: string): string {
  const iconRules = iconNames
    .map((name, index) => {
      const codePoint = (0xe000 + index).toString(16).padStart(4, '0')
      return `.vu-icon-${name}::before { content: '\\${codePoint}'; }`
    })
    .join('\n')

  const fontSrc = fontUrl
    ? `url('${fontUrl}') format('woff2')`
    : `url('./vu-icons.woff2') format('woff2')`

  return `/* vu-icons Icon Font - Auto-generated */

@font-face {
  font-family: 'vu-icons';
  src: ${fontSrc};
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

.vu-icon {
  font-family: 'vu-icons' !important;
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  display: inline-block;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: "liga";
}

${iconRules}
`
}

// ── Phase 2: Copy Base Components ──

function copyBaseComponents(): void {
  console.log('📦 Copying base components...')

  fs.copyFileSync(path.join(BASE_DIR, 'VuIcon.vue'), path.join(DIST, 'VuIcon.vue'))
  fs.copyFileSync(path.join(BASE_DIR, 'VuIconUniApp.vue'), path.join(DIST, 'VuIconUniApp.vue'))

  console.log('✅ Base components copied')
}

function copyUniAppBaseComponents(): void {
  console.log('📦 Copying UniApp base components to uniapp dir...')

  fs.copyFileSync(path.join(BASE_DIR, 'VuIconUniApp.vue'), path.join(UNIAPP_DIR, 'VuIcon.vue'))
  fs.copyFileSync(path.join(DIST, 'icons-data.js'), path.join(UNIAPP_DIR, 'icons-data.js'))

  console.log('✅ UniApp base components copied')
}

// ── Phase 3: Generate Wrapper Components ──

function generateWrapperComponents(iconNames: string[]): void {
  console.log('📝 Generating wrapper components...')

  resetDir(VUE3_DIR)
  resetDir(UNIAPP_DIR)

  for (const iconName of iconNames) {
    const componentName = toComponentName(iconName)

    // Vue3 wrapper
    const vue3Content = `<script setup lang="ts">
import VuIcon from '../VuIcon.vue'

const props = withDefaults(defineProps<{
  size?: number | string
  color?: string
  className?: string
  spin?: boolean
}>(), {
  size: 24,
  color: 'currentColor',
  className: '',
  spin: false
})
</script>

<template>
  <VuIcon icon="${iconName}" :size="props.size" :color="props.color" :spin="props.spin" :class="props.className" />
</template>`

    // UniApp wrapper
    const uniappContent = `<script>
import VuIcon from './VuIcon.vue'

export default {
  name: '${componentName}',
  components: { VuIcon },
  props: {
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
    className: { type: String, default: '' },
    spin: { type: Boolean, default: false }
  }
}
</script>

<template>
  <view class="vu-icon-wrapper">
    <VuIcon icon="${iconName}" :size="size" :color="color" :spin="spin" :class="className" />
  </view>
</template>

<style scoped>
.vu-icon-wrapper {
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
}
</style>`

    writeFileSync(path.join(VUE3_DIR, `${componentName}.vue`), vue3Content)
    writeFileSync(path.join(UNIAPP_DIR, `${componentName}.vue`), uniappContent)
  }

  console.log(`✅ Generated ${iconNames.length} Vue3 + ${iconNames.length} UniApp wrapper components`)
}

// ── Phase 4: Generate Index & Types ──

function generateExports(iconNames: string[]): void {
  console.log('📄 Generating entry files...')

  // CJS entry
  const cjsExports = iconNames
    .map(name => {
      const componentName = toComponentName(name)
      return `  ${componentName}: require('./vue3/${componentName}.vue')`
    })
    .join(',\n')
  writeFileSync(path.join(DIST, 'index.js'), `module.exports = {\n${cjsExports}\n}`)

  // ESM entry
  const esmExports = iconNames
    .map(name => {
      const componentName = toComponentName(name)
      return `export { default as ${componentName} } from './vue3/${componentName}.vue'`
    })
    .join('\n')
  writeFileSync(path.join(DIST, 'index.esm.js'), esmExports)

  // UniApp index
  const uniappExports = iconNames
    .map(name => {
      const componentName = toComponentName(name)
      return `export { default as ${componentName} } from './${componentName}.vue'`
    })
    .join('\n')
  const uniappFullExports = `export { default as VuIcon } from './VuIcon.vue'\n${uniappExports}`
  writeFileSync(path.join(UNIAPP_DIR, 'index.ts'), uniappFullExports)
  writeFileSync(path.join(UNIAPP_DIR, 'index.js'), uniappFullExports)

  console.log('✅ Entry files generated')
}

function generateTypes(iconNames: string[]): void {
  const typeDefinitions = iconNames
    .map(name => {
      const componentName = toComponentName(name)
      return `  export const ${componentName}: DefineComponent<IconProps>`
    })
    .join('\n')

  const content = `import { DefineComponent } from 'vue'

export interface IconProps {
  /**
   * Icon size, supports number (px) or string (e.g. '1rem', '24px')
   * @default 24
   */
  size?: number | string
  /**
   * Icon color
   * @default 'currentColor'
   */
  color?: string
  /**
   * Custom class name
   * @default ''
   */
  className?: string
  /**
   * Whether to spin the icon
   * @default false
   */
  spin?: boolean
}

declare module 'vu-icons' {
${typeDefinitions}
}

declare module 'vu-icons/uniapp' {
${typeDefinitions}
}
`

  writeFileSync(path.join(DIST, 'index.d.ts'), content)
}

function generateMetadata(iconNames: string[]): void {
  // icons.json
  const iconComponentNames = iconNames.map(name => toComponentName(name))
  writeFileSync(path.join(DIST, 'icons.json'), JSON.stringify(iconComponentNames, null, 2))

  // web-types.json
  const components = iconNames.map(name => {
    const componentName = toComponentName(name)
    return {
      name: componentName,
      source: { symbol: componentName },
      description: `Vue 3 & UniApp Icon ${componentName}`,
      props: [
        { name: 'size', type: ['number', 'string'], default: '24', description: 'Icon size' },
        { name: 'color', type: ['string'], default: 'currentColor', description: 'Icon color' },
        { name: 'className', type: ['string'], default: '', description: 'Custom class name' },
        { name: 'spin', type: ['boolean'], default: 'false', description: 'Spin animation' }
      ]
    }
  })

  const webTypes = {
    $schema: 'https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json',
    framework: 'vue',
    name: 'vu-icons',
    version: require('../package.json').version,
    contributions: { html: { tags: components } }
  }

  writeFileSync(path.join(DIST, 'web-types.json'), JSON.stringify(webTypes, null, 2))

  // Copy to uniapp dir
  fs.copyFileSync(path.join(DIST, 'icons.json'), path.join(UNIAPP_DIR, 'icons.json'))
  fs.copyFileSync(path.join(DIST, 'web-types.json'), path.join(UNIAPP_DIR, 'web-types.json'))
  fs.copyFileSync(path.join(DIST, 'index.d.ts'), path.join(UNIAPP_DIR, 'index.d.ts'))
}

// ── Phase 5: Generate SVG Data for All Platforms ──

function generateSvgData(iconNames: string[]): void {
  console.log('🎨 Generating SVG data for all platforms...')

  const svgFiles = getAllSvgFiles(SVG_DIR).sort((a, b) => a.localeCompare(b))

  // Deduplicate by filename (same as Phase 1)
  const seen = new Set<string>()
  const uniqueFiles: { path: string; name: string }[] = []
  for (const svgPath of svgFiles) {
    const fileName = path.basename(svgPath)
    if (seen.has(fileName)) continue
    seen.add(fileName)
    uniqueFiles.push({ path: svgPath, name: fileName.replace('.svg', '') })
  }

  const iconEntries: string[] = []

  for (const { path: svgPath, name } of uniqueFiles) {
    let content = fs.readFileSync(svgPath, 'utf-8')

    // Extract viewBox
    const viewBoxMatch = content.match(/viewBox="([^"]*)"/)
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24'

    // Detect if stroke-based icon
    const isStroke = content.includes('stroke="currentColor"') || content.includes('stroke-width')

    // Extract inner content (everything between <svg ...> and </svg>)
    const innerMatch = content.match(/<svg[^>]*>([\s\S]*)<\/svg>/)
    let innerContent = innerMatch ? innerMatch[1].trim() : ''

    // Clean up: remove xmlns declarations from inner content
    innerContent = innerContent.replace(/xmlns="[^"]*"/g, '')

    // Escape for JS string (use single quotes)
    const escapedContent = innerContent
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')

    iconEntries.push(
      `  "${name}": { viewBox: "${viewBox}", content: '${escapedContent}', stroke: ${isStroke} }`
    )
  }

  const jsContent = `// Auto-generated by build-font.ts - DO NOT EDIT
export const iconData = {
${iconEntries.join(',\n')}
}
`

  // Write to dist/ for both Vue3 and UniApp
  writeFileSync(path.join(DIST, 'icons-data.js'), jsContent)
  writeFileSync(path.join(UNIAPP_DIR, 'icons-data.js'), jsContent)

  console.log(`✅ Generated SVG data for ${uniqueFiles.length} icons`)
}

// ── Main ──

async function main(): Promise<void> {
  console.log('🚀 Building vu-icons...\n')

  // Parse font URL from command line args: --font-url=https://cdn.example.com/vu-icons.woff2
  const fontUrlArg = process.argv.find(arg => arg.startsWith('--font-url='))
  const fontUrl = fontUrlArg ? fontUrlArg.split('=')[1] : undefined

  if (fontUrl) {
    console.log(`🌐 Using network font URL: ${fontUrl}`)
  }

  const iconNames: string[] = []

  // Phase 1: Generate font
  await generateFont(iconNames, fontUrl)

  // Phase 2: Copy base components
  copyBaseComponents()

  // Phase 3: Generate wrapper components
  generateWrapperComponents(iconNames)

  // Phase 3.5: Copy UniApp base components (after resetDir in wrapper generation)
  copyUniAppBaseComponents()

  // Phase 4: Generate exports and types
  generateExports(iconNames)
  generateTypes(iconNames)
  generateMetadata(iconNames)

  // Phase 5: Generate SVG data for all platforms
  generateSvgData(iconNames)

  console.log(`\n✨ Successfully built ${iconNames.length} icons`)
  console.log(`📦 Vue3 components: ${VUE3_DIR}`)
  console.log(`📦 UniApp components: ${UNIAPP_DIR}`)
  console.log(`🎨 SVG data: ${path.join(DIST, 'icons-data.js')}`)
  console.log(`🔤 Font: ${FONT_DIR}`)
  console.log(`📄 Entry: ${path.join(DIST, 'index.js')}`)
  console.log(`📄 Types: ${path.join(DIST, 'index.d.ts')}`)
}

main().catch(err => {
  console.error('❌ Build failed:', err)
  process.exit(1)
})
