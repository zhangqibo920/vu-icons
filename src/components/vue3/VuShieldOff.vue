<script setup lang="ts">
const name = 'VuShieldOff'
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
    <path d="M2 2l20 20M5 5a1 1 0 00-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 00.67.01c2.35-.82 4.48-1.97 5.9-3.71M9.309 3.652A12.3 12.3 0 0011.24 2.28a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1v7a10 10 0 01-.08 1.264"/>
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
