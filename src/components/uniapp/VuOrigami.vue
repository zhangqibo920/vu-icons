<script setup lang="ts">
const name = 'VuOrigami'
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

const isNumber = (val: number | string) => typeof val === 'number'

const iconStyle = computed(() => {
  const sizeVal = props.size
  // Ensure size has units if it's a number-like string
  const size = (typeof sizeVal === 'number' || !isNaN(Number(sizeVal))) 
    ? `${sizeVal}px` 
    : sizeVal
    
  return {
    width: size,
    height: size,
    color: props.color
  }
})

// For Non-H5 (Mini Program)
const bgStyle = computed(() => {
  const sizeVal = props.size
  const size = (typeof sizeVal === 'number' || !isNaN(Number(sizeVal))) 
    ? `${sizeVal}px` 
    : sizeVal
  
  // Replace currentColor with black for mask usage
  // The original SVG content has stroke='currentColor'
  // We need to construct a valid SVG string for data URI
  const spinNode = props.spin
    ? `<animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite" />`
    : ''
    
  // We use black color for the mask source to ensure opacity
  const svgContent = `<path d="M12 12V4a1 1 0 011-1h6.297a1 1 0 01.651 1.759l-4.696 4.025M12 21l-7.414-7.414A2 2 0 014 12.172V6.415a1.002 1.002 0 011.707-.707L20 20.009"/><path d="M12.214 3.381l8.414 14.966a1 1 0 01-.167 1.199l-1.168 1.163a1 1 0 01-.706.291H6.351a1 1 0 01-.625-.219L3.25 18.8a1 1 0 01.631-1.781l4.165.027"/>`
  
  // Use encodeURIComponent for robust Data URI generation
  const svg = `<svg viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'>${spinNode}${svgContent}</svg>`
  
  const encodedSvg = encodeURIComponent(svg)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22')

  const dataUri = `url("data:image/svg+xml,${encodedSvg}")`
  
  return {
    width: size,
    height: size,
    color: props.color, // Essential for currentColor to work in backgroundColor
    backgroundColor: props.color,
    maskImage: dataUri,
    WebkitMaskImage: dataUri,
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskSize: '100% 100%',
    WebkitMaskSize: '100% 100%'
  }
})
</script>

<template>
  <!-- #ifdef H5 -->
  <svg 
    :class="className" 
    :style="iconStyle" 
    :width="iconStyle.width" 
    :height="iconStyle.height" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <animateTransform v-if="spin" attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite" />
    <path d="M12 12V4a1 1 0 011-1h6.297a1 1 0 01.651 1.759l-4.696 4.025M12 21l-7.414-7.414A2 2 0 014 12.172V6.415a1.002 1.002 0 011.707-.707L20 20.009"/><path d="M12.214 3.381l8.414 14.966a1 1 0 01-.167 1.199l-1.168 1.163a1 1 0 01-.706.291H6.351a1 1 0 01-.625-.219L3.25 18.8a1 1 0 01.631-1.781l4.165.027"/>
  </svg>
  <!-- #endif -->

  <!-- #ifndef H5 -->
  <view :class="className" :style="bgStyle" />
  <!-- #endif -->
</template>
