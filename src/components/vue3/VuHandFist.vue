<script setup lang="ts">
const name = 'VuHandFist'
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
    <path d="M12.035 17.012a3 3 0 00-3-3l-.311-.002a.72.72 0 01-.505-1.229l1.195-1.195A2 2 0 0110.828 11H12a2 2 0 000-4H9.243a3 3 0 00-2.122.879l-2.707 2.707A4.83 4.83 0 003 14a8 8 0 008 8h2a8 8 0 008-8V7a2 2 0 10-4 0v2a2 2 0 104 0"/><path d="M13.888 9.662A2 2 0 0017 8V5a2 2 0 10-4 0M9 5a2 2 0 10-4 0v5m4-3V4a2 2 0 114 0v3.268"/>
  </svg>
</template>
