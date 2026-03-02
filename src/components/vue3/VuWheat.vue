<script setup lang="ts">
const name = 'VuWheat'
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
    <path d="M2 22L16 8M3.47 12.53L5 11l1.53 1.53a3.5 3.5 0 010 4.94L5 19l-1.53-1.53a3.5 3.5 0 010-4.94m4-4L9 7l1.53 1.53a3.5 3.5 0 010 4.94L9 15l-1.53-1.53a3.5 3.5 0 010-4.94m4-4L13 3l1.53 1.53a3.5 3.5 0 010 4.94L13 11l-1.53-1.53a3.5 3.5 0 010-4.94M20 2h2v2a4 4 0 01-4 4h-2V6a4 4 0 014-4"/><path d="M11.47 17.47L13 19l-1.53 1.53a3.5 3.5 0 01-4.94 0L5 19l1.53-1.53a3.5 3.5 0 014.94 0m4-4L17 15l-1.53 1.53a3.5 3.5 0 01-4.94 0L9 15l1.53-1.53a3.5 3.5 0 014.94 0m4-4L21 11l-1.53 1.53a3.5 3.5 0 01-4.94 0L13 11l1.53-1.53a3.5 3.5 0 014.94 0"/>
  </svg>
</template>
