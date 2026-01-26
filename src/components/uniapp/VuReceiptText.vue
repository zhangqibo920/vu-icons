<script setup lang="ts">
const name = 'VuReceiptText'
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
    <path d="M13 16H8m6-8H8m8 4H8M4 3a1 1 0 011-1 1.3 1.3 0 01.7.2l.933.6a1.3 1.3 0 001.4 0l.934-.6a1.3 1.3 0 011.4 0l.933.6a1.3 1.3 0 001.4 0l.933-.6a1.3 1.3 0 011.4 0l.934.6a1.3 1.3 0 001.4 0l.933-.6A1.3 1.3 0 0119 2a1 1 0 011 1v18a1 1 0 01-1 1 1.3 1.3 0 01-.7-.2l-.933-.6a1.3 1.3 0 00-1.4 0l-.934.6a1.3 1.3 0 01-1.4 0l-.933-.6a1.3 1.3 0 00-1.4 0l-.933.6a1.3 1.3 0 01-1.4 0l-.934-.6a1.3 1.3 0 00-1.4 0l-.933.6a1.3 1.3 0 01-.7.2 1 1 0 01-1-1z"/>
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
