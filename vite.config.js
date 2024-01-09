import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: './local/weather-privateKey.key',
      cert: './local/weather.crt',
    }
  },
  plugins: [react()],
})
