<script setup lang="ts">
const name = 'VuPuzzle'
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
  const svgContent = `<path d="M15.39 4.39a1 1 0 001.68-.474 2.5 2.5 0 113.014 3.015 1 1 0 00-.474 1.68l1.683 1.682a2.414 2.414 0 010 3.414L19.61 15.39a1 1 0 01-1.68-.474 2.5 2.5 0 10-3.014 3.015 1 1 0 01.474 1.68l-1.683 1.682a2.414 2.414 0 01-3.414 0L8.61 19.61a1 1 0 00-1.68.474 2.5 2.5 0 11-3.014-3.015 1 1 0 00.474-1.68l-1.683-1.682a2.414 2.414 0 010-3.414L4.39 8.61a1 1 0 011.68.474 2.5 2.5 0 103.014-3.015 1 1 0 01-.474-1.68l1.683-1.682a2.414 2.414 0 013.414 0z"/>`
  
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
    <path d="M15.39 4.39a1 1 0 001.68-.474 2.5 2.5 0 113.014 3.015 1 1 0 00-.474 1.68l1.683 1.682a2.414 2.414 0 010 3.414L19.61 15.39a1 1 0 01-1.68-.474 2.5 2.5 0 10-3.014 3.015 1 1 0 01.474 1.68l-1.683 1.682a2.414 2.414 0 01-3.414 0L8.61 19.61a1 1 0 00-1.68.474 2.5 2.5 0 11-3.014-3.015 1 1 0 00.474-1.68l-1.683-1.682a2.414 2.414 0 010-3.414L4.39 8.61a1 1 0 011.68.474 2.5 2.5 0 103.014-3.015 1 1 0 01-.474-1.68l1.683-1.682a2.414 2.414 0 013.414 0z"/>
  </svg>
  <!-- #endif -->

  <!-- #ifndef H5 -->
  <view :class="className" :style="bgStyle" />
  <!-- #endif -->
</template>
