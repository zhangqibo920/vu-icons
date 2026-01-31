<script setup lang="ts">
const name = 'VuLampDesk'
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
    <path d="M10.293 2.293a1 1 0 011.414 0l2.5 2.5 5.994 1.227a1 1 0 01.506 1.687l-7 7a1 1 0 01-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 010-1.414zm3.914 2.5l-3.414 3.414M3 20a2 2 0 012-2h4a2 2 0 012 2v1a1 1 0 01-1 1H4a1 1 0 01-1-1z"/><path d="M9.086 6.5l-4.793 4.793a1 1 0 00-.18 1.17L7 18"/>
  </svg>
</template>
