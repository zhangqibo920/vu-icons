<script setup lang="ts">
const name = 'VuSnowflake'
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
    <path d="M10 20l-1.25-2.5L6 18m4-14L8.75 6.5 6 6m8 14l1.25-2.5L18 18M14 4l1.25 2.5L18 6"/><path d="M17 21l-3-6h-4m7-12l-3 6 1.5 3M2 12h6.5L10 9m10 1l-1.5 2 1.5 2"/><path d="M22 12h-6.5L14 15M4 10l1.5 2L4 14m3 7l3-6-1.5-3M7 3l3 6h4"/>
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
