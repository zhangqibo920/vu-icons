<script setup lang="ts">
const name = 'VuMailSearch'
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
    <path d="M22 12.5V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12c0 1.1.9 2 2 2h7.5"/><path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7m16 14a3 3 0 100-6 3 3 0 000 6"/><circle cx="18" cy="18" r="3"/><path d="M22 22l-1.5-1.5"/>
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
