<script setup lang="ts">
const name = 'VuBrainCog'
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
    <path d="M10.852 14.772l-.383.923m.383-6.467l-.383-.923m2.679 6.467l.382.924m.001-7.391l-.383.923m1.624 1.624l.923-.383m-.923 2.679l.923.383M17.598 6.5A3 3 0 1012 5a3 3 0 00-5.63-1.446 3 3 0 00-.368 1.571 4 4 0 00-2.525 5.771M17.998 5.125a4 4 0 012.525 5.771M19.505 10.294a4 4 0 01-1.5 7.706"/><path d="M4.032 17.483A4 4 0 0011.464 20c.18-.311.892-.311 1.072 0a4 4 0 007.432-2.516"/><path d="M4.5 10.291A4 4 0 006 18m.002-12.875a3 3 0 00.4 1.375m2.826 4.352l-.923-.383m.923 2.679l-.923.383"/><circle cx="12" cy="12" r="3"/>
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
