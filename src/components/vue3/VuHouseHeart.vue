<script setup lang="ts">
const name = 'VuHouseHeart'
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
    <path d="M8.62 13.8A2.25 2.25 0 1112 10.836a2.25 2.25 0 113.38 2.966l-2.626 2.856a.998.998 0 01-1.507 0z"/><path d="M3 10a2 2 0 01.709-1.528l7-6a2 2 0 012.582 0l7 6A2 2 0 0121 10v9a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
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
