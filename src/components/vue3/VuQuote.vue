<script setup lang="ts">
const name = 'VuQuote'
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
    <path d="M16 3a2 2 0 00-2 2v6a2 2 0 002 2 1 1 0 011 1v1a2 2 0 01-2 2 1 1 0 00-1 1v2a1 1 0 001 1 6 6 0 006-6V5a2 2 0 00-2-2zM5 3a2 2 0 00-2 2v6a2 2 0 002 2 1 1 0 011 1v1a2 2 0 01-2 2 1 1 0 00-1 1v2a1 1 0 001 1 6 6 0 006-6V5a2 2 0 00-2-2z"/>
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
