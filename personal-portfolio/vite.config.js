import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // remove base or set it to '/'
  base: '/',
  plugins: [react()],
})
