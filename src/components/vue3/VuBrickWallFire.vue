<script setup lang="ts">
const name = 'VuBrickWallFire'
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
    <path d="M16 3v2.107M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0122 17a5 5 0 01-10 0c0-.3 0-.6.1-.9a2 2 0 103.3-2C13 11.5 16 9 17 9"/><path d="M21 8.274V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.938M3 15h5.253M3 9h8.228M8 15v6M8 3v6"/>
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
