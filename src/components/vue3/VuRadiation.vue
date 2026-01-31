<script setup lang="ts">
const name = 'VuRadiation'
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
    <path d="M12 12h.01M14 15.464a4 4 0 01-4 0l-2.472 4.282a1 1 0 00.465 1.416 10 10 0 008.014 0 1 1 0 00.465-1.416zM16 12a4 4 0 00-2-3.464l2.472-4.282a1 1 0 011.46-.305 10 10 0 014.006 6.94A1 1 0 0121 12zm-8 0a4 4 0 012-3.464L7.528 4.254a1 1 0 00-1.46-.305 10 10 0 00-4.006 6.94A1 1 0 003 12z"/>
  </svg>
</template>
