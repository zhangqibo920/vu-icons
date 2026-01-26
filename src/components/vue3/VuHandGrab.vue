<script setup lang="ts">
const name = 'VuHandGrab'
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
    <path d="M18 11.5V9a2 2 0 00-2-2 2 2 0 00-2 2v1.4m0-.4V8a2 2 0 00-2-2 2 2 0 00-2 2v2m0-.1V9a2 2 0 00-2-2 2 2 0 00-2 2v5m0 0a2 2 0 00-2-2 2 2 0 00-2 2"/><path d="M18 11a2 2 0 114 0v3a8 8 0 01-8 8h-4a8 8 0 01-8-8 2 2 0 114 0"/>
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
