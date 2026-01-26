import https from 'https'
import fs from 'fs'
import path from 'path'
import { URL } from 'url'

const LUCIDE_JSON_URL = 'https://raw.githubusercontent.com/iconify/icon-sets/master/json/lucide.json'
const OUTPUT_DIR = path.join(__dirname, '../src/icons/lucide')

interface IconifyJSON {
  icons: Record<string, {
    body: string
    width?: number
    height?: number
  }>
  width?: number
  height?: number
}

function ensureDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

function fetchJson(url: string): Promise<IconifyJSON> {
  return new Promise((resolve, reject) => {
    const get = (currentUrl: string) => {
      https.get(currentUrl, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          // Follow redirect
          const nextUrl = new URL(res.headers.location, currentUrl).toString()
          console.log(`↪️ Redirecting to ${nextUrl}...`)
          get(nextUrl)
          return
        }

        if (res.statusCode !== 200) {
          reject(new Error(`Request failed with status code ${res.statusCode}`))
          return
        }

        let data = ''
        res.on('data', (chunk) => {
          data += chunk
        })
        res.on('end', () => {
          try {
            resolve(JSON.parse(data))
          } catch (e) {
            reject(e)
          }
        })
      }).on('error', (err) => {
        reject(err)
      })
    }
    
    get(url)
  })
}

async function generateIcons() {
  console.log('🚀 Fetching Lucide icons...')
  
  try {
    const data = await fetchJson(LUCIDE_JSON_URL)
    const icons = data.icons
    const defaultWidth = data.width || 24
    const defaultHeight = data.height || 24
    
    console.log(`📦 Found ${Object.keys(icons).length} icons. Generating SVG files...`)
    
    ensureDir(OUTPUT_DIR)
    
    let count = 0
    
    for (const [name, icon] of Object.entries(icons)) {
      const width = icon.width || defaultWidth
      const height = icon.height || defaultHeight
      const body = icon.body
      
      const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`
      
      fs.writeFileSync(path.join(OUTPUT_DIR, `${name}.svg`), svgContent)
      count++
      
      if (count % 100 === 0) {
        process.stdout.write('.')
      }
    }
    
    console.log(`\n✨ Successfully generated ${count} Lucide icons in ${OUTPUT_DIR}`)
    
  } catch (error) {
    console.error('❌ Error fetching or generating icons:', error)
  }
}

generateIcons()
