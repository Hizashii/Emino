import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages base path - change this to your repo name if not deploying to root
// For https://username.github.io/repo-name use '/repo-name/'
// For https://username.github.io use '/'
export default defineConfig({
  base: '/',
  plugins: [react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})

