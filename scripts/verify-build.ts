import fs from 'fs'
import path from 'path'

const DIST_DIR = path.join(__dirname, '../dist')
const VUE3_DIR = path.join(DIST_DIR, 'vue3')
const UNIAPP_DIR = path.join(DIST_DIR, 'uniapp')
const FONT_DIR = path.join(DIST_DIR, 'font')
const INDEX_FILE = path.join(DIST_DIR, 'index.js')
const ESM_FILE = path.join(DIST_DIR, 'index.esm.js')
const TYPES_FILE = path.join(DIST_DIR, 'index.d.ts')
const VUICON_FILE = path.join(DIST_DIR, 'VuIcon.vue')
const VUICONUNIAPP_FILE = path.join(DIST_DIR, 'VuIconUniApp.vue')
const FONT_CSS = path.join(FONT_DIR, 'vu-icons.css')
const FONT_WOFF2 = path.join(FONT_DIR, 'vu-icons.woff2')

function checkFileExists(filePath: string, description: string) {
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${description} found`)
  } else {
    console.error(`❌ ${description} missing: ${filePath}`)
    process.exit(1)
  }
}

function checkDirExists(dirPath: string, description: string) {
  if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
    console.log(`✅ ${description} directory found`)
  } else {
    console.error(`❌ ${description} directory missing: ${dirPath}`)
    process.exit(1)
  }
}

function countVueFiles(dir: string): number {
  if (!fs.existsSync(dir)) return 0
  return fs.readdirSync(dir).filter(f => f.endsWith('.vue')).length
}

console.log('🚀 Verifying build output...\n')

// Check directories
checkDirExists(DIST_DIR, 'Dist')
checkDirExists(VUE3_DIR, 'Vue3 components')
checkDirExists(UNIAPP_DIR, 'UniApp components')
checkDirExists(FONT_DIR, 'Font directory')

// Check font files
checkFileExists(FONT_CSS, 'Font CSS')
checkFileExists(FONT_WOFF2, 'Font WOFF2')

// Check base components
checkFileExists(VUICON_FILE, 'VuIcon.vue (Vue3 base)')
checkFileExists(VUICONUNIAPP_FILE, 'VuIconUniApp.vue (UniApp base)')

// Check entry files
checkFileExists(INDEX_FILE, 'CJS entry file')
checkFileExists(ESM_FILE, 'ESM entry file')
checkFileExists(TYPES_FILE, 'Types declaration file')

// Verify font CSS contains @font-face
const cssContent = fs.readFileSync(FONT_CSS, 'utf-8')
if (cssContent.includes('@font-face') && cssContent.includes('vu-icons')) {
  console.log('✅ Font CSS contains @font-face declaration')
} else {
  console.error('❌ Font CSS missing @font-face declaration')
  process.exit(1)
}

// Count icons
const vue3Count = countVueFiles(VUE3_DIR)
const uniappCount = countVueFiles(UNIAPP_DIR)
console.log(`✅ Vue3 components: ${vue3Count} icons`)
console.log(`✅ UniApp components: ${uniappCount} icons`)

if (vue3Count !== uniappCount) {
  console.error(`❌ Vue3 (${vue3Count}) and UniApp (${uniappCount}) icon counts don't match`)
  process.exit(1)
}

if (vue3Count < 100) {
  console.error(`❌ Too few icons generated (${vue3Count}), expected 100+`)
  process.exit(1)
}

// Check CJS entry
const indexContent = fs.readFileSync(INDEX_FILE, 'utf-8')
if (indexContent.includes('module.exports = {') && indexContent.includes('VuAdd:')) {
  console.log('✅ CJS entry file contains component exports')
} else {
  console.error('❌ CJS entry file does not look correct')
  process.exit(1)
}

// Check ESM entry
const esmContent = fs.readFileSync(ESM_FILE, 'utf-8')
if (esmContent.includes('export { default as VuAdd }')) {
  console.log('✅ ESM entry file contains component exports')
} else {
  console.error('❌ ESM entry file does not look correct')
  process.exit(1)
}

// Check wrapper components use font (not inline SVG)
const sampleVue3 = fs.readFileSync(path.join(VUE3_DIR, 'VuAdd.vue'), 'utf-8')
if (sampleVue3.includes('VuIcon') && !sampleVue3.includes('<svg')) {
  console.log('✅ Vue3 wrappers use font-based rendering (not inline SVG)')
} else {
  console.error('❌ Vue3 wrappers still use inline SVG')
  process.exit(1)
}

const sampleUniapp = fs.readFileSync(path.join(UNIAPP_DIR, 'VuAdd.vue'), 'utf-8')
if (sampleUniapp.includes('VuIcon') && !sampleUniapp.includes('<svg')) {
  console.log('✅ UniApp wrappers use font-based rendering (not inline SVG)')
} else {
  console.error('❌ UniApp wrappers still use inline SVG')
  process.exit(1)
}

// Check WOFF2 file size
const woff2Size = fs.statSync(FONT_WOFF2).size
if (woff2Size > 10000) {
  console.log(`✅ WOFF2 font file size: ${(woff2Size / 1024).toFixed(1)} KB`)
} else {
  console.error(`❌ WOFF2 font file too small: ${woff2Size} bytes`)
  process.exit(1)
}

console.log('\n✨ Verification successful!')
