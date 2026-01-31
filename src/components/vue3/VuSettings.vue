<script setup lang="ts">
const name = 'VuSettings'
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
    <path d="M9.671 4.136a2.34 2.34 0 014.659 0 2.34 2.34 0 003.319 1.915 2.34 2.34 0 012.33 4.033 2.34 2.34 0 000 3.831 2.34 2.34 0 01-2.33 4.033 2.34 2.34 0 00-3.319 1.915 2.34 2.34 0 01-4.659 0 2.34 2.34 0 00-3.32-1.915 2.34 2.34 0 01-2.33-4.033 2.34 2.34 0 000-3.831A2.34 2.34 0 016.35 6.051a2.34 2.34 0 003.319-1.915"/><circle cx="12" cy="12" r="3"/>
  </svg>
</template>
