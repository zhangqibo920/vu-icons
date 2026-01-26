<script setup lang="ts">
const name = 'VuRibbon'
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
    <path d="M12 11.22C11 9.997 10 9 10 8a2 2 0 014 0c0 1-.998 2.002-2.01 3.22M12 18l2.57-3.5"/><path d="M6.243 9.016a7 7 0 0111.507-.009m-8.4 5.523L12 11.22"/><path d="M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0112 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 01-.203 1.43l-1.894 1.36a1 1 0 01-1.384-.215L12 18l-2.679 3.593a1 1 0 01-1.39.213l-1.865-1.353a1 1 0 01-.203-1.422z"/>
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
