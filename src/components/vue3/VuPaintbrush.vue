<script setup lang="ts">
const name = 'VuPaintbrush'
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
    <path d="M14.622 17.897l-10.68-2.913M18.376 2.622a1 1 0 113.002 3.002L17.36 9.643a.5.5 0 000 .707l.944.944a2.41 2.41 0 010 3.408l-.944.944a.5.5 0 01-.707 0L8.354 7.348a.5.5 0 010-.707l.944-.944a2.41 2.41 0 013.408 0l.944.944a.5.5 0 00.707 0zM9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 00-.302.819l7.32 8.883a1 1 0 001.185.204C12.735 20.405 16 16.792 16 15"/>
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
