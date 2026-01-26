<script setup lang="ts">
const name = 'VuCuboid'
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
    <path d="M21.12 6.4l-6.05-4.06a2 2 0 00-2.17-.05L2.95 8.41a2 2 0 00-.95 1.7v5.82a2 2 0 00.88 1.66l6.05 4.07a2 2 0 002.17.05l9.95-6.12a2 2 0 00.95-1.7V8.06a2 2 0 00-.88-1.66"/><path d="M10 22v-8L2.25 9.15M10 14l11.77-6.87"/>
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
