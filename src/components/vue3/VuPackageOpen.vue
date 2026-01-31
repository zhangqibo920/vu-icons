<script setup lang="ts">
const name = 'VuPackageOpen'
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
    <path d="M12 22v-9m3.17-10.79a1.67 1.67 0 011.63 0L21 4.57a1.93 1.93 0 010 3.36L8.82 14.79a1.66 1.66 0 01-1.64 0L3 12.43a1.93 1.93 0 010-3.36z"/><path d="M20 13v3.87a2.06 2.06 0 01-1.11 1.83l-6 3.08a1.93 1.93 0 01-1.78 0l-6-3.08A2.06 2.06 0 014 16.87V13"/><path d="M21 12.43a1.93 1.93 0 000-3.36L8.83 2.2a1.64 1.64 0 00-1.63 0L3 4.57a1.93 1.93 0 000 3.36l12.18 6.86a1.64 1.64 0 001.63 0z"/>
  </svg>
</template>
