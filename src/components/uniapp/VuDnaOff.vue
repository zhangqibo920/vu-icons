<script setup lang="ts">
const name = 'VuDnaOff'
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
    
  return {
    width: size,
    height: size
  }
})

// 兼容小程序的 base64 编码函数
function base64Encode(str: string): string {
  // 小程序环境使用 uni.arrayBufferToBase64
  // #ifdef MP
  const arrayBuffer = new Uint8Array(str.split('').map(c => c.charCodeAt(0)))
  return uni.arrayBufferToBase64(arrayBuffer)
  // #endif
  
  // H5 环境使用 btoa
  // #ifdef H5
  return btoa(unescape(encodeURIComponent(str)))
  // #endif
  
  // 兜底方案
  // #ifndef MP || H5
  try {
    const arrayBuffer = new Uint8Array(str.split('').map(c => c.charCodeAt(0)))
    return uni.arrayBufferToBase64(arrayBuffer)
  } catch (e) {
    return btoa(unescape(encodeURIComponent(str)))
  }
  // #endif
}

const svgDataUri = computed(() => {
  const spinNode = props.spin
    ? `<animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite" />`
    : ''
    
  const svgContent = `<path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8m3-2l-2.891-2.891M2 15c3.333-3 6.667-3 10-3M2 2l20 20M20 9l.891.891M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1M3.109 14.109L4 15m2.5-2.5l1 1M7 18l2.891 2.891M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16"/>`
  
  const svg = `<svg viewBox='0 0 24 24' fill='none' stroke='${props.color}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg' style='width:100%;height:100%;'>${spinNode}${svgContent}</svg>`
  
  const base64Svg = base64Encode(svg)
  return `data:image/svg+xml;base64,${base64Svg}`
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
    <path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8m3-2l-2.891-2.891M2 15c3.333-3 6.667-3 10-3M2 2l20 20M20 9l.891.891M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1M3.109 14.109L4 15m2.5-2.5l1 1M7 18l2.891 2.891M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16"/>
  </svg>
  <!-- #endif -->

  <!-- #ifndef H5 -->
  <image :class="className" :style="bgStyle" :src="svgDataUri" mode="aspectFit" />
  <!-- #endif -->
</template>
