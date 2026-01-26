<script setup lang="ts">
const name = 'VuKayak'
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
    <path d="M18 17a1 1 0 00-1 1v1a2 2 0 102-2zm2.97-13.39a.45.45 0 00-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 00.58.58C13.8 17.4 17.4 13.8 20.97 3.61M6.707 6.707l10.586 10.586M7 5a2 2 0 10-2 2h1a1 1 0 001-1z"/>
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
