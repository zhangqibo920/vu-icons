<script setup lang="ts">
const name = 'VuBrickWallShield'
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
    <path d="M12 9v1.258M16 3v5.46m5 .658V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h5.75"/><path d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 01-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 01.5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 01.76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 01.5.5zM3 15h7M3 9h12.142M8 15v6M8 3v6"/>
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
