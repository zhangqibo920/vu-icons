import fs from 'fs'
import path from 'path'

const ICONS_DIR = path.join(__dirname, '../src/icons')
const OPTIMIZED_DIR = path.join(__dirname, '../src/icons/optimized')

// Define categories and their keywords
const CATEGORIES: Record<string, string[]> = {
  'arrows': ['arrow', 'chevron', 'caret', 'expand', 'collapse', 'sort', 'to-top', 'to-bottom', 'triangle', 'forward', 'backward', 'skip', 'fast'],
  'action': ['add', 'delete', 'edit', 'copy', 'paste', 'save', 'search', 'download', 'upload', 'share', 'filter', 'refresh', 'undo', 'redo', 'login', 'logout', 'enter', 'exit', 'scan', 'zoom', 'cut', 'selected', 'unselected', 'check', 'close', 'minus', 'plus', 'multiply', 'divide', 'equal'],
  'media': ['play', 'pause', 'stop', 'music', 'video', 'volume', 'camera', 'image', 'picture', 'movie', 'film', 'sound', 'speaker', 'mic', 'mute', 'fullscreen', 'cast'],
  'communication': ['mail', 'message', 'chat', 'phone', 'call', 'comment', 'bell', 'notification', 'wifi', 'signal', 'bluetooth'],
  'editor': ['bold', 'italic', 'underline', 'list', 'align', 'text', 'font', 'link', 'unlink', 'quote', 'code', 'markdown', 'pen', 'pencil', 'eraser', 'color', 'brush'],
  'finance': ['money', 'card', 'wallet', 'dollar', 'cart', 'bag', 'bill', 'credit', 'bank', 'coupon', 'gift', 'price', 'tag', 'shopping', 'finance', 'invoice', 'refund', 'recharge', 'withdraw', 'payment'],
  'system': ['settings', 'menu', 'home', 'user', 'lock', 'unlock', 'calendar', 'clock', 'time', 'date', 'list', 'grid', 'more', 'info', 'help', 'warning', 'error', 'success', 'fail', 'loading', 'loader', 'spinner', 'trash', 'star', 'heart', 'bookmark', 'favorite', 'history', 'eye', 'dashboard', 'category', 'scan', 'qrcode', 'barcode'],
  'weather': ['sun', 'moon', 'cloud', 'rain', 'snow', 'wind', 'storm', 'lightning', 'temperature', 'thermometer', 'sunny', 'rainy'],
  'file': ['file', 'folder', 'document', 'paper', 'clip', 'attach', 'archive', 'box', 'package', 'note'],
  'location': ['location', 'map', 'pin', 'navigation', 'compass', 'gps', 'place', 'subway', 'bus', 'train', 'car', 'bike', 'walk', 'travel', 'hotel', 'hospital', 'classroom', 'library'],
  'chart': ['chart', 'graph', 'bar', 'pie', 'line', 'trend', 'activity', 'analytics', 'statistics', 'data'],
  'device': ['mobile', 'phone', 'tablet', 'desktop', 'laptop', 'monitor', 'watch', 'keyboard', 'mouse', 'print', 'battery'],
}

function ensureDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

function categorizeIcons() {
  console.log('📦 Starting icon categorization...')
  
  if (!fs.existsSync(ICONS_DIR)) {
    console.error(`❌ Icons directory not found: ${ICONS_DIR}`)
    return
  }

  const files = fs.readdirSync(ICONS_DIR)
  let movedCount = 0

  files.forEach(file => {
    const filePath = path.join(ICONS_DIR, file)
    const stat = fs.statSync(filePath)

    // Skip directories (including 'optimized') and non-svg files
    if (stat.isDirectory() || !file.endsWith('.svg')) {
      return
    }

    const fileName = file.toLowerCase().replace('.svg', '')
    let category = 'others'

    // Find category based on keywords
    for (const [cat, keywords] of Object.entries(CATEGORIES)) {
      if (keywords.some(k => fileName.includes(k))) {
        category = cat
        break
      }
    }

    const targetDir = path.join(ICONS_DIR, category)
    ensureDir(targetDir)
    
    const targetPath = path.join(targetDir, file)
    fs.renameSync(filePath, targetPath)
    console.log(`moved: ${file} -> ${category}/${file}`)
    movedCount++
  })

  console.log(`\n✨ Organized ${movedCount} icons into categories.`)
}

categorizeIcons()
