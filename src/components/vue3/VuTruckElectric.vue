<script setup lang="ts">
const name = 'VuTruckElectric'
import { computed } from 'vue'

interface Props {
  size?: number | string
  color?: string
  className?: string
  spin?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  color: 'currentColor',
  className: '',
  spin: false
})

const style = computed(() => ({
  width: typeof props.size === 'number' ? `${props.size}px` : props.size,
  height: typeof props.size === 'number' ? `${props.size}px` : props.size,
  color: props.color,
  ...(props.spin ? { animation: 'vu-icon-spin 1s linear infinite' } : {})
}))
</script>

<template>
  <svg :class="className" :style="style" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 19V7a2 2 0 00-2-2H9m6 14H9m10 0h2a1 1 0 001-1v-3.65a1 1 0 00-.22-.62L18.3 9.38a1 1 0 00-.78-.38H14M2 13v5a1 1 0 001 1h2M4 3L2.15 5.15a.495.495 0 00.35.86h2.15a.47.47 0 01.35.86L3 9.02"/><circle cx="17" cy="19" r="2"/><circle cx="7" cy="19" r="2"/>
  </svg>
</template>

<style>
@keyframes vu-icon-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
