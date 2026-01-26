<script setup lang="ts">
const name = 'VuHammer'
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
    <path d="M15 12l-9.373 9.373a1 1 0 01-3.001-3L12 9m6 6l4-4"/><path d="M21.5 11.5l-1.914-1.914A2 2 0 0119 8.172v-.344a2 2 0 00-.586-1.414l-1.657-1.657A6 6 0 0012.516 3H9l1.243 1.243A6 6 0 0112 8.485V10l2 2h1.172a2 2 0 011.414.586L18.5 14.5"/>
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
