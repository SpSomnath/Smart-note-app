import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Import path to resolve file paths

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Map '@' to the 'src' directory
    },
  },
})
