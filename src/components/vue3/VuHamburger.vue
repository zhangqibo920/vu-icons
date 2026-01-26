<script setup lang="ts">
const name = 'VuHamburger'
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
    <path d="M12 16H4a2 2 0 110-4h16a2 2 0 110 4h-4.25M5 12a2 2 0 01-2-2 9 7 0 0118 0 2 2 0 01-2 2M5 16a2 2 0 00-2 2 3 3 0 003 3h12a3 3 0 003-3 2 2 0 00-2-2q0 0 0 0"/><path d="M6.67 12l6.13 4.6a2 2 0 002.8-.4l3.15-4.2"/>
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
