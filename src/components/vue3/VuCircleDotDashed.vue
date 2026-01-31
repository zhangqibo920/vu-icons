<script setup lang="ts">
const name = 'VuCircleDotDashed'
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
    <path d="M10.1 2.18a9.9 9.9 0 013.8 0m3.7 1.53a10 10 0 012.69 2.7m1.53 3.69a9.9 9.9 0 010 3.8m-1.53 3.7a10 10 0 01-2.7 2.69m-3.69 1.53a9.9 9.9 0 01-3.8 0m-3.7-1.53a10 10 0 01-2.69-2.7M2.18 13.9a9.9 9.9 0 010-3.8m1.53-3.7a10 10 0 012.7-2.69"/><circle cx="12" cy="12" r="1"/>
  </svg>
</template>
