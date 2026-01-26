<script setup lang="ts">
const name = 'VuMap'
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
    <path d="M14.106 5.553a2 2 0 001.788 0l3.659-1.83A1 1 0 0121 4.619v12.764a1 1 0 01-.553.894l-4.553 2.277a2 2 0 01-1.788 0l-4.212-2.106a2 2 0 00-1.788 0l-3.659 1.83A1 1 0 013 19.381V6.618a1 1 0 01.553-.894l4.553-2.277a2 2 0 011.788 0zm.894.211v15M9 3.236v15"/>
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
