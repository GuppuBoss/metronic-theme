import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    },
    devSourcemap: false,
    // Add this to silence CSS warnings
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  },
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    chunkSizeWarningLimit: 3000,
    // Add these options to ignore warnings
    reportCompressedSize: false,
    cssCodeSplit: false,
    minify: false
  }
});
