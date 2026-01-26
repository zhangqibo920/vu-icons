<script setup lang="ts">
const name = 'VuSalad'
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
    <path d="M7 21h10m-5 0a9 9 0 009-9H3a9 9 0 009 9"/><path d="M11.38 12a2.4 2.4 0 01-.4-4.77 2.4 2.4 0 013.2-2.77 2.4 2.4 0 013.47-.63 2.4 2.4 0 013.37 3.37 2.4 2.4 0 01-1.1 3.7 2.5 2.5 0 01.03 1.1M13 12l4-4"/><path d="M10.9 7.25A3.99 3.99 0 004 10c0 .73.2 1.41.54 2"/>
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
