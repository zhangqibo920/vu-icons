<script>
import { iconData } from './icons-data.js'

export default {
  name: 'VuIcon',
  props: {
    name: { type: String, default: '' },
    icon: { type: String, default: '' },
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
    spin: { type: Boolean, default: false }
  },
  computed: {
    iconName() {
      return this.name || this.icon
    },
    pxSize() {
      const s = this.size
      return (typeof s === 'number' || !isNaN(Number(s))) ? Number(s) : 24
    },
    maskData() {
      if (!this.iconName) return ''
      const data = iconData[this.iconName]
      if (!data) return ''
      const svgContent = data.content.replace(/currentColor/g, '#000000')
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${data.viewBox}">${svgContent}</svg>`
      return 'data:image/svg+xml,' + encodeURIComponent(svg)
    },
    wrapStyle() {
      const s = this.pxSize + 'px'
      const color = this.color === 'currentColor' ? '#333333' : this.color
      return {
        '--vu-icon-size': s,
        '--vu-icon-color': color,
        '--vu-icon-mask': 'url(' + this.maskData + ')'
      }
    }
  }
}
</script>

<template>
  <view
    :class="['vu-icon', spin && 'vu-icon-spin']"
    :style="wrapStyle"
  />
</template>

<style>
.vu-icon {
  display: inline-block;
  vertical-align: middle;
  width: var(--vu-icon-size, 24px);
  height: var(--vu-icon-size, 24px);
  background-color: var(--vu-icon-color, #333333);
  -webkit-mask-image: var(--vu-icon-mask, none);
  mask-image: var(--vu-icon-mask, none);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
}
.vu-icon-spin {
  animation: vu-spin 1s linear infinite;
}
@keyframes vu-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
