<script setup lang="ts">
const name = 'VuCandyOff'
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
    <path d="M10 10v7.9m1.802-11.755a5 5 0 016.053 6.053M14 6.1v2.243m1.5 7.228l-.964.964a5 5 0 01-7.071 0 5 5 0 010-7.07l.964-.965"/><path d="M16 7V3a1 1 0 011.707-.707 2.5 2.5 0 002.152.717 1 1 0 011.131 1.131 2.5 2.5 0 00.717 2.152A1 1 0 0121 8h-4M2 2l20 20M8 17v4a1 1 0 01-1.707.707 2.5 2.5 0 00-2.152-.717 1 1 0 01-1.131-1.131 2.5 2.5 0 00-.717-2.152A1 1 0 013 16h4"/>
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
