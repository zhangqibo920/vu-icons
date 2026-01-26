<script setup lang="ts">
const name = 'VuPickaxe'
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
    <path d="M14 13l-8.381 8.38a1 1 0 01-3.001-3L11 9.999m4.973-5.972A13 13 0 005.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 015.822 3.024m4 4.001a19.9 19.9 0 013.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0020 8.069"/><path d="M18.352 3.352a1.205 1.205 0 00-1.704 0l-5.296 5.296a1.205 1.205 0 000 1.704l2.296 2.296a1.205 1.205 0 001.704 0l5.296-5.296a1.205 1.205 0 000-1.704z"/>
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
