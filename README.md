<div align="center">

<a href="https://vuicons.qiboz.top/" target="_blank">
  <img src="./assets/logo.png" width="120" alt="VU-Icons Logo" />
</a>

# VU-Icons

[![Website](https://img.shields.io/badge/Website-vuicons.qiboz.top-blue)](https://vuicons.qiboz.top/)
![npm version](https://img.shields.io/npm/v/vu-icons)
![npm downloads](https://img.shields.io/npm/dm/vu-icons)
![license](https://img.shields.io/npm/l/vu-icons)
![bundle size](https://img.shields.io/bundlephobia/minzip/vu-icons)

Vue3 & UniApp SVG Icon Library, supports Tree Shaking for on-demand imports, built-in complete TypeScript type declarations.

[English](./README.md) | [简体中文](./README.zh-CN.md)

</div>

[Website(https://vuicons.qiboz.top/)](https://vuicons.qiboz.top/)

## ✨ Features

- 🎨 **Dual Framework Support** - Supports both Vue3 and UniApp
- 📦 **On-demand Import** - Supports Tree Shaking optimization, only bundles used icons
- 🎯 **CSS Mask + SVG** - Uses CSS Mask + URL-encoded SVG approach, no font files needed
- 🌈 **Highly Customizable** - Supports custom size and color
- 📝 **TypeScript** - Complete type declarations, excellent developer experience
- 🚀 **Automated Build** - One-click component generation, quickly add new icons
- 📱 **Responsive Design** - Supports both number and string sizes
- 🔧 **Mini Program Support** - Fully compatible with WeChat Mini Programs (unified approach, no conditional compilation)

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

Recommended: Use `VuIcon` core component with `name` prop:

```vue
<script setup lang="ts">
import VuIcon from 'vu-icons/icon'
</script>

<template>
  <div>
    <VuIcon name="user" :size="24" color="#333" />
    <VuIcon name="search" :size="32" color="#1890ff" />
    <VuIcon name="star" :size="20" color="#faad14" />
  </div>
</template>
```

Also supports on-demand import of wrapper components:

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

In UniApp, you **must directly import the `VuIcon` core component**:

```vue
<script>
import VuIcon from 'vu-icons/uniapp/icon'

export default {
  components: { VuIcon }
}
</script>

<template>
  <view>
    <VuIcon name="user" :size="24" color="#333" />
    <VuIcon name="search" :size="32" color="#1890ff" />
    <VuIcon name="star" :size="20" color="#faad14" />
  </view>
</template>
```

> ⚠️ **Important**: Due to WeChat Mini Program compilation limitations, you cannot use `import { VuUser } from 'vu-icons/uniapp'` to import wrapper components indirectly. You must use the `VuIcon` core component with the `name` prop. No font configuration is required.

## 📖 Props

### VuIcon Core Component

| Prop | Type | Default | Description |
|------|------|---------|------|
| name | string | '' | Icon name (recommended), e.g. `'home'`, `'search'`, `'star'` |
| icon | string | '' | Icon name (alias, prefer `name`) |
| size | number \| string | 24 | Icon size, supports number (px) or string (e.g., '2rem', '24px') |
| color | string | 'currentColor' | Icon color, supports any valid CSS color value |
| spin | boolean | false | Whether to spin the icon, useful for loading states |

### Wrapper Components (VuHome, VuSearch, etc.)

Wrapper components only work in Vue3 projects. They share the same Props as VuIcon, but don't require `name`/`icon` props.

## 🎨 Usage Examples

### Loading / Spinning Icon

```vue
<template>
  <div>
    <VuIcon name="loading" :size="24" color="#1890ff" spin />
    <!-- Any icon can spin -->
    <VuIcon name="refresh" :size="24" spin />
  </div>
</template>
```

### Custom Size

```vue
<template>
  <div>
    <VuIcon name="user" :size="16" color="#333" />
    <VuIcon name="user" :size="24" color="#333" />
    <VuIcon name="user" :size="32" color="#333" />
    <VuIcon name="user" :size="48" color="#333" />
  </div>
</template>
```

### Custom Color

```vue
<template>
  <div>
    <VuIcon name="user" :size="32" color="#1890ff" />
    <VuIcon name="user" :size="32" color="#52c41a" />
    <VuIcon name="user" :size="32" color="#faad14" />
    <VuIcon name="user" :size="32" color="#f5222d" />
  </div>
</template>
```

### Dynamic Icon Switching

```vue
<script setup>
import { ref } from 'vue'
import VuIcon from 'vu-icons/icon'

const isExpanded = ref(false)
</script>

<template>
  <VuIcon :name="isExpanded ? 'chevron-up' : 'chevron-down'" @click="isExpanded = !isExpanded" />
</template>
```

## 🔧 Technical Approach

VU-Icons uses **CSS Mask + URL-encoded SVG** for icon rendering, unified across Vue3 and UniApp:

```
SVG → encodeURIComponent → data:image/svg+xml,... → mask-image (mask)
                                                       ↓
                                           background-color (coloring)
```

- No font files needed, no extra configuration
- No conditional compilation, unified approach across all platforms
- Vector rendering, crisp at any size

## 💡 IDE Support

VU-Icons provides enhanced support for modern IDEs (like WebStorm, VS Code).

- **Autocompletion**: Includes `web-types.json` for better component tag and prop suggestions.
- **Icons List**: A JSON file containing all icon names is available at `vu-icons/dist/icons.json` for dynamic usage.

```javascript
// Example: Importing icon list
import icons from 'vu-icons/dist/icons.json'

console.log(icons) // ['VuAdd', 'VuUser', ...]
```

## 📋 Available Icons

For more icons, please check [ICONS](https://vuicons.qiboz.top/)

## 🛠️ Development

### Adding New Icons

1. **Prepare SVG File**
   - Put SVG file in `src/icons/` directory
   - Use `kebab-case` naming (e.g., `home.svg`, `settings.svg`)
   - Ensure SVG has 24x24 viewBox

2. **Build Project**
   ```bash
   npm run build:font
   ```

3. **Use New Icon**
   ```vue
   <script setup>
   import VuIcon from 'vu-icons/icon'
   </script>
   
   <template>
     <VuIcon name="new-icon" :size="24" color="#333" />
   </template>
   ```

### Local Development

```bash
# Install dependencies
npm install

# Build project
npm run build:font
```

## 📝 Changelog

Check [CHANGELOG.md](./CHANGELOG.md) for version update history.

## 📄 License

[MIT](./LICENSE)

## 🤝 Contributing

Contributions are welcome! If you have good suggestions or found bugs, feel free to submit Issues or Pull Requests.

## ❓ FAQ

### Q: Why can't I use `import { VuHome } from 'vu-icons/uniapp'` in UniApp?

A: The uniapp compiler doesn't generate complete Mini Program component files for Vue components exported through JS re-exports, causing icons not to display in WeChat Mini Programs. You must directly import the `.vue` file: `import VuIcon from 'vu-icons/uniapp/icon'`.

### Q: Do I need to configure font files in UniApp?

A: No. v1.5.0+ uses the CSS Mask + SVG approach, which no longer depends on font files. No extra configuration is needed.

### Q: Are the Vue3 and UniApp APIs consistent?

A: Yes. The `VuIcon` core component uses identical Props across both platforms (`name`/`icon`/`size`/`color`/`spin`).

### Q: Which platforms are supported?

A: Supports Vue3 and UniApp, can be used on Web, Mini Programs, Apps, and other platforms.

<div align="center">

Made with ❤️ by [Qiboz](https://vuicons.qiboz.top/)

</div>
