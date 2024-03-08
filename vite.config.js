import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // You may need to replace `react()` with the actual plugin you are using, like `vite-plugin-react`
 
  server: {
    host: '0.0.0.0',
    port: 3000
  }


});
