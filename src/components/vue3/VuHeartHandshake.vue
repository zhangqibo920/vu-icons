<script setup lang="ts">
const name = 'VuHeartHandshake'
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
    <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 00-9.591-3.676.6.6 0 01-.818.001A5.5 5.5 0 002 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 002.879.052 2.12 2.12 0 00-.004-3 2.124 2.124 0 103-3 2.124 2.124 0 003.004 0 2 2 0 000-2.828l-1.881-1.882a2.41 2.41 0 00-3.409 0l-1.71 1.71a2 2 0 01-2.828 0 2 2 0 010-2.828l2.823-2.762"/>
  </svg>
</template>
