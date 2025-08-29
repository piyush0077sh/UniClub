import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'tc78pq-5173.csb.app'  // 👈 add the sandbox host shown in your error
    ]
  }
})
