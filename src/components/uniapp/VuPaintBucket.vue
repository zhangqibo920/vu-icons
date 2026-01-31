<script setup lang="ts">
const name = 'VuPaintBucket'
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
  const svgContent = `<path d="M11 7L6 2m12.992 10H2.041m19.104 6.38A3.34 3.34 0 0120 16.5a3.3 3.3 0 01-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0020 22a2 2 0 002-2.025c0-.58-.285-1.13-.855-1.595M8.5 4.5l2.148-2.148a1.205 1.205 0 011.704 0l7.296 7.296a1.205 1.205 0 010 1.704l-7.592 7.592a3.615 3.615 0 01-5.112 0l-3.888-3.888a3.615 3.615 0 010-5.112L5.67 7.33"/>`
  
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
    <path d="M11 7L6 2m12.992 10H2.041m19.104 6.38A3.34 3.34 0 0120 16.5a3.3 3.3 0 01-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0020 22a2 2 0 002-2.025c0-.58-.285-1.13-.855-1.595M8.5 4.5l2.148-2.148a1.205 1.205 0 011.704 0l7.296 7.296a1.205 1.205 0 010 1.704l-7.592 7.592a3.615 3.615 0 01-5.112 0l-3.888-3.888a3.615 3.615 0 010-5.112L5.67 7.33"/>
  </svg>
  <!-- #endif -->

  <!-- #ifndef H5 -->
  <view :class="className" :style="bgStyle" />
  <!-- #endif -->
</template>
