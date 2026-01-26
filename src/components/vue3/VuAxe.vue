<script setup lang="ts">
const name = 'VuAxe'
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
    <path d="M14 12l-8.381 8.38a1 1 0 01-3.001-3L11 9"/><path d="M15 15.5a.5.5 0 00.5.5A6.5 6.5 0 0022 9.5a.5.5 0 00-.5-.5h-1.672a2 2 0 01-1.414-.586l-5.062-5.062a1.205 1.205 0 00-1.704 0L9.352 5.648a1.205 1.205 0 000 1.704l5.062 5.062A2 2 0 0115 13.828z"/>
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
