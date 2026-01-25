<div align="center">

# VU-Icons

![npm version](https://img.shields.io/npm/v/vu-icons)
![npm downloads](https://img.shields.io/npm/dm/vu-icons)
![license](https://img.shields.io/npm/l/vu-icons)
![bundle size](https://img.shields.io/bundlephobia/minzip/vu-icons)

Vue3 & UniApp SVG Icon Library, supports Tree Shaking for on-demand imports, built-in complete TypeScript type declarations.

[English](./README.md) | [简体中文](./README.zh-CN.md)

</div>

## ✨ Features

- 🎨 **Dual Framework Support** - Supports both Vue3 and UniApp
- 📦 **On-demand Import** - Supports Tree Shaking optimization, only bundles used icons
- 🎯 **Inline SVG** - Excellent performance, no extra requests
- 🌈 **Highly Customizable** - Supports custom size and color
- 📝 **TypeScript** - Complete type declarations, excellent developer experience
- 🚀 **Automated Build** - One-click component generation, quickly add new icons
- 📱 **Responsive Design** - Supports both number and string sizes

## 📦 Installation

```bash
npm install vu-icons
```

Or using yarn:

```bash
yarn add vu-icons
```

## 🚀 Quick Start

### Vue3 Project

```vue
<script setup lang="ts">
import { VuUser, VuSearch, VuStar } from 'vu-icons'
</script>

<template>
  <div>
    <VuUser :size="24" color="#333" />
    <VuSearch :size="32" color="#1890ff" />
    <VuStar :size="20" color="#faad14" />
  </div>
</template>
```

### UniApp Project

```vue
<script setup lang="ts">
import { VuUser, VuSearch, VuStar } from 'vu-icons/uniapp'
</script>

<template>
  <view>
    <VuUser :size="24" color="#333" />
    <VuSearch :size="32" color="#1890ff" />
    <VuStar :size="20" color="#faad14" />
  </view>
</template>
```

## 📖 Props

| Prop | Type | Default | Description |
|------|------|---------|------|
| size | number \| string | 24 | Icon size, supports number (px) or string (e.g., '2rem', '24px') |
| color | string | 'currentColor' | Icon color, supports any valid CSS color value |
| className | string | '' | Custom class name |
| spin | boolean | false | Whether to spin the icon, useful for loading states |

## 🎨 Usage Examples

### Loading Icon

```vue
<template>
  <div>
    <VuLoading :size="24" color="#1890ff" spin />
    <!-- Or make any icon spin -->
    <VuRefresh :size="24" spin />
  </div>
</template>
```

### Custom Size

```vue
<template>
  <div>
    <VuUser :size="16" color="#333" />
    <VuUser :size="24" color="#333" />
    <VuUser :size="32" color="#333" />
    <VuUser :size="48" color="#333" />
  </div>
</template>
```

### Custom Color

```vue
<template>
  <div>
    <VuUser :size="32" color="#1890ff" />
    <VuUser :size="32" color="#52c41a" />
    <VuUser :size="32" color="#faad14" />
    <VuUser :size="32" color="#f5222d" />
  </div>
</template>
```

### String Size

```vue
<template>
  <div>
    <VuUser size="1rem" color="#722ed1" />
    <VuUser size="2rem" color="#722ed1" />
    <VuUser size="3rem" color="#722ed1" />
  </div>
</template>
```

### With CSS Class

```vue
<template>
  <div>
    <VuUser :size="24" color="#333" className="icon-hover" />
  </div>
</template>

<style>
.icon-hover:hover {
  opacity: 0.7;
  cursor: pointer;
}
</style>
```

## 📋 Available Icons

| Icon | Component | Description |
|------|---------|------|
| 👤 | VuUser | User |
| 🔍 | VuSearch | Search |
| ⭐ | VuStar | Star |
| 🏠 | VuHome | Home |
| ⚙️ | VuSettings | Settings |
| 💬 | VuMessage | Message |
| ℹ️ | VuInfo | Info |
| ❌ | VuClose | Close |
| ➕ | VuAdd | Add |
| ✏️ | VuEdit | Edit |
| ❤️ | VuFavorite | Favorite |
| ⬅️ | VuArrowLeft | Arrow Left |
| ➡️ | VuArrowRight | Arrow Right |
| ⬆️ | VuArrowUp | Arrow Up |
| ⬇️ | VuArrowDown | Arrow Down |
| ✅ | VuCheck | Check |
| 🗑️ | VuDelete | Delete |
| ⬇️ | VuDownload | Download |
| ⬆️ | VuUpload | Upload |
| 🔗 | VuShare | Share |
| 👍 | VuLike | Like |
| 👎 | VuDislike | Dislike |
| 🔍 | VuFilter | Filter |
| 📊 | VuSort | Sort |
| 🔄 | VuRefresh | Refresh |
| 🔒 | VuLock | Lock |
| 🔓 | VuUnlock | Unlock |
| 🔔 | VuBell | Bell |
| 📷 | VuCamera | Camera |
| 🖼️ | VuImage | Image |
| 🎥 | VuVideo | Video |
| 🎵 | VuMusic | Music |
| 📄 | VuFile | File |
| 📁 | VuFolder | Folder |
| 🔗 | VuLink | Link |
| 📋 | VuCopy | Copy |
| 📌 | VuPaste | Paste |
| ✂️ | VuCut | Cut |
| ↩️ | VuUndo | Undo |
| ↪️ | VuRedo | Redo |

For more icons, please check [ICONS.md](./ICONS.md)

## 🛠️ Development

### Adding New Icons

1. **Prepare SVG File**
   - Put SVG file in `src/icons/` directory
   - Use `kebab-case` naming (e.g., `home.svg`, `settings.svg`)
   - Ensure SVG has 24x24 viewBox

2. **Build Project**
   ```bash
   npm run build
   ```

3. **Use New Icon**
   ```vue
   <script setup>
   import { VuNewIcon } from 'vu-icons'
   </script>
   
   <template>
     <VuNewIcon :size="24" color="#333" />
   </template>
   ```

### Project Structure

```
vu-icons/
├── src/
│   ├── icons/              # Original SVG icons
│   ├── components/         # Component templates and generated components
│   ├── build-components.ts # Component generation script
│   └── index.ts           # Entry file
├── examples/              # Example projects
├── scripts/              # Build scripts
├── dist/                # Build output (published to npm)
├── gulpfile.js          # Gulp build configuration
├── package.json         # Project configuration
└── README.md           # Project documentation
```

### Local Development

```bash
# Install dependencies
npm install

# Build project
npm run build

# Check publish preparation
npm run publish:check
```

## 📝 Changelog

Check [CHANGELOG.md](./CHANGELOG.md) for version update history.

## 📄 License

[MIT](./LICENSE)

## 🤝 Contributing

Contributions are welcome! If you have good suggestions or found bugs, feel free to submit Issues or Pull Requests.

## 📚 Related Documentation

- [ICONS.md](./ICONS.md) - Complete icon list and usage guide
- [CHANGELOG.md](./CHANGELOG.md) - Version update log

## ❓ FAQ

### Q: Why choose inline SVG instead of font icons?

A: Inline SVG has the following advantages:
- Better performance, no extra HTTP requests
- Supports on-demand import, reduces bundle size
- More flexible style control
- Better accessibility

### Q: How to use in Vue 2?

A: This component library only supports Vue3. If you need a Vue2 version, consider using other icon libraries.

### Q: Can I customize icon styles?

A: Yes! Add custom class names through `className` prop, or modify component styles directly.

### Q: Which platforms are supported?

A: Supports Vue3 and UniApp, can be used on Web, Mini Programs, Apps, and other platforms.

## 🌟 Star History

If this project helps you, please give it a Star to support!

<div align="center">

Made with ❤️ by [Your Name](https://github.com/yourusername)

</div>
