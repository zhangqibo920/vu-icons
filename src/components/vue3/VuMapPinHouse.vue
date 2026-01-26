<script setup lang="ts">
const name = 'VuMapPinHouse'
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
    <path d="M15 22a1 1 0 01-1-1v-4a1 1 0 01.445-.832l3-2a1 1 0 011.11 0l3 2A1 1 0 0122 17v4a1 1 0 01-1 1zm3-12a8 8 0 00-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 00.601.2M18 22v-3"/><circle cx="10" cy="10" r="3"/>
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
