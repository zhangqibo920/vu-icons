<script setup lang="ts">
const name = 'VuPackageOpen'
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
    <path d="M12 22v-9m3.17-10.79a1.67 1.67 0 011.63 0L21 4.57a1.93 1.93 0 010 3.36L8.82 14.79a1.66 1.66 0 01-1.64 0L3 12.43a1.93 1.93 0 010-3.36z"/><path d="M20 13v3.87a2.06 2.06 0 01-1.11 1.83l-6 3.08a1.93 1.93 0 01-1.78 0l-6-3.08A2.06 2.06 0 014 16.87V13"/><path d="M21 12.43a1.93 1.93 0 000-3.36L8.83 2.2a1.64 1.64 0 00-1.63 0L3 4.57a1.93 1.93 0 000 3.36l12.18 6.86a1.64 1.64 0 001.63 0z"/>
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
