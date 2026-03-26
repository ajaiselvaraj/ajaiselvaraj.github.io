import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: ['/'],
      renderer: '@prerenderer/renderer-puppeteer',
      server: {
        host: 'localhost',
        port: 5173
      }
    })
  ],
})
