<script setup lang="ts">
const name = 'VuCircleDashed'
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
    <path d="M10.1 2.182a10 10 0 013.8 0m0 19.636a10 10 0 01-3.8 0m7.509-18.097a10 10 0 012.69 2.7M2.182 13.9a10 10 0 010-3.8m18.097 7.509a10 10 0 01-2.7 2.69M21.818 10.1a10 10 0 010 3.8M3.721 6.391a10 10 0 012.7-2.69m-.03 16.578a10 10 0 01-2.69-2.7"/>
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
