<script setup lang="ts">
const name = 'VuVault'
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
    <rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/><path d="M7.9 7.9l2.7 2.7"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/><path d="M13.4 10.6l2.7-2.7"/><circle cx="7.5" cy="16.5" r=".5" fill="currentColor"/><path d="M7.9 16.1l2.7-2.7"/><circle cx="16.5" cy="16.5" r=".5" fill="currentColor"/><path d="M13.4 13.4l2.7 2.7"/><circle cx="12" cy="12" r="2"/>
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
