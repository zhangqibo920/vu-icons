<script setup lang="ts">
const name = 'VuSquircleDashed'
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
    <path d="M13.77 3.043a34 34 0 00-3.54 0m3.541 17.913a33 33 0 01-3.541.001m9.95-3.217c-.51 1.15-1.29 1.93-2.439 2.44M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438m3.217 6.409a33 33 0 010 3.54M3.043 10.23a34 34 0 00.001 3.541m3.216 6.408c-1.15-.508-1.93-1.29-2.44-2.438M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44"/>
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
