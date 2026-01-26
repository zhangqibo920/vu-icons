<script setup lang="ts">
import { ref, computed, shallowRef } from 'vue'
import * as AllIcons from 'vu-icons'

// Convert icons object to array
const iconsList = Object.entries(AllIcons).map(([name, component]) => ({
  name,
  component: shallowRef(component)
}))

const searchText = ref('')
const pageSize = 100
const currentPage = ref(1)
const toastMessage = ref('')
const showToast = ref(false)

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
  navigator.clipboard.writeText(name).then(() => {
    showNotification(`Copied: <${name} />`)
  })
}

const showNotification = (msg: string) => {
  toastMessage.value = msg
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 2000)
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="app-container">
    <!-- Sticky Header -->
    <header class="navbar">
      <div class="navbar-content">
        <div class="brand">
          <h1>VU-Icons</h1>
          <span class="badge">{{ iconsList.length }} Icons</span>
        </div>
        <div class="search-wrapper">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input 
            v-model="searchText" 
            placeholder="Search icons..."
            @input="currentPage = 1"
          />
          <button v-if="searchText" @click="searchText = ''; currentPage = 1" class="clear-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </header>

    <main class="main-content">
      <!-- Toolbar -->
      <div class="toolbar" v-if="totalPages > 1">
        <div class="pagination-info">
          Page {{ currentPage }} of {{ totalPages }}
        </div>
        <div class="pagination-controls">
          <button @click="prevPage" :disabled="currentPage === 1" class="nav-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button @click="nextPage" :disabled="currentPage === totalPages" class="nav-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>

      <!-- Grid -->
      <div class="icon-grid">
        <div 
          v-for="icon in currentIcons" 
          :key="icon.name" 
          class="icon-card"
          @click="copyName(icon.name)"
        >
          <div class="icon-preview">
            <component :is="icon.component" :size="32" class="icon-svg" />
          </div>
          <div class="icon-meta">
            <span class="icon-name">{{ icon.name }}</span>
          </div>
          <div class="icon-overlay">
            <span>Click to Copy</span>
          </div>
        </div>
      </div>
      
      <!-- Empty State -->
      <div v-if="filteredIcons.length === 0" class="empty-state">
        <div class="empty-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        <h3>No icons found</h3>
        <p>Try searching for something else</p>
      </div>

      <!-- Bottom Pagination -->
      <div class="pagination-bottom" v-if="totalPages > 1">
        <button @click="prevPage" :disabled="currentPage === 1" class="page-btn">Previous</button>
        <div class="page-numbers">
          <span class="current">{{ currentPage }}</span>
          <span class="sep">/</span>
          <span class="total">{{ totalPages }}</span>
        </div>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="page-btn">Next</button>
      </div>
    </main>

    <!-- Toast Notification -->
    <Transition name="fade">
      <div v-if="showToast" class="toast">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4caf50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>{{ toastMessage }}</span>
      </div>
    </Transition>
  </div>
</template>

<style>
:root {
  --primary-color: #3b82f6;
  --bg-color: #f8fafc;
  --card-bg: #ffffff;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --border-color: #e2e8f0;
}

body {
  margin: 0;
  background-color: var(--bg-color);
  color: var(--text-primary);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.app-container {
  min-height: 100vh;
}

/* Navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.navbar-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand h1 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.badge {
  background: #eff6ff;
  color: #3b82f6;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.search-wrapper {
  position: relative;
  width: 320px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
  pointer-events: none;
}

.search-wrapper input {
  width: 100%;
  padding: 10px 36px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-color);
  color: var(--text-primary);
  font-size: 0.95rem;
  transition: all 0.2s;
  box-sizing: border-box;
}

.search-wrapper input:focus {
  outline: none;
  border-color: var(--primary-color);
  background: #fff;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.clear-btn {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 4px;
  display: flex;
  border-radius: 50%;
}

.clear-btn:hover {
  background: #e2e8f0;
  color: var(--text-primary);
}

/* Main Content */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

/* Toolbar */
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.pagination-info {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
}

.pagination-controls {
  display: flex;
  gap: 8px;
}

.nav-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
  color: var(--text-secondary);
  transition: all 0.2s;
}

.nav-btn:hover:not(:disabled) {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: #f1f5f9;
}

/* Grid */
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1.5rem;
}

.icon-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.icon-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.icon-preview {
  color: var(--text-primary);
  transition: color 0.2s;
}

.icon-card:hover .icon-preview {
  color: var(--primary-color);
}

.icon-meta {
  text-align: center;
  width: 100%;
}

.icon-name {
  font-size: 0.85rem;
  color: var(--text-secondary);
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Fira Code', monospace;
}

.icon-overlay {
  position: absolute;
  inset: 0;
  background: rgba(59, 130, 246, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
}

.icon-overlay span {
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  transform: translateY(10px);
  transition: transform 0.2s;
}

.icon-card:hover .icon-overlay {
  opacity: 1;
}

.icon-card:hover .icon-overlay span {
  transform: translateY(0);
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 0;
  color: var(--text-secondary);
}

.empty-icon {
  margin-bottom: 1rem;
  color: #cbd5e1;
}

/* Bottom Pagination */
.pagination-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 3rem;
}

.page-btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color);
  background: #fff;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s;
}

.page-btn:hover:not(:disabled) {
  border-color: var(--text-primary);
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-numbers {
  font-family: monospace;
  font-size: 1rem;
}

.page-numbers .current {
  font-weight: 700;
  color: var(--text-primary);
}

.page-numbers .sep {
  margin: 0 8px;
  color: #cbd5e1;
}

.page-numbers .total {
  color: var(--text-secondary);
}

/* Toast */
.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: #1e293b;
  color: #fff;
  padding: 10px 20px;
  border-radius: 99px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  font-size: 0.9rem;
  font-weight: 500;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}

/* Mobile Responsive */
@media (max-width: 640px) {
  .navbar-content {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }
  
  .search-wrapper {
    width: 100%;
  }
  
  .icon-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
</style>
