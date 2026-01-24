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
  VuFavorite
} from 'vu-icons/uniapp'
</script>

<template>
  <view class="container">
    <view class="title">VU-Icons UniApp Demo</view>
    
    <view class="section">
      <view class="section-title">所有图标</view>
      <view class="icon-grid">
        <view class="icon-item">
          <VuUser :size="32" color="#333" />
          <text>User</text>
        </view>
        <view class="icon-item">
          <VuSearch :size="32" color="#333" />
          <text>Search</text>
        </view>
        <view class="icon-item">
          <VuStar :size="32" color="#333" />
          <text>Star</text>
        </view>
        <view class="icon-item">
          <VuHome :size="32" color="#333" />
          <text>Home</text>
        </view>
        <view class="icon-item">
          <VuSettings :size="32" color="#333" />
          <text>Settings</text>
        </view>
        <view class="icon-item">
          <VuMessage :size="32" color="#333" />
          <text>Message</text>
        </view>
        <view class="icon-item">
          <VuInfo :size="32" color="#333" />
          <text>Info</text>
        </view>
        <view class="icon-item">
          <VuClose :size="32" color="#333" />
          <text>Close</text>
        </view>
        <view class="icon-item">
          <VuAdd :size="32" color="#333" />
          <text>Add</text>
        </view>
        <view class="icon-item">
          <VuEdit :size="32" color="#333" />
          <text>Edit</text>
        </view>
        <view class="icon-item">
          <VuFavorite :size="32" color="#333" />
          <text>Favorite</text>
        </view>
      </view>
    </view>

    <view class="section">
      <view class="section-title">自定义尺寸</view>
      <view class="icon-group">
        <VuUser :size="16" color="#1890ff" />
        <VuUser :size="24" color="#1890ff" />
        <VuUser :size="32" color="#1890ff" />
        <VuUser :size="48" color="#1890ff" />
      </view>
    </view>

    <view class="section">
      <view class="section-title">自定义颜色</view>
      <view class="icon-group">
        <VuUser :size="32" color="#1890ff" />
        <VuUser :size="32" color="#52c41a" />
        <VuUser :size="32" color="#faad14" />
        <VuUser :size="32" color="#f5222d" />
      </view>
    </view>

    <view class="section">
      <view class="section-title">字符串尺寸</view>
      <view class="icon-group">
        <VuUser size="1rem" color="#722ed1" />
        <VuUser size="2rem" color="#722ed1" />
        <VuUser size="3rem" color="#722ed1" />
      </view>
    </view>
  </view>
</template>

<style scoped>
.container {
  padding: 20px;
}

.title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 40px;
}

.section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

.icon-group {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 10px;
}

.icon-item text {
  font-size: 14px;
  color: #666;
}
</style>
