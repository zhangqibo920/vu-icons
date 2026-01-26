<script setup lang="ts">
const name = 'VuMilkOff'
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
    <path d="M8 2h8M9 2v1.343M15 2v2.789a4 4 0 00.672 2.219l.656.984a4 4 0 01.672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 007 10.212V20a2 2 0 002 2h6a2 2 0 002-2v-3"/><path d="M7 15a6.47 6.47 0 015 0 6.47 6.47 0 003.435.435M2 2l20 20"/>
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
