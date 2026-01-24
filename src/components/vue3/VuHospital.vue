<script setup lang="ts">
const name = 'VuHospital'
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
    <path d="M3 21h18M5 21V7l8-4 8 4v14"/><path d="M17 21V7l9-4 9 4v14"/><path d="M19 21V7l8-4 8 4v14"/>
  </svg>
</template>
