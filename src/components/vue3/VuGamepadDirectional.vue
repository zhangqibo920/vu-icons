<script setup lang="ts">
const name = 'VuGamepadDirectional'
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
    <path d="M11.146 15.854a1.207 1.207 0 011.708 0l1.56 1.56A2 2 0 0115 18.828V21a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2.172a2 2 0 01.586-1.414zM18.828 15a2 2 0 01-1.414-.586l-1.56-1.56a1.207 1.207 0 010-1.708l1.56-1.56A2 2 0 0118.828 9H21a1 1 0 011 1v4a1 1 0 01-1 1zm-12.242-.586A2 2 0 015.172 15H3a1 1 0 01-1-1v-4a1 1 0 011-1h2.172a2 2 0 011.414.586l1.56 1.56a1.207 1.207 0 010 1.708zM9 3a1 1 0 011-1h4a1 1 0 011 1v2.172a2 2 0 01-.586 1.414l-1.56 1.56a1.207 1.207 0 01-1.708 0l-1.56-1.56A2 2 0 019 5.172z"/>
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
