<script setup lang="ts">
const name = 'VuCross'
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
    <path d="M4 9a2 2 0 00-2 2v2a2 2 0 002 2h4a1 1 0 011 1v4a2 2 0 002 2h2a2 2 0 002-2v-4a1 1 0 011-1h4a2 2 0 002-2v-2a2 2 0 00-2-2h-4a1 1 0 01-1-1V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v4a1 1 0 01-1 1z"/>
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
