import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { adminEventsPlugin } from './src/admin-events-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ...(process.env.NODE_ENV === 'production' ? [] : [adminEventsPlugin()]),
  ],
})
