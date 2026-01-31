<script setup lang="ts">
const name = 'VuCroissant'
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
    <path d="M10.2 18H4.774a1.5 1.5 0 01-1.352-.97 11 11 0 01.132-6.487M18 10.2V4.774a1.5 1.5 0 00-.97-1.352 11 11 0 00-6.486.132"/><path d="M18 5a4 3 0 014 3 2 2 0 01-2 2 10 10 0 00-5.139 1.42M5 18a3 4 0 003 4 2 2 0 002-2 10 10 0 011.42-5.14"/><path d="M8.709 2.554a10 10 0 00-6.155 6.155 1.5 1.5 0 00.676 1.626l9.807 5.42a2 2 0 002.718-2.718l-5.42-9.807a1.5 1.5 0 00-1.626-.676"/>
  </svg>
</template>
