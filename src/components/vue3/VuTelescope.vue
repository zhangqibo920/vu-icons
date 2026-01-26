<script setup lang="ts">
const name = 'VuTelescope'
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
    <path d="M10.065 12.493l-6.18 1.318a.934.934 0 01-1.108-.702l-.537-2.15a1.07 1.07 0 01.691-1.265l13.504-4.44m-2.875 6.493l4.332-.924M16 21l-3.105-6.21"/><path d="M16.485 5.94a2 2 0 011.455-2.425l1.09-.272a1 1 0 011.212.727l1.515 6.06a1 1 0 01-.727 1.213l-1.09.272a2 2 0 01-2.425-1.455zM6.158 8.633l1.114 4.456M8 21l3.105-6.21"/><circle cx="12" cy="13" r="2"/>
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
