<script setup lang="ts">
const name = 'VuAnvil'
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
    <path d="M7 10H6a4 4 0 01-4-4 1 1 0 011-1h4m0 0a1 1 0 011-1h13a1 1 0 011 1 7 7 0 01-7 7H8a1 1 0 01-1-1zm2 7v5m6-5v5M5 20a3 3 0 013-3h8a3 3 0 013 3 1 1 0 01-1 1H6a1 1 0 01-1-1"/>
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
