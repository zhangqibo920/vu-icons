<script setup lang="ts">
const name = 'VuFileHeadphone'
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
    <path d="M4 6.835V4a2 2 0 012-2h8a2.4 2.4 0 011.706.706l3.588 3.588A2.4 2.4 0 0120 8v12a2 2 0 01-2 2h-.343"/><path d="M14 2v5a1 1 0 001 1h5M2 19a2 2 0 014 0v1a2 2 0 01-4 0v-4a6 6 0 0112 0v4a2 2 0 01-4 0v-1a2 2 0 014 0"/>
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
