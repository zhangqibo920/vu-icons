<script setup lang="ts">
const name = 'VuStore'
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
    <path d="M15 21v-5a1 1 0 00-1-1h-4a1 1 0 00-1 1v5m8.774-10.69a1.12 1.12 0 00-1.549 0 2.5 2.5 0 01-3.451 0 1.12 1.12 0 00-1.548 0 2.5 2.5 0 01-3.452 0 1.12 1.12 0 00-1.549 0 2.5 2.5 0 01-3.77-3.248l2.889-4.184A2 2 0 017 2h10a2 2 0 011.653.873l2.895 4.192a2.5 2.5 0 01-3.774 3.244"/><path d="M4 10.95V19a2 2 0 002 2h12a2 2 0 002-2v-8.05"/>
  </svg>
</template>
