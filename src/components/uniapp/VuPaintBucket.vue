<script setup lang="ts">
const name = 'VuPaintBucket'
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
    <path d="M11 7L6 2m12.992 10H2.041m19.104 6.38A3.34 3.34 0 0120 16.5a3.3 3.3 0 01-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0020 22a2 2 0 002-2.025c0-.58-.285-1.13-.855-1.595M8.5 4.5l2.148-2.148a1.205 1.205 0 011.704 0l7.296 7.296a1.205 1.205 0 010 1.704l-7.592 7.592a3.615 3.615 0 01-5.112 0l-3.888-3.888a3.615 3.615 0 010-5.112L5.67 7.33"/>
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
