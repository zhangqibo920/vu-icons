<script setup lang="ts">
const name = 'VuStar'
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
    <path d="M11.525 2.295a.53.53 0 01.95 0l2.31 4.679a2.12 2.12 0 001.595 1.16l5.166.756a.53.53 0 01.294.904l-3.736 3.638a2.12 2.12 0 00-.611 1.878l.882 5.14a.53.53 0 01-.771.56l-4.618-2.428a2.12 2.12 0 00-1.973 0L6.396 21.01a.53.53 0 01-.77-.56l.881-5.139a2.12 2.12 0 00-.611-1.879L2.16 9.795a.53.53 0 01.294-.906l5.165-.755a2.12 2.12 0 001.597-1.16z"/>
  </svg>
</template>
