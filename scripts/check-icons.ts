import fs from 'fs'
import path from 'path'
import { glob } from 'glob'

const ICONS_DIR = path.join(__dirname, '../src/icons/optimized')

// Helper to find all SVG files recursively
function getAllSvgFiles(dir: string): string[] {
  let results: string[] = []
  const list = fs.readdirSync(dir)
  list.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllSvgFiles(filePath))
    } else {
      if (file.endsWith('.svg')) {
        results.push(filePath)
      }
    }
  })
  return results
}

async function checkIcons() {
  console.log('🔍 Checking icons...')
  
  if (!fs.existsSync(ICONS_DIR)) {
      console.error(`❌ Optimized icons directory not found: ${ICONS_DIR}`)
      console.log('   Run "npm run optimize:svg" first.')
      process.exit(1)
  }

  const files = getAllSvgFiles(ICONS_DIR)
  console.log(`Found ${files.length} icons.`)

  const issues: string[] = []
  const names = new Map<string, string>() // lowercase name -> original path

  // 1. Check for Case-Insensitive Collisions
  files.forEach(file => {
    const filename = path.basename(file)
    const lowerName = filename.toLowerCase()
    
    if (names.has(lowerName)) {
      issues.push(`❌ Case-insensitive collision: ${filename} conflicts with ${path.basename(names.get(lowerName)!)}`)
      issues.push(`   Path 1: ${file}`)
      issues.push(`   Path 2: ${names.get(lowerName)}`)
    } else {
      names.set(lowerName, file)
    }
  })

  // 2. Check ViewBox and Attributes
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8')
    const filename = path.basename(file)
    
    // Check ViewBox
    if (!content.includes('viewBox="0 0 24 24"')) {
       // Try to extract viewBox
       const match = content.match(/viewBox="([^"]+)"/)
       if (match) {
         if (match[1] !== '0 0 24 24') {
            // It's not 0 0 24 24, but maybe it is acceptable? 
            // The README says "Ensure SVG has 24x24 viewBox"
            issues.push(`⚠️  ${filename}: Invalid viewBox "${match[1]}" (Expected "0 0 24 24")`)
         }
       } else {
         issues.push(`❌ ${filename}: Missing viewBox attribute`)
       }
    }
    
    // Check Content Validity (Empty)
    if (content.trim().length === 0) {
        issues.push(`❌ ${filename}: File is empty`)
    }
    
    // Check for hardcoded colors (optional, but good for icon libs)
    // We expect "currentColor" usually, or specific fills. 
    // If it has hex codes, it might not be tintable.
    // This is a warning.
    // if (content.match(/#[0-9a-fA-F]{3,6}/) && !content.includes('currentColor')) {
    //    issues.push(`ℹ️  ${filename}: Contains hardcoded colors (may not be tintable)`)
    // }
  })

  if (issues.length > 0) {
    console.log('\n🚨 Issues found:')
    issues.forEach(issue => console.log(issue))
    process.exit(1)
  } else {
    console.log('\n✅ All icons passed checks!')
  }
}

checkIcons()
