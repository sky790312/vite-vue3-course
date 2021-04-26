import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: "./",
  vueCompilerOptions: {
    isCustomElement: tag => /^x-/.test(tag)
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, './src')
      }
    ],
  }
})
