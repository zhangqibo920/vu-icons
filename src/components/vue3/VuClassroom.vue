<script setup lang="ts">
const name = 'VuClassroom'
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
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3 3H2a3 3 0 00-3-3V6a4 4 0 014-4zM22 3h-6a4 4 0 00-4 4v14a3 3 0 003 3h7a3 3 0 003-3V6a4 4 0 00-4-4z"/>
  </svg>
</template>
