<script setup lang="ts">
const name = 'VuChessKnight'
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
    <path d="M5 20a2 2 0 012-2h10a2 2 0 012 2v1a1 1 0 01-1 1H6a1 1 0 01-1-1zm11.5-2c1-2 2.5-5 2.5-9a7 7 0 00-7-7H6.635a1 1 0 00-.768 1.64L7 5l-2.32 5.802a2 2 0 00.95 2.526l2.87 1.456M15 5l1.425-1.425M17 8l1.53-1.53m-8.817 5.715L7 18"/>
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
