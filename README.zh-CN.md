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

Vue3 & UniApp SVG 图标组件库，支持 Tree Shaking 按需引入，内置完整 TypeScript 类型声明。

[English](./README.md) | [简体中文](./README.zh-CN.md)

</div>

[官网地址(https://vuicons.qiboz.top/)](https://vuicons.qiboz.top/)

## ✨ 特性

- 🎨 **双框架支持** - 同时支持 Vue3 和 UniApp
- 📦 **按需引入** - 支持 Tree Shaking 优化，只打包使用的图标
- 🎯 **CSS Mask + SVG** - 使用 CSS Mask + URL编码 SVG 方案，无需字体文件
- 🌈 **高度可定制** - 支持自定义尺寸和颜色
- 📝 **TypeScript** - 完整的类型声明，开发体验优秀
- 🚀 **自动化构建** - 一键生成组件，快速添加新图标
- 📱 **响应式设计** - 支持数字和字符串尺寸
- 🔧 **小程序兼容** - 完美支持微信小程序等非 H5 环境（统一方案，无条件编译）

## 📦 安装

```bash
npm install vu-icons
```

或使用 yarn：

```bash
yarn add vu-icons
```

## 🚀 快速开始

### Vue3 项目

推荐使用 `VuIcon` 核心组件 + `name` 属性：

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

也支持按需引入包装组件：

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

### UniApp 项目

在 UniApp 中，**必须直接导入 `VuIcon` 核心组件**：

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

> ⚠️ **重要**：由于微信小程序编译限制，不能使用 `import { VuUser } from 'vu-icons/uniapp'` 间接导入包装组件，必须使用 `VuIcon` 核心组件 + `name` 属性。无需额外字体配置。

## 📖 Props

### VuIcon 核心组件

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|------|
| name | string | '' | 图标名称（推荐），如 `'home'`、`'search'`、`'star'` |
| icon | string | '' | 图标名称（别名，优先使用 `name`） |
| size | number \| string | 24 | 图标尺寸，支持数字（px）或字符串（如 '2rem'、'24px'） |
| color | string | 'currentColor' | 图标颜色，支持任何有效的 CSS 颜色值 |
| spin | boolean | false | 是否旋转，适用于加载状态 |

### 包装组件（VuHome、VuSearch 等）

包装组件仅支持 Vue3 项目，Props 与 VuIcon 相同，但不需要 `name`/`icon` 属性。

## 🎨 使用示例

### 加载状态 / 旋转图标

```vue
<template>
  <div>
    <VuIcon name="loading" :size="24" color="#1890ff" spin />
    <!-- 任何图标都可以旋转 -->
    <VuIcon name="refresh" :size="24" spin />
  </div>
</template>
```

### 自定义尺寸

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

### 自定义颜色

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

### 动态切换图标

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

## 🔧 技术原理

VU-Icons 使用 **CSS Mask + URL编码 SVG** 方案渲染图标，Vue3 和 UniApp 统一实现：

```
SVG → encodeURIComponent → data:image/svg+xml,... → mask-image (遮罩)
                                                       ↓
                                           background-color (着色)
```

- 无需字体文件，无需额外配置
- 不使用条件编译，所有平台统一方案
- 矢量渲染，任意尺寸清晰

## 📋 可用图标

更多图标请到官网查看 [ICONS](https://vuicons.qiboz.top/)

## 🛠️ 开发

### 添加新图标

1. **准备 SVG 文件**
   - 将 SVG 文件放入 `src/icons/` 目录
   - 文件名使用 `kebab-case` 命名（如 `home.svg`、`settings.svg`）
   - 确保 SVG 是 24x24 的 viewBox

2. **构建项目**
   ```bash
   npm run build:font
   ```

3. **使用新图标**
   ```vue
   <script setup>
   import VuIcon from 'vu-icons/icon'
   </script>
   
   <template>
     <VuIcon name="new-icon" :size="24" color="#333" />
   </template>
   ```

### 本地开发

```bash
# 安装依赖
npm install

# 构建项目
npm run build:font
```

## 📝 更新日志

查看 [CHANGELOG.md](./CHANGELOG.md) 了解版本更新历史。

## 📄 许可证

[MIT](./LICENSE)

## 🤝 贡献

欢迎贡献！如果你有好的建议或发现了 bug，欢迎提交 Issue 或 Pull Request。

## ❓ 常见问题

### Q: 为什么在 UniApp 中不能用 `import { VuHome } from 'vu-icons/uniapp'`？

A: uniapp 编译器对通过 JS 中转导出的 Vue 组件不会生成完整的小程序组件四件套，导致在微信小程序中不显示。必须直接导入 `.vue` 文件：`import VuIcon from 'vu-icons/uniapp/icon'`。

### Q: 在 UniApp 中需要配置字体文件吗？

A: 不需要。v1.5.0+ 使用 CSS Mask + SVG 方案，不再依赖字体文件，无需任何额外配置。

### Q: Vue3 和 UniApp 的 API 一致吗？

A: 是的，`VuIcon` 核心组件在两个平台使用完全相同的 Props（`name`/`icon`/`size`/`color`/`spin`）。

### Q: 支持哪些平台？

A: 支持 Vue3 和 UniApp，可以在 Web、小程序、App 等平台使用。

<div align="center">

Made with ❤️ by [Qiboz](https://vuicons.qiboz.top/)

</div>
