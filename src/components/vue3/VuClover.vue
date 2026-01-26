<script setup lang="ts">
const name = 'VuClover'
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
    <path d="M16.17 7.83L2 22m2.02-10a2.827 2.827 0 113.81-4.17A2.827 2.827 0 1112 4.02a2.827 2.827 0 114.17 3.81A2.827 2.827 0 1119.98 12a2.827 2.827 0 11-3.81 4.17A2.827 2.827 0 1112 19.98a2.827 2.827 0 11-4.17-3.81A1 1 0 114 12m3.83-4.17l8.34 8.34"/>
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
