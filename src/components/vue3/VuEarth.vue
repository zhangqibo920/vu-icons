<script setup lang="ts">
const name = 'VuEarth'
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
    <path d="M21.54 15H17a2 2 0 00-2 2v4.54M7 3.34V5a3 3 0 003 3 2 2 0 012 2c0 1.1.9 2 2 2a2 2 0 002-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 00-2-2 2 2 0 01-2-2v-1a2 2 0 00-2-2H2.05"/><circle cx="12" cy="12" r="10"/>
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
