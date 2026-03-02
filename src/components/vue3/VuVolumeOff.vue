<script setup lang="ts">
const name = 'VuVolumeOff'
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
    <path d="M16 9a5 5 0 01.95 2.293m2.414-5.657a9 9 0 011.889 9.96M2 2l20 20M7 7l-.587.587A1.4 1.4 0 015.416 8H3a1 1 0 00-1 1v6a1 1 0 001 1h2.416a1.4 1.4 0 01.997.413l3.383 3.384A.705.705 0 0011 19.298V11M9.828 4.172A.686.686 0 0111 4.657v.686"/>
  </svg>
</template>
