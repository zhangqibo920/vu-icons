<script setup lang="ts">
const name = 'VuSettings'
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
    <path d="M9.671 4.136a2.34 2.34 0 014.659 0 2.34 2.34 0 003.319 1.915 2.34 2.34 0 012.33 4.033 2.34 2.34 0 000 3.831 2.34 2.34 0 01-2.33 4.033 2.34 2.34 0 00-3.319 1.915 2.34 2.34 0 01-4.659 0 2.34 2.34 0 00-3.32-1.915 2.34 2.34 0 01-2.33-4.033 2.34 2.34 0 000-3.831A2.34 2.34 0 016.35 6.051a2.34 2.34 0 003.319-1.915"/><circle cx="12" cy="12" r="3"/>
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
