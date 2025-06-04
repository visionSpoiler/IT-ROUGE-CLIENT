import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    terserOptions: {
      compress: {
        pure_funcs: [
          'console.log',
          'console.error',
          'console.warn',
          'console.debug',
          'console.trace',
        ],
      }
    }
  }
})
