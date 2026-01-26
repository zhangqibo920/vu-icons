<script setup lang="ts">
const name = 'VuOrigami'
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
    <path d="M12 12V4a1 1 0 011-1h6.297a1 1 0 01.651 1.759l-4.696 4.025M12 21l-7.414-7.414A2 2 0 014 12.172V6.415a1.002 1.002 0 011.707-.707L20 20.009"/><path d="M12.214 3.381l8.414 14.966a1 1 0 01-.167 1.199l-1.168 1.163a1 1 0 01-.706.291H6.351a1 1 0 01-.625-.219L3.25 18.8a1 1 0 01.631-1.781l4.165.027"/>
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
