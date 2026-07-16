#!/usr/bin/env node

/**
 * 发布前本地打包测试脚本
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import os from 'os'

const ROOT = path.resolve(__dirname, '..')
const TEMP_DIR = path.join(os.tmpdir(), `vu-icons-test-${Date.now()}`)

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
}

function log(msg: string, color: keyof typeof colors = 'reset') {
  console.log(`${colors[color]}${msg}${colors.reset}`)
}

function run(cmd: string, cwd: string = ROOT): string {
  return execSync(cmd, { stdio: 'pipe', cwd, encoding: 'utf-8' }).trim()
}

function cleanup() {
  if (fs.existsSync(TEMP_DIR)) {
    fs.rmSync(TEMP_DIR, { recursive: true, force: true })
  }
}

async function main() {
  log('\n' + '='.repeat(60), 'bright')
  log('  vu-icons 发布前本地打包测试', 'bright')
  log('='.repeat(60) + '\n', 'bright')

  fs.mkdirSync(TEMP_DIR, { recursive: true })

  try {
    // 1. 构建
    log('[1/5] 构建项目', 'cyan')
    run('npm run build')
    log('  ✓ 构建完成', 'green')

    // 2. 生成 tgz
    log('[2/5] 生成 .tgz 包', 'cyan')
    run('npm pack')
    const tgzFile = fs.readdirSync(ROOT).find(f => f.endsWith('.tgz'))!
    const tgzSrc = path.join(ROOT, tgzFile)
    const tgzDest = path.join(TEMP_DIR, tgzFile)
    fs.copyFileSync(tgzSrc, tgzDest)
    fs.unlinkSync(tgzSrc)
    log(`  ✓ ${tgzFile}`, 'green')

    // 3. 创建测试项目
    log('[3/5] 创建测试项目', 'cyan')
    const testDir = path.join(TEMP_DIR, 'test-project')
    fs.mkdirSync(testDir)

    fs.writeFileSync(path.join(testDir, 'package.json'), JSON.stringify({
      name: 'test-project',
      version: '1.0.0',
      private: true
    }, null, 2))

    // Vue3 测试 (验证文件结构)
    fs.writeFileSync(path.join(testDir, 'test-vue3.mjs'), `
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pkgDir = path.join(__dirname, 'node_modules/vu-icons')

// 检查入口文件
const indexJs = fs.readFileSync(path.join(pkgDir, 'dist/index.js'), 'utf-8')
const indexEsm = fs.readFileSync(path.join(pkgDir, 'dist/index.esm.js'), 'utf-8')

// 统计导出数量
const cjsExports = (indexJs.match(/Vu\\w+:/g) || []).length
const esmExports = (indexEsm.match(/export \\{ default as Vu/g) || []).length

console.log('Vue3 CJS exports: ' + cjsExports)
console.log('Vue3 ESM exports: ' + esmExports)

if (cjsExports < 100 || esmExports < 100) {
  console.error('FAIL: too few exports')
  process.exit(1)
}

// 检查组件文件
const vue3Dir = path.join(pkgDir, 'dist/vue3')
const vueFiles = fs.readdirSync(vue3Dir).filter(f => f.endsWith('.vue'))
console.log('Vue3 components: ' + vueFiles.length)

// 检查组件内容
const vuUser = fs.readFileSync(path.join(vue3Dir, 'VuUser.vue'), 'utf-8')
if (!vuUser.includes('VuIcon') || !vuUser.includes('icon=\\"user\\"')) {
  console.error('FAIL: VuUser.vue content invalid')
  process.exit(1)
}

console.log('Vue3 test PASSED')
`)

    // UniApp 测试 (验证文件结构)
    fs.writeFileSync(path.join(testDir, 'test-uniapp.mjs'), `
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pkgDir = path.join(__dirname, 'node_modules/vu-icons')

// 检查 uniapp 入口
const uniappIndex = fs.readFileSync(path.join(pkgDir, 'dist/uniapp/index.js'), 'utf-8')
const exports = (uniappIndex.match(/export \\{ default as Vu/g) || []).length

console.log('UniApp exports: ' + exports)

if (exports < 100) {
  console.error('FAIL: too few UniApp exports')
  process.exit(1)
}

// 检查组件文件
const uniappDir = path.join(pkgDir, 'dist/uniapp')
const vueFiles = fs.readdirSync(uniappDir).filter(f => f.endsWith('.vue'))
console.log('UniApp components: ' + vueFiles.length)

// 检查组件内容
const vuUser = fs.readFileSync(path.join(uniappDir, 'VuUser.vue'), 'utf-8')
if (!vuUser.includes('VuIcon') || !vuUser.includes('icon=\\"user\\"')) {
  console.error('FAIL: UniApp VuUser.vue content invalid')
  process.exit(1)
}

console.log('UniApp test PASSED')
`)
    log('  ✓ 测试文件已创建', 'green')

    // 4. 安装并测试
    log('[4/5] 安装并测试', 'cyan')
    run(`npm install ${tgzDest}`, testDir)
    run('npm install vue@3.4', testDir)
    run('node test-vue3.mjs', testDir)
    run('node test-uniapp.mjs', testDir)
    log('  ✓ 所有测试通过', 'green')

    // 5. 验证包内容
    log('[5/5] 验证包内容', 'cyan')
    run(`tar -xzf "${tgzDest}" -C "${TEMP_DIR}"`)

    const pkgDir = path.join(TEMP_DIR, 'package')

    const required = [
      'dist/index.js',
      'dist/index.esm.js',
      'dist/index.d.ts',
      'dist/VuIcon.vue',
      'dist/VuIconUniApp.vue',
      'dist/font/vu-icons.woff2',
      'dist/font/vu-icons.css',
    ]

    for (const f of required) {
      if (!fs.existsSync(path.join(pkgDir, f))) {
        throw new Error(`Missing: ${f}`)
      }
    }

    const vue3Count = fs.readdirSync(path.join(pkgDir, 'dist/vue3')).filter(f => f.endsWith('.vue')).length
    const uniappCount = fs.readdirSync(path.join(pkgDir, 'dist/uniapp')).filter(f => f.endsWith('.vue')).length
    const sizeKB = (fs.statSync(tgzDest).size / 1024).toFixed(1)

    log(`  ✓ 文件完整 (Vue3: ${vue3Count}, UniApp: ${uniappCount}, Size: ${sizeKB}KB)`, 'green')

    log('\n' + '='.repeat(60), 'bright')
    log('  ✓ 测试通过！可以发布: npm publish', 'green')
    log('='.repeat(60) + '\n', 'bright')

  } catch (e: any) {
    log('\n  ✗ 测试失败: ' + e.message, 'red')
    process.exit(1)
  } finally {
    cleanup()
  }
}

main()
