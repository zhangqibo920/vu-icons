<script setup lang="ts">
const name = 'VuMessageSquareHeart'
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
    <path d="M22 17a2 2 0 01-2 2H6.828a2 2 0 00-1.414.586l-2.202 2.202A.71.71 0 012 21.286V5a2 2 0 012-2h16a2 2 0 012 2z"/><path d="M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 00.407.314 1 1 0 00.783-.004 1.14 1.14 0 00.398-.31l3.008-3.264A2.77 2.77 0 0016.5 9.5 2.5 2.5 0 0012 8a2.5 2.5 0 00-4.5 1.5"/>
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
