<script lang="ts">
import { computed } from 'vue'
import { iconData } from './icons-data.js'

export default {
  name: 'VuIcon',
  props: {
    icon: { type: String, required: true },
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
    spin: { type: Boolean, default: false }
  },
  setup(props: any) {
    const svgDataUri = computed(() => {
      const data = iconData[props.icon]
      if (!data) return ''
      const color = props.color === 'currentColor' ? '#000000' : props.color
      const svgContent = data.content.replace(/currentColor/g, color)
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${data.viewBox}">${svgContent}</svg>`
      return `data:image/svg+xml,${encodeURIComponent(svg)}`
    })

    const imgStyle = computed(() => {
      const s = props.size
      const size = (typeof s === 'number' || !isNaN(Number(s)))
        ? s + 'px'
        : s
      return {
        width: size,
        height: size,
        display: 'inline-block',
        verticalAlign: 'middle'
      }
    })

    return { svgDataUri, imgStyle, spin: computed(() => props.spin) }
  }
}
</script>

<template>
  <img
    :src="svgDataUri"
    :style="[imgStyle, spin ? { animation: 'vu-spin 1s linear infinite' } : {}]"
    draggable="false"
  />
</template>

<style>
.vu-icon-spin {
  animation: vu-spin 1s linear infinite;
}

@keyframes vu-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
