<script setup lang="ts">
const name = 'VuRecycle'
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
    <path d="M7 19H4.815a1.83 1.83 0 01-1.57-.881 1.79 1.79 0 01-.004-1.784L7.196 9.5M11 19h8.203a1.83 1.83 0 001.556-.89 1.78 1.78 0 000-1.775l-1.226-2.12"/><path d="M14 16l-3 3 3 3m-5.707-8.404L7.196 9.5 3.1 10.598m6.244-4.787l1.093-1.892A1.83 1.83 0 0111.985 3a1.78 1.78 0 011.546.888l3.943 6.843"/><path d="M13.378 9.633l4.096 1.098 1.097-4.096"/>
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
