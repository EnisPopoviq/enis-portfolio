import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // ✅ Import 'path' to resolve alias

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✅ Add this line
    base: '/enis-portfolio/',
    },
  },
});
