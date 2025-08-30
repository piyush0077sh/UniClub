import { defineConfig } from 'vite'

export default defineConfig({
  server: {
  plugins: [react()],
  server: {
    allowedHosts: ['.csb.app']
  }
  }
})


