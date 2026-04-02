import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], 
  server: {
  host: '0.0.0.0',      // Allows external access (required for Cloudflare Tunnel)
  port: 6969,            // Change this to any port you want (3000, 8080, etc.)
  strictPort: false,     // If port is taken, it will try next available
  },  
})