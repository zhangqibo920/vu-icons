<script setup lang="ts">
const name = 'VuFitness'
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
    <path d="M6.5 6.5h11M6 20v-2a6 6 0 1112 0v2"/><circle cx="12" cy="13" r="3"/><path d="M6 20a2 2 0 002 2h8a2 2 0 002-2"/>
  </svg>
</template>
