<script setup lang="ts">
const name = 'VuPiggyBank'
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
    <path d="M11 17h3v2a1 1 0 001 1h2a1 1 0 001-1v-3a3.16 3.16 0 002-2h1a1 1 0 001-1v-2a1 1 0 00-1-1h-1a5 5 0 00-2-4V3a4 4 0 00-3.2 1.6l-.3.4H11a6 6 0 00-6 6v1a5 5 0 002 4v3a1 1 0 001 1h2a1 1 0 001-1zm5-7h.01M2 8v1a2 2 0 002 2h1"/>
  </svg>
</template>
