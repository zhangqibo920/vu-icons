<script setup lang="ts">
import { ref, computed, markRaw } from 'vue'
import * as AllIcons from 'vu-icons/uniapp'
import { VuSearch, VuX, VuChevronLeft, VuChevronRight } from 'vu-icons/uniapp'

// Convert icons object to array
const iconsList = Object.entries(AllIcons).map(([name, component]) => ({
  name,
  component: markRaw(component)
}))

const searchText = ref('')
const pageSize = 50
const currentPage = ref(1)

const filteredIcons = computed(() => {
  const query = searchText.value.toLowerCase().trim()
  if (!query) return iconsList
  
  return iconsList.filter(icon => 
    icon.name.toLowerCase().includes(query)
  )
})

const totalPages = computed(() => Math.ceil(filteredIcons.value.length / pageSize))

const currentIcons = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredIcons.value.slice(start, start + pageSize)
})

const copyName = (name: string) => {
  uni.setClipboardData({
    data: name,
    success: () => {
      uni.showToast({
        title: `已复制`,
        icon: 'success',
        duration: 1500
      })
    }
  })
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    uni.pageScrollTo({ scrollTop: 0, duration: 300 })
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    uni.pageScrollTo({ scrollTop: 0, duration: 300 })
  }
}

const clearSearch = () => {
  searchText.value = ''
  currentPage.value = 1
}
</script>

<template>
  <view class="app-container">
    <!-- Sticky Header -->
    <view class="header-wrapper">
      <view class="search-box">
        <view class="search-input-wrapper">
          <VuSearch :size="18" color="#999" style="margin-left: 12px" />
          <input 
            class="search-input"
            v-model="searchText" 
            placeholder="Search icons..."
            @input="currentPage = 1"
          />
          <view v-if="searchText" class="clear-btn" @click="clearSearch">
            <VuX :size="16" color="#999" />
          </view>
        </view>
      </view>
      <view class="stats-bar">
        <text class="stats-text">{{ filteredIcons.length }} icons found</text>
        <view class="pagination-simple" v-if="totalPages > 1">
          <text class="page-count">{{ currentPage }}/{{ totalPages }}</text>
        </view>
      </view>
    </view>
    
    <!-- Main Content -->
    <view class="content-wrapper">
      <view class="icon-grid">
        <view 
          v-for="icon in currentIcons" 
          :key="icon.name" 
          class="icon-item"
          @click="copyName(icon.name)"
          hover-class="icon-item-hover"
        >
          <view class="icon-preview">
            <component :is="icon.component" :size="32" color="#333" />
          </view>
          <text class="icon-name">{{ icon.name }}</text>
        </view>
      </view>
      
      <!-- Empty State -->
      <view v-if="filteredIcons.length === 0" class="empty-state">
        <text class="empty-text">No icons found</text>
      </view>

      <!-- Bottom Pagination -->
      <view class="pagination-footer" v-if="totalPages > 1">
        <button 
          class="nav-btn" 
          :class="{ disabled: currentPage === 1 }"
          @click="prevPage" 
          :disabled="currentPage === 1"
        >
          <VuChevronLeft :size="20" />
        </button>
        <text class="page-number">{{ currentPage }} / {{ totalPages }}</text>
        <button 
          class="nav-btn" 
          :class="{ disabled: currentPage === totalPages }"
          @click="nextPage" 
          :disabled="currentPage === totalPages"
        >
          <VuChevronRight :size="20" />
        </button>
      </view>
    </view>
  </view>
</template>

<style>
/* Global */
page {
  background-color: #f5f7fa;
}

.app-container {
  padding-top: 110px; /* Header height */
  padding-bottom: 30px;
}

/* Header */
.header-wrapper {
  position: fixed;
  top: 80rpx;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.search-box {
  padding: 12px 16px;
}

.search-input-wrapper {
  position: relative;
  background-color: #f0f2f5;
  border-radius: 8px;
  height: 40px;
  display: flex;
  align-items: center;
}

.search-input {
  flex: 1;
  height: 100%;
  padding: 0 12px;
  font-size: 14px;
}

.clear-btn {
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clear-icon {
  color: #999;
  font-size: 20px;
}

.stats-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-top: 1px solid #f0f0f0;
  background-color: #fafafa;
}

.stats-text {
  font-size: 12px;
  color: #666;
}

.page-count {
  font-size: 12px;
  color: #999;
  font-weight: bold;
}

/* Grid */
.content-wrapper {
  padding: 12px;
}

.icon-grid {
  display: flex;
  flex-wrap: wrap;
  margin: -6px; /* Negative margin for gutter */
}

.icon-item {
  width: 33.333%;
  box-sizing: border-box;
  padding: 6px;
}

/* Use a pseudo-element for aspect ratio in a more robust way or just fixed height */
.icon-item-hover .icon-preview {
  background-color: #f0f7ff;
  border-color: #1890ff;
}

.icon-preview {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  box-shadow: 0 1px 2px rgba(0,0,0,0.03);
  transition: all 0.2s;
}

.icon-name {
  margin-top: 10px;
  font-size: 11px;
  color: #666;
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 4px;
}

/* Empty State */
.empty-state {
  padding: 40px 0;
  display: flex;
  justify-content: center;
}

.empty-text {
  color: #999;
  font-size: 14px;
}

/* Footer Pagination */
.pagination-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  gap: 16px;
}

.nav-btn {
  margin: 0;
  font-size: 14px;
  background-color: #fff;
  color: #333;
  border: 1px solid #ddd;
  padding: 0 20px;
  height: 36px;
  line-height: 34px;
  border-radius: 18px;
}

.nav-btn.disabled {
  background-color: #f5f5f5;
  color: #bbb;
  border-color: #eee;
}

.page-number {
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

/* No Support Tip */
.no-support-tip {
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  margin-top: 20px;
}

.tip-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  display: block;
  margin-bottom: 8px;
}

.tip-desc {
  font-size: 13px;
  color: #888;
}
</style>
