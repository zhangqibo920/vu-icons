<script lang="ts">
import { computed } from 'vue'

export default {
  name: 'VuIcon',
  props: {
    icon: { type: String, required: true },
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
    spin: { type: Boolean, default: false }
  },
  setup(props: any) {
    const iconStyle = computed(() => {
      const s = props.size
      const size = (typeof s === 'number' || !isNaN(Number(s)))
        ? s + 'px'
        : s
      return {
        fontSize: size,
        width: size,
        height: size,
        lineHeight: size,
        color: props.color
      }
    })

    const iconClass = computed(() => `vu-icon vu-icon-${props.icon}`)

    return { iconStyle, iconClass, spin: computed(() => props.spin) }
  }
}
</script>

<template>
  <text
    :class="[iconClass, { 'vu-icon-spin': spin }]"
    :style="iconStyle"
  />
</template>

<style>
@import './font/vu-icons.css';

.vu-icon {
  font-family: 'vu-icons' !important;
}

.vu-icon-spin {
  animation: vu-spin 1s linear infinite;
}

@keyframes vu-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
