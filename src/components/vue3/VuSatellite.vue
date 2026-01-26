<script setup lang="ts">
const name = 'VuSatellite'
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
    <path d="M13.5 6.5l-3.148-3.148a1.205 1.205 0 00-1.704 0L6.352 5.648a1.205 1.205 0 000 1.704L9.5 10.5m7-3L19 5m-1.5 5.5l3.148 3.148a1.205 1.205 0 010 1.704l-2.296 2.296a1.205 1.205 0 01-1.704 0L13.5 14.5M9 21a6 6 0 00-6-6"/><path d="M9.352 10.648a1.205 1.205 0 000 1.704l2.296 2.296a1.205 1.205 0 001.704 0l4.296-4.296a1.205 1.205 0 000-1.704l-2.296-2.296a1.205 1.205 0 00-1.704 0z"/>
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
