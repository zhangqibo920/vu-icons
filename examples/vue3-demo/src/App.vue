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
} from 'vu-icons'
</script>

<template>
  <div class="container">
    <h1>VU-Icons Vue3 Demo</h1>
    
    <div class="section">
      <h2>所有图标</h2>
      <div class="icon-grid">
        <div class="icon-item">
          <VuUser :size="32" color="#333" />
          <span>User</span>
        </div>
        <div class="icon-item">
          <VuSearch :size="32" color="#333" />
          <span>Search</span>
        </div>
        <div class="icon-item">
          <VuStar :size="32" color="#333" />
          <span>Star</span>
        </div>
        <div class="icon-item">
          <VuHome :size="32" color="#333" />
          <span>Home</span>
        </div>
        <div class="icon-item">
          <VuSettings :size="32" color="#333" />
          <span>Settings</span>
        </div>
        <div class="icon-item">
          <VuMessage :size="32" color="#333" />
          <span>Message</span>
        </div>
        <div class="icon-item">
          <VuInfo :size="32" color="#333" />
          <span>Info</span>
        </div>
        <div class="icon-item">
          <VuClose :size="32" color="#333" />
          <span>Close</span>
        </div>
        <div class="icon-item">
          <VuAdd :size="32" color="#333" />
          <span>Add</span>
        </div>
        <div class="icon-item">
          <VuEdit :size="32" color="#333" />
          <span>Edit</span>
        </div>
        <div class="icon-item">
          <VuFavorite :size="32" color="#333" />
          <span>Favorite</span>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>自定义尺寸</h2>
      <div class="icon-group">
        <VuUser :size="16" color="#1890ff" />
        <VuUser :size="24" color="#1890ff" />
        <VuUser :size="32" color="#1890ff" />
        <VuUser :size="48" color="#1890ff" />
      </div>
    </div>

    <div class="section">
      <h2>自定义颜色</h2>
      <div class="icon-group">
        <VuUser :size="32" color="#1890ff" />
        <VuUser :size="32" color="#52c41a" />
        <VuUser :size="32" color="#faad14" />
        <VuUser :size="32" color="#f5222d" />
      </div>
    </div>

    <div class="section">
      <h2>字符串尺寸</h2>
      <div class="icon-group">
        <VuUser size="1rem" color="#722ed1" />
        <VuUser size="2rem" color="#722ed1" />
        <VuUser size="3rem" color="#722ed1" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 40px;
}

.section {
  margin-bottom: 40px;
}

h2 {
  color: #666;
  margin-bottom: 20px;
  font-size: 18px;
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

.icon-item span {
  font-size: 14px;
  color: #666;
}
</style>
