# 图标列表

## 概览

vu-icons 包含 **1800+** 个图标组件，涵盖以下分类：

| 分类 | 说明 | 图标来源 |
|------|------|----------|
| lucide | Lucide 图标库 | 1600+ 图标 |
| action | 操作类图标 | 30+ 图标 |
| arrows | 箭头类图标 | 10+ 图标 |
| chart | 图表类图标 | 10+ 图标 |
| communication | 通讯类图标 | 10+ 图标 |
| device | 设备类图标 | 10+ 图标 |
| editor | 编辑器类图标 | 10+ 图标 |
| file | 文件类图标 | 10+ 图标 |
| finance | 金融类图标 | 10+ 图标 |
| location | 位置类图标 | 10+ 图标 |
| media | 媒体类图标 | 10+ 图标 |
| others | 其他图标 | 30+ 图标 |
| system | 系统类图标 | 10+ 图标 |
| weather | 天气类图标 | 10+ 图标 |

## 常用图标示例

| 图标 | 组件名 | 说明 |
|------|---------|------|
| 👤 | VuUser | 用户头像 |
| 🔍 | VuSearch | 搜索 |
| ⭐ | VuStar | 星星/收藏 |
| 🏠 | VuHome | 首页 |
| ⚙️ | VuSettings | 设置 |
| 💬 | VuMessage | 消息/评论 |
| ℹ️ | VuInfo | 信息提示 |
| ❌ | VuClose | 关闭/删除 |
| ➕ | VuAdd | 添加/新增 |
| ✏️ | VuEdit | 编辑 |
| ❤️ | VuFavorite | 喜欢/红心 |
| ⬅️ | VuArrowLeft | 左箭头 |
| ➡️ | VuArrowRight | 右箭头 |
| ⬆️ | VuArrowUp | 上箭头 |
| ⬇️ | VuArrowDown | 下箭头 |
| ✅ | VuCheck | 对勾/确认 |
| 🗑️ | VuDelete | 删除/垃圾桶 |
| ⬇️ | VuDownload | 下载 |
| ⬆️ | VuUpload | 上传 |
| 🔗 | VuShare | 分享 |
| 👍 | VuLike | 点赞 |
| 👎 | VuDislike | 踩 |
| 🔍 | VuFilter | 筛选 |
| 📊 | VuSort | 排序 |
| 🔄 | VuRefresh | 刷新 |
| 🔒 | VuLock | 锁定 |
| 🔓 | VuUnlock | 解锁 |
| 🔔 | VuBell | 通知 |
| 📷 | VuCamera | 相机 |
| 🖼️ | VuImage | 图片 |

## 查看所有图标

要查看所有可用图标，可以：

1. 查看 `dist/icons.json` 文件，包含所有组件名
2. 访问官网 https://vuicons.qiboz.top/ 浏览完整图标列表
3. 在 IDE 中使用 `web-types.json` 获得自动补全提示

## 使用示例

### Vue3 项目

```vue
<script setup lang="ts">
import { 
  VuUser, 
  VuSearch, 
  VuStar,
  VuHome,
  VuSettings,
  VuMessage,
  VuInfo,
  VuClose,
  VuAdd,
  VuEdit,
  VuFavorite,
  VuArrowLeft,
  VuArrowRight,
  VuArrowUp,
  VuArrowDown,
  VuCheck,
  VuDelete,
  VuDownload,
  VuUpload,
  VuShare,
  VuLike,
  VuDislike,
  VuFilter,
  VuSort,
  VuRefresh,
  VuLock,
  VuUnlock,
  VuBell,
  VuCamera,
  VuImage,
  VuVideo,
  VuMusic,
  VuFile,
  VuFolder,
  VuLink,
  VuCopy,
  VuPaste,
  VuCut,
  VuUndo,
  VuRedo
} from 'vu-icons'
</script>

<template>
  <div>
    <VuUser :size="24" color="#333" />
    <VuSearch :size="24" color="#333" />
    <VuStar :size="24" color="#333" />
    <VuHome :size="24" color="#333" />
    <VuSettings :size="24" color="#333" />
    <VuMessage :size="24" color="#333" />
    <VuInfo :size="24" color="#333" />
    <VuClose :size="24" color="#333" />
    <VuAdd :size="24" color="#333" />
    <VuEdit :size="24" color="#333" />
    <VuFavorite :size="24" color="#333" />
    <VuArrowLeft :size="24" color="#333" />
    <VuArrowRight :size="24" color="#333" />
    <VuArrowUp :size="24" color="#333" />
    <VuArrowDown :size="24" color="#333" />
    <VuCheck :size="24" color="#333" />
    <VuDelete :size="24" color="#333" />
    <VuDownload :size="24" color="#333" />
    <VuUpload :size="24" color="#333" />
    <VuShare :size="24" color="#333" />
    <VuLike :size="24" color="#333" />
    <VuDislike :size="24" color="#333" />
    <VuFilter :size="24" color="#333" />
    <VuSort :size="24" color="#333" />
    <VuRefresh :size="24" color="#333" />
    <VuLock :size="24" color="#333" />
    <VuUnlock :size="24" color="#333" />
    <VuBell :size="24" color="#333" />
    <VuCamera :size="24" color="#333" />
    <VuImage :size="24" color="#333" />
    <VuVideo :size="24" color="#333" />
    <VuMusic :size="24" color="#333" />
    <VuFile :size="24" color="#333" />
    <VuFolder :size="24" color="#333" />
    <VuLink :size="24" color="#333" />
    <VuCopy :size="24" color="#333" />
    <VuPaste :size="24" color="#333" />
    <VuCut :size="24" color="#333" />
    <VuUndo :size="24" color="#333" />
    <VuRedo :size="24" color="#333" />
  </div>
</template>
```

### UniApp 项目

```vue
<script setup lang="ts">
import { 
  VuUser, 
  VuSearch, 
  VuStar,
  VuHome,
  VuSettings,
  VuMessage,
  VuInfo,
  VuClose,
  VuAdd,
  VuEdit,
  VuFavorite,
  VuArrowLeft,
  VuArrowRight,
  VuArrowUp,
  VuArrowDown,
  VuCheck,
  VuDelete,
  VuDownload,
  VuUpload,
  VuShare,
  VuLike,
  VuDislike,
  VuFilter,
  VuSort,
  VuRefresh,
  VuLock,
  VuUnlock,
  VuBell,
  VuCamera,
  VuImage,
  VuVideo,
  VuMusic,
  VuFile,
  VuFolder,
  VuLink,
  VuCopy,
  VuPaste,
  VuCut,
  VuUndo,
  VuRedo
} from 'vu-icons/uniapp'
</script>

<template>
  <view>
    <VuUser :size="24" color="#333" />
    <VuSearch :size="24" color="#333" />
    <VuStar :size="24" color="#333" />
    <VuHome :size="24" color="#333" />
    <VuSettings :size="24" color="#333" />
    <VuMessage :size="24" color="#333" />
    <VuInfo :size="24" color="#333" />
    <VuClose :size="24" color="#333" />
    <VuAdd :size="24" color="#333" />
    <VuEdit :size="24" color="#333" />
    <VuFavorite :size="24" color="#333" />
    <VuArrowLeft :size="24" color="#333" />
    <VuArrowRight :size="24" color="#333" />
    <VuArrowUp :size="24" color="#333" />
    <VuArrowDown :size="24" color="#333" />
    <VuCheck :size="24" color="#333" />
    <VuDelete :size="24" color="#333" />
    <VuDownload :size="24" color="#333" />
    <VuUpload :size="24" color="#333" />
    <VuShare :size="24" color="#333" />
    <VuLike :size="24" color="#333" />
    <VuDislike :size="24" color="#333" />
    <VuFilter :size="24" color="#333" />
    <VuSort :size="24" color="#333" />
    <VuRefresh :size="24" color="#333" />
    <VuLock :size="24" color="#333" />
    <VuUnlock :size="24" color="#333" />
    <VuBell :size="24" color="#333" />
    <VuCamera :size="24" color="#333" />
    <VuImage :size="24" color="#333" />
    <VuVideo :size="24" color="#333" />
    <VuMusic :size="24" color="#333" />
    <VuFile :size="24" color="#333" />
    <VuFolder :size="24" color="#333" />
    <VuLink :size="24" color="#333" />
    <VuCopy :size="24" color="#333" />
    <VuPaste :size="24" color="#333" />
    <VuCut :size="24" color="#333" />
    <VuUndo :size="24" color="#333" />
    <VuRedo :size="24" color="#333" />
  </view>
</template>
```

## 添加新图标

1. **准备SVG文件**
   - 将SVG文件放入 `src/icons/` 目录
   - 文件名使用 `kebab-case` 命名（如 `home.svg`、`settings.svg`）
   - 确保SVG是24x24的viewBox

2. **重新构建**
   ```bash
   npm run build
   ```

3. **使用新图标**
   ```vue
   <script setup lang="ts">
   import { VuNewIcon } from 'vu-icons'
   </script>
   
   <template>
     <VuNewIcon :size="24" color="#333" />
   </template>
   ```

## 图标设计规范

- **尺寸**：24x24 像素
- **ViewBox**：`viewBox="0 0 24 24"`
- **填充**：使用 `fill="currentColor"` 以支持颜色自定义
- **路径**：使用简洁的路径，避免冗余属性
- **命名**：使用 `kebab-case` 命名（如 `user-profile.svg`）

## 示例SVG格式

```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
</svg>
```

## 相关资源

- [Material Design Icons](https://material.io/resources/icons/) - Google Material Design 图标库
- [Heroicons](https://heroicons.com/) - Tailwind CSS 官方图标库
- [Feather Icons](https://feathericons.com/) - 简洁的开源图标库
