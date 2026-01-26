<script setup lang="ts">
const name = 'VuUnplug'
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
    <path d="M19 5l3-3M2 22l3-3m1.3 1.3a2.4 2.4 0 003.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 000 3.4zm1.2-6.8L10 11m.5 5.5L13 14m-1-8l6 6 2.3-2.3a2.4 2.4 0 000-3.4l-2.6-2.6a2.4 2.4 0 00-3.4 0z"/>
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
