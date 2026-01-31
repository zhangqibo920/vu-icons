<script setup lang="ts">
const name = 'VuComponent'
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
    <path d="M15.536 11.293a1 1 0 000 1.414l2.376 2.377a1 1 0 001.414 0l2.377-2.377a1 1 0 000-1.414l-2.377-2.377a1 1 0 00-1.414 0zm-13.239 0a1 1 0 000 1.414l2.377 2.377a1 1 0 001.414 0l2.377-2.377a1 1 0 000-1.414L6.088 8.916a1 1 0 00-1.414 0zm6.619 6.619a1 1 0 000 1.415l2.377 2.376a1 1 0 001.414 0l2.377-2.376a1 1 0 000-1.415l-2.377-2.376a1 1 0 00-1.414 0zm0-13.238a1 1 0 000 1.414l2.377 2.376a1 1 0 001.414 0l2.377-2.376a1 1 0 000-1.414l-2.377-2.377a1 1 0 00-1.414 0z"/>
  </svg>
</template>
