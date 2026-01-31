<script setup lang="ts">
const name = 'VuBinoculars'
import { computed } from 'vue'

interface Props {
  /**
   * Icon size
   * @default 24
   */
  size?: number | string
  /**
   * Icon color
   * @default 'currentColor'
   */
  color?: string
  /**
   * Custom class name
   * @default ''
   */
  className?: string
  /**
   * Whether to spin the icon
   * @default false
   */
  spin?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  color: 'currentColor',
  className: '',
  spin: false
})

const style = computed(() => {
  const sizeVal = props.size
  const size = (typeof sizeVal === 'number' || !isNaN(Number(sizeVal))) 
    ? `${sizeVal}px` 
    : sizeVal
    
  return {
    width: size,
    height: size,
    color: props.color
  }
})
</script>

<template>
  <svg 
    :class="className" 
    :style="style" 
    :width="style.width" 
    :height="style.height" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <animateTransform v-if="spin" attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite" />
    <path d="M10 10h4m5-3V4a1 1 0 00-1-1h-2a1 1 0 00-1 1v3m5 14a2 2 0 002-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 00-1-1h-4a1 1 0 00-1 1v11a2 2 0 002 2zm2-5H2m2 5a2 2 0 01-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 011-1h4a1 1 0 011 1v11a2 2 0 01-2 2zM9 7V4a1 1 0 00-1-1H6a1 1 0 00-1 1v3"/>
  </svg>
</template>
