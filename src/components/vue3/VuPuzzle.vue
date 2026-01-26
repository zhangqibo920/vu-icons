<script setup lang="ts">
const name = 'VuPuzzle'
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
    <path d="M15.39 4.39a1 1 0 001.68-.474 2.5 2.5 0 113.014 3.015 1 1 0 00-.474 1.68l1.683 1.682a2.414 2.414 0 010 3.414L19.61 15.39a1 1 0 01-1.68-.474 2.5 2.5 0 10-3.014 3.015 1 1 0 01.474 1.68l-1.683 1.682a2.414 2.414 0 01-3.414 0L8.61 19.61a1 1 0 00-1.68.474 2.5 2.5 0 11-3.014-3.015 1 1 0 00.474-1.68l-1.683-1.682a2.414 2.414 0 010-3.414L4.39 8.61a1 1 0 011.68.474 2.5 2.5 0 103.014-3.015 1 1 0 01-.474-1.68l1.683-1.682a2.414 2.414 0 013.414 0z"/>
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
