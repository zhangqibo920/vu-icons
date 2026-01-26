<script setup lang="ts">
const name = 'VuFileStack'
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
    <path d="M11 21a1 1 0 01-1 1H4a1 1 0 01-1-1v-8a1 1 0 011-1m12 4a1 1 0 01-1 1H9a1 1 0 01-1-1V8a1 1 0 011-1m12-1a2 2 0 00-.586-1.414l-2-2A2 2 0 0017 2h-3a1 1 0 00-1 1v8a1 1 0 001 1h6a1 1 0 001-1z"/>
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
