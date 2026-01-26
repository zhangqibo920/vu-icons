<script setup lang="ts">
const name = 'VuSparkles'
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
    <path d="M11.017 2.814a1 1 0 011.966 0l1.051 5.558a2 2 0 001.594 1.594l5.558 1.051a1 1 0 010 1.966l-5.558 1.051a2 2 0 00-1.594 1.594l-1.051 5.558a1 1 0 01-1.966 0l-1.051-5.558a2 2 0 00-1.594-1.594l-5.558-1.051a1 1 0 010-1.966l5.558-1.051a2 2 0 001.594-1.594zM20 2v4m2-2h-4"/><circle cx="4" cy="20" r="2"/>
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
