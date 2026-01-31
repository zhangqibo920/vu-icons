<script setup lang="ts">
const name = 'VuSquircleDashed'
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
    <path d="M13.77 3.043a34 34 0 00-3.54 0m3.541 17.913a33 33 0 01-3.541.001m9.95-3.217c-.51 1.15-1.29 1.93-2.439 2.44M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438m3.217 6.409a33 33 0 010 3.54M3.043 10.23a34 34 0 00.001 3.541m3.216 6.408c-1.15-.508-1.93-1.29-2.44-2.438M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44"/>
  </svg>
</template>
