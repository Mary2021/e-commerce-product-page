import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/e-commerce-product-page/',
  test: {
    // add jsdom to vite
    environment: 'jsdom',
    // //make all imports from Vitest global
    globals: true,
    //include this setup test file
    setupFiles: './src/tests/setup.jsx', // assuming the test folder is in the root of our project
  }
})
