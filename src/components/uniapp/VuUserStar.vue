<script setup lang="ts">
const name = 'VuUserStar'
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
    <path d="M16.051 12.616a1 1 0 011.909.024l.737 1.452a1 1 0 00.737.535l1.634.256a1 1 0 01.588 1.806l-1.172 1.168a1 1 0 00-.282.866l.259 1.613a1 1 0 01-1.541 1.134l-1.465-.75a1 1 0 00-.912 0l-1.465.75a1 1 0 01-1.539-1.133l.258-1.613a1 1 0 00-.282-.866l-1.156-1.153a1 1 0 01.572-1.822l1.633-.256a1 1 0 00.737-.535zM8 15H7a4 4 0 00-4 4v2"/><circle cx="10" cy="7" r="4"/>
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
