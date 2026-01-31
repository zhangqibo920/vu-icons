<script setup lang="ts">
const name = 'VuBrickWallShield'
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
  const svgContent = `<path d="M12 9v1.258M16 3v5.46m5 .658V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h5.75"/><path d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 01-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 01.5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 01.76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 01.5.5zM3 15h7M3 9h12.142M8 15v6M8 3v6"/>`
  
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
    <path d="M12 9v1.258M16 3v5.46m5 .658V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h5.75"/><path d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 01-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 01.5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 01.76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 01.5.5zM3 15h7M3 9h12.142M8 15v6M8 3v6"/>
  </svg>
  <!-- #endif -->

  <!-- #ifndef H5 -->
  <view :class="className" :style="bgStyle" />
  <!-- #endif -->
</template>
