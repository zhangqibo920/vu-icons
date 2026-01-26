<script setup lang="ts">
const name = 'VuRabbit'
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
    <path d="M13 16a3 3 0 012.24 5M18 12h.01"/><path d="M18 21h-8a4 4 0 01-4-4 7 7 0 017-7h.2L9.6 6.4a1 1 0 112.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 01-2 2h-1a3 3 0 00-3 3"/><path d="M20 8.54V4a2 2 0 10-4 0v3m-8.388 5.524a3 3 0 10-1.6 4.3"/>
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
