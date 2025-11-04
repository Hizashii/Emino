import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// For GitHub Pages deployment
// If deploying to https://hizashii.github.io/emino/ use '/emino/'
// If deploying to https://hizashii.github.io use '/'

export default defineConfig({
  base: '/emino/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
