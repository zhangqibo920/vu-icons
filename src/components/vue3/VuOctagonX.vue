<script setup lang="ts">
const name = 'VuOctagonX'
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
    <path d="M15 9l-6 6m-6.414 1.726A2 2 0 012 15.312V8.688a2 2 0 01.586-1.414l4.688-4.688A2 2 0 018.688 2h6.624a2 2 0 011.414.586l4.688 4.688A2 2 0 0122 8.688v6.624a2 2 0 01-.586 1.414l-4.688 4.688a2 2 0 01-1.414.586H8.688a2 2 0 01-1.414-.586zM9 9l6 6"/>
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
