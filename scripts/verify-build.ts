import fs from 'fs'
import path from 'path'

const DIST_DIR = path.join(__dirname, '../dist')
const VUE3_DIR = path.join(DIST_DIR, 'vue3')
const UNIAPP_DIR = path.join(DIST_DIR, 'uniapp')
const INDEX_FILE = path.join(DIST_DIR, 'index.js')
const TYPES_FILE = path.join(DIST_DIR, 'index.d.ts')

function checkFileExists(filePath: string, description: string) {
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${description} found: ${filePath}`)
  } else {
    console.error(`❌ ${description} missing: ${filePath}`)
    process.exit(1)
  }
}

function checkDirExists(dirPath: string, description: string) {
  if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
    console.log(`✅ ${description} directory found: ${dirPath}`)
  } else {
    console.error(`❌ ${description} directory missing: ${dirPath}`)
    process.exit(1)
  }
}

console.log('🚀 Verifying build output...')

checkDirExists(DIST_DIR, 'Dist')
checkDirExists(VUE3_DIR, 'Vue3 components')
checkDirExists(UNIAPP_DIR, 'UniApp components')
checkFileExists(INDEX_FILE, 'Main entry file')
checkFileExists(TYPES_FILE, 'Types declaration file')

// Basic content check
const indexContent = fs.readFileSync(INDEX_FILE, 'utf-8')
if (indexContent.includes('module.exports = {') && indexContent.includes('VuAdd:')) {
  console.log('✅ Main entry file seems to contain component exports')
} else {
  console.error('❌ Main entry file does not look correct (missing module.exports or known export)')
  process.exit(1)
}

console.log('✨ Verification successful!')
