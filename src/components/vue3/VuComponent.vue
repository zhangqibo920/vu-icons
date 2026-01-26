<script setup lang="ts">
const name = 'VuComponent'
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
  <svg :class="className" :style="style" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.536 11.293a1 1 0 000 1.414l2.376 2.377a1 1 0 001.414 0l2.377-2.377a1 1 0 000-1.414l-2.377-2.377a1 1 0 00-1.414 0zm-13.239 0a1 1 0 000 1.414l2.377 2.377a1 1 0 001.414 0l2.377-2.377a1 1 0 000-1.414L6.088 8.916a1 1 0 00-1.414 0zm6.619 6.619a1 1 0 000 1.415l2.377 2.376a1 1 0 001.414 0l2.377-2.376a1 1 0 000-1.415l-2.377-2.376a1 1 0 00-1.414 0zm0-13.238a1 1 0 000 1.414l2.377 2.376a1 1 0 001.414 0l2.377-2.376a1 1 0 000-1.414l-2.377-2.377a1 1 0 00-1.414 0z"/>
  </svg>
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
