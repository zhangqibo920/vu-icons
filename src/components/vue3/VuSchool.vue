<script setup lang="ts">
const name = 'VuSchool'
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
    <path d="M14 21v-3a2 2 0 00-4 0v3m8-16v16M4 6l7.106-3.79a2 2 0 011.788 0L20 6"/><path d="M6 11l-3.52 2.147a1 1 0 00-.48.854V19a2 2 0 002 2h16a2 2 0 002-2v-5a1 1 0 00-.48-.853L18 11M6 5v16"/><circle cx="12" cy="9" r="2"/>
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
