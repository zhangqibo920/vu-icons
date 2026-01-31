<script setup lang="ts">
const name = 'VuCloudCog'
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
    <path d="M10.852 19.772l-.383.924m2.679-6.468l.383-.923m-.383 6.467a3 3 0 10-2.296-5.544l-.383-.923"/><path d="M13.53 20.696l-.382-.924a3 3 0 11-2.296-5.544m3.92 1.624l.923-.383m-.923 2.679l.923.383"/><path d="M4.2 15.1a7 7 0 119.93-9.858A7 7 0 0115.71 8h1.79a4.5 4.5 0 012.5 8.2m-10.772-.348l-.923-.383m.923 2.679l-.923.383"/>
  </svg>
</template>
