<script setup lang="ts">
const name = 'VuGuitar'
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
    <path d="M11.9 12.1l4.514-4.514M20.1 2.3a1 1 0 00-1.4 0l-1.114 1.114A2 2 0 0017 4.828v1.344a2 2 0 01-.586 1.414A2 2 0 0117.828 7h1.344a2 2 0 001.414-.586L21.7 5.3a1 1 0 000-1.4zM6 16l2 2m.23-8.15A3 3 0 0111 8a5 5 0 015 5 3 3 0 01-1.85 2.77l-.92.38A2 2 0 0012 18a4 4 0 01-4 4 6 6 0 01-6-6 4 4 0 014-4 2 2 0 001.85-1.23z"/>
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
