<script setup lang="ts">
const name = 'VuTrafficCone'
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
    <path d="M16.05 10.966a5 2.5 0 01-8.1 0m8.973 3.083l4.48 2.04a1 1 0 01.001 1.831l-8.574 3.9a2 2 0 01-1.66 0l-8.574-3.91a1 1 0 010-1.83l4.484-2.04"/><path d="M16.949 14.14a5 2.5 0 11-9.9 0L10.063 3.5a2 2 0 013.874 0zM9.194 6.57a5 2.5 0 005.61 0"/>
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
