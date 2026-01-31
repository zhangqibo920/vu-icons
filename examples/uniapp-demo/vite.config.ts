import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'

export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      'vu-icons/uniapp': path.resolve(__dirname, '../../src/components/uniapp/index.ts'),
      'vu-icons': path.resolve(__dirname, '../../src/index.ts')
    }
  }
})