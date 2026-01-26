<script setup lang="ts">
const name = 'VuSandwich'
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
    <path d="M2.37 11.223l8.372-6.777a2 2 0 012.516 0l8.371 6.777M21 15a1 1 0 011 1v2a1 1 0 01-1 1h-5.25M3 15a1 1 0 00-1 1v2a1 1 0 001 1h9"/><path d="M6.67 15l6.13 4.6a2 2 0 002.8-.4l3.15-4.2"/><rect width="20" height="4" x="2" y="11" rx="1"/>
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
