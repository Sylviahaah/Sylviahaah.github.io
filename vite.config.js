import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // For a GitHub user page (username.github.io), base is '/'
  // If you ever move to a project page (username.github.io/repo), change to '/repo/'
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    // Ensure assets use relative paths - important for GH Pages
    assetsDir: 'assets',
  },
})
