<script setup lang="ts">
const name = 'VuPenTool'
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
    <path d="M15.707 21.293a1 1 0 01-1.414 0l-1.586-1.586a1 1 0 010-1.414l5.586-5.586a1 1 0 011.414 0l1.586 1.586a1 1 0 010 1.414z"/><path d="M18 13l-1.375-6.874a1 1 0 00-.746-.776L3.235 2.028a1 1 0 00-1.207 1.207L5.35 15.879a1 1 0 00.776.746L13 18M2.3 2.3l7.286 7.286"/><circle cx="11" cy="11" r="2"/>
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
