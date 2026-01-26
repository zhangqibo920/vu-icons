<script setup lang="ts">
const name = 'VuCandy'
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
    <path d="M10 7v10.9m4-11.8V17m2-10V3a1 1 0 011.707-.707 2.5 2.5 0 002.152.717 1 1 0 011.131 1.131 2.5 2.5 0 00.717 2.152A1 1 0 0121 8h-4"/><path d="M16.536 7.465a5 5 0 00-7.072 0l-2 2a5 5 0 000 7.07 5 5 0 007.072 0l2-2a5 5 0 000-7.07"/><path d="M8 17v4a1 1 0 01-1.707.707 2.5 2.5 0 00-2.152-.717 1 1 0 01-1.131-1.131 2.5 2.5 0 00-.717-2.152A1 1 0 013 16h4"/>
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
