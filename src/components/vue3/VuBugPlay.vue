<script setup lang="ts">
const name = 'VuBugPlay'
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
    <path d="M10 19.655A6 6 0 016 14v-3a4 4 0 014-4h4a4 4 0 014 3.97"/><path d="M14 15.003a1 1 0 011.517-.859l4.997 2.997a1 1 0 010 1.718l-4.997 2.997a1 1 0 01-1.517-.86zm.12-11.123L16 2m5 3a4 4 0 01-3.55 3.97M3 21a4 4 0 013.81-4M3 5a4 4 0 003.55 3.97M6 13H2M8 2l1.88 1.88M9 7.13V6a3 3 0 116 0v1.13"/>
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
