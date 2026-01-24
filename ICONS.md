# 图标列表

## 所有可用图标

| 图标 | 组件名 | SVG文件 | 说明 |
|------|---------|----------|------|
| 👤 | VuUser | user.svg | 用户头像 |
| 🔍 | VuSearch | search.svg | 搜索 |
| ⭐ | VuStar | star.svg | 星星/收藏 |
| 🏠 | VuHome | home.svg | 首页 |
| ⚙️ | VuSettings | settings.svg | 设置 |
| 💬 | VuMessage | message.svg | 消息/评论 |
| ℹ️ | VuInfo | info.svg | 信息提示 |
| ❌ | VuClose | close.svg | 关闭/删除 |
| ➕ | VuAdd | add.svg | 添加/新增 |
| ✏️ | VuEdit | edit.svg | 编辑 |
| ❤️ | VuFavorite | favorite.svg | 喜欢/红心 |
| ⬅️ | VuArrowLeft | arrow-left.svg | 左箭头 |
| ➡️ | VuArrowRight | arrow-right.svg | 右箭头 |
| ⬆️ | VuArrowUp | arrow-up.svg | 上箭头 |
| ⬇️ | VuArrowDown | arrow-down.svg | 下箭头 |
| ✅ | VuCheck | check.svg | 对勾/确认 |
| 🗑️ | VuDelete | delete.svg | 删除/垃圾桶 |
| ⬇️ | VuDownload | download.svg | 下载 |
| ⬆️ | VuUpload | upload.svg | 上传 |
| 🔗 | VuShare | share.svg | 分享 |
| 👍 | VuLike | like.svg | 点赞 |
| 👎 | VuDislike | dislike.svg | 踩 |
| 🔍 | VuFilter | filter.svg | 筛选 |
| 📊 | VuSort | sort.svg | 排序 |
| 🔄 | VuRefresh | refresh.svg | 刷新 |
| 🔒 | VuLock | lock.svg | 锁定 |
| 🔓 | VuUnlock | unlock.svg | 解锁 |
| 🔔 | VuBell | bell.svg | 通知 |
| 📷 | VuCamera | camera.svg | 相机 |
| 🖼️ | VuImage | image.svg | 图片 |
| 🎥 | VuVideo | video.svg | 视频 |
| 🎵 | VuMusic | music.svg | 音乐 |
| 📄 | VuFile | file.svg | 文件 |
| 📁 | VuFolder | folder.svg | 文件夹 |
| 🔗 | VuLink | link.svg | 链接 |
| 📋 | VuCopy | copy.svg | 复制 |
| 📌 | VuPaste | paste.svg | 粘贴 |
| ✂️ | VuCut | cut.svg | 剪切 |
| ↩️ | VuUndo | undo.svg | 撤销 |
| ↪️ | VuRedo | redo.svg | 重做 |

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
