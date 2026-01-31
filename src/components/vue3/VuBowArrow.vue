<script setup lang="ts">
const name = 'VuBowArrow'
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
    <path d="M17 3h4v4m-2.425 4.082a13 13 0 011.048 9.027 1.17 1.17 0 01-1.914.597L14 17m-7-7L3.29 6.29a1.17 1.17 0 01.6-1.91 13 13 0 019.03 1.05M7 14a1.7 1.7 0 00-1.207.5l-2.646 2.646A.5.5 0 003.5 18H5a1 1 0 011 1v1.5a.5.5 0 00.854.354L9.5 18.207A1.7 1.7 0 0010 17v-2a1 1 0 00-1-1zm2.707.293L21 3"/>
  </svg>
</template>
