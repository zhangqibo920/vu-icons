<script setup lang="ts">
const name = 'VuWallet'
import { computed } from 'vue'

interface Props {
  size?: number | string
  color?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  color: 'currentColor',
  className: ''
})

const style = computed(() => ({
  width: typeof props.size === 'number' ? `${props.size}px` : props.size,
  height: typeof props.size === 'number' ? `${props.size}px` : props.size,
  color: props.color
}))
</script>

<template>
  <svg :class="className" :style="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 12V8H6a2 2 0 01-2-2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12a2 2 0 002-2v-4M4 6h16M4 10h16M4 14h16M4 18h16"/>
  </svg>
</template>
