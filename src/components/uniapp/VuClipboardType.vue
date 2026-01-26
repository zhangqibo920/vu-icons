<script setup lang="ts">
const name = 'VuClipboardType'
import { computed } from 'vue'

interface Props {
  size?: number | string
  color?: string
  className?: string
  spin?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  color: 'currentColor',
  className: '',
  spin: false
})

const style = computed(() => ({
  width: typeof props.size === 'number' ? `${props.size}px` : props.size,
  height: typeof props.size === 'number' ? `${props.size}px` : props.size,
  color: props.color,
  ...(props.spin ? { animation: 'vu-icon-spin 1s linear infinite' } : {})
}))
</script>

<template>
  <!-- #ifdef H5 -->
  <svg :class="className" :style="style" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><path d="M9 12v-1h6v1m-4 5h2m-1-6v6"/>
  </svg>
  <!-- #endif -->

  <!-- #ifndef H5 -->
  <rich-text :class="className" :style="style" :nodes="`<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg' style='width:${style.width};height:${style.height};color:${style.color}'><!-- SVG_PATH_CONTENT --></svg>`" />
  <!-- #endif -->
</template>

<style>
@keyframes vu-icon-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
