<script setup lang="ts">
const name = 'VuSaveOff'
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
    <path d="M13 13H8a1 1 0 00-1 1v7m7-13h1m2 13v-4M2 2l20 20"/><path d="M20.41 20.41A2 2 0 0119 21H5a2 2 0 01-2-2V5a2 2 0 01.59-1.41M29.5 11.5s5 5 4 5M9 3h6.2a2 2 0 011.4.6l3.8 3.8a2 2 0 01.6 1.4V15"/>
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
