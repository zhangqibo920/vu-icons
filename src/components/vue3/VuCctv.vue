<script setup lang="ts">
const name = 'VuCctv'
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
    <path d="M16.75 12h3.632a1 1 0 01.894 1.447l-2.034 4.069a1 1 0 01-1.708.134l-2.124-2.97m1.696-5.627a1 1 0 01.447 1.341l-3.106 6.211a1 1 0 01-1.342.447L3.61 12.3a2.92 2.92 0 01-1.3-3.91L3.69 5.6a2.92 2.92 0 013.92-1.3zM2 19h3.76a2 2 0 001.8-1.1L9 15m-7 6v-4m5-8h.01"/>
  </svg>
</template>
