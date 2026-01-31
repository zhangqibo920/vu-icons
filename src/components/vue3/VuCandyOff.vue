<script setup lang="ts">
const name = 'VuCandyOff'
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
    <path d="M10 10v7.9m1.802-11.755a5 5 0 016.053 6.053M14 6.1v2.243m1.5 7.228l-.964.964a5 5 0 01-7.071 0 5 5 0 010-7.07l.964-.965"/><path d="M16 7V3a1 1 0 011.707-.707 2.5 2.5 0 002.152.717 1 1 0 011.131 1.131 2.5 2.5 0 00.717 2.152A1 1 0 0121 8h-4M2 2l20 20M8 17v4a1 1 0 01-1.707.707 2.5 2.5 0 00-2.152-.717 1 1 0 01-1.131-1.131 2.5 2.5 0 00-.717-2.152A1 1 0 013 16h4"/>
  </svg>
</template>
