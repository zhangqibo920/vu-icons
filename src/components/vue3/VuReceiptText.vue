<script setup lang="ts">
const name = 'VuReceiptText'
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
    <path d="M13 16H8m6-8H8m8 4H8M4 3a1 1 0 011-1 1.3 1.3 0 01.7.2l.933.6a1.3 1.3 0 001.4 0l.934-.6a1.3 1.3 0 011.4 0l.933.6a1.3 1.3 0 001.4 0l.933-.6a1.3 1.3 0 011.4 0l.934.6a1.3 1.3 0 001.4 0l.933-.6A1.3 1.3 0 0119 2a1 1 0 011 1v18a1 1 0 01-1 1 1.3 1.3 0 01-.7-.2l-.933-.6a1.3 1.3 0 00-1.4 0l-.934.6a1.3 1.3 0 01-1.4 0l-.933-.6a1.3 1.3 0 00-1.4 0l-.933.6a1.3 1.3 0 01-1.4 0l-.934-.6a1.3 1.3 0 00-1.4 0l-.933.6a1.3 1.3 0 01-.7.2 1 1 0 01-1-1z"/>
  </svg>
</template>
