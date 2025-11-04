import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// For GitHub Pages deployment
// If deploying to https://hizashii.github.io/Emino/ use '/Emino/'
// If deploying to https://hizashii.github.io use '/'

export default defineConfig({
  base: '/Emino/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
