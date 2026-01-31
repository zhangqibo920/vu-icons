<script setup lang="ts">
const name = 'VuFileScan'
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
    <path d="M20 10V8a2.4 2.4 0 00-.706-1.704l-3.588-3.588A2.4 2.4 0 0014 2H6a2 2 0 00-2 2v16a2 2 0 002 2h4.35"/><path d="M14 2v5a1 1 0 001 1h5m-4 6a2 2 0 00-2 2m2 6a2 2 0 01-2-2m6-6a2 2 0 012 2m-2 6a2 2 0 002-2"/>
  </svg>
</template>
