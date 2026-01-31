<script setup lang="ts">
const name = 'VuFileChartPie'
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
    <path d="M15.941 22H18a2 2 0 002-2V8a2.4 2.4 0 00-.706-1.704l-3.588-3.588A2.4 2.4 0 0014 2H6a2 2 0 00-2 2v3.512"/><path d="M14 2v5a1 1 0 001 1h5M4.017 11.512a6 6 0 108.466 8.475"/><path d="M9 16a1 1 0 01-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 014.922 4.922c.091.544-.365.995-.917.995z"/>
  </svg>
</template>
