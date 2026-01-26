<script setup lang="ts">
const name = 'VuLayers3'
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
    <path d="M12.83 2.18a2 2 0 00-1.66 0L2.6 6.08a1 1 0 000 1.83l8.58 3.91a2 2 0 001.66 0l8.58-3.9a1 1 0 000-1.83z"/><path d="M6.08 9.5l-3.5 1.6a1 1 0 000 1.81l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 000-1.83l-3.5-1.59"/><path d="M6.08 14.5l-3.5 1.6a1 1 0 000 1.81l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 000-1.83l-3.5-1.59"/>
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
