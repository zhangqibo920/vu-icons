<script setup lang="ts">
const name = 'VuCircleStar'
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
    <path d="M11.051 7.616a1 1 0 011.909.024l.737 1.452a1 1 0 00.737.535l1.634.256a1 1 0 01.588 1.806l-1.172 1.168a1 1 0 00-.282.866l.259 1.613a1 1 0 01-1.541 1.134l-1.465-.75a1 1 0 00-.912 0l-1.465.75a1 1 0 01-1.539-1.133l.258-1.613a1 1 0 00-.282-.867l-1.156-1.152a1 1 0 01.572-1.822l1.633-.256a1 1 0 00.737-.535z"/><circle cx="12" cy="12" r="10"/>
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
