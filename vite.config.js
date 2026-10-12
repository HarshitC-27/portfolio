import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'node:process'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS === 'true' ? '/portfolio/' : '/',
  plugins: [react()],
  build: {
    // Keep deploy assets in a versioned directory so GitHub Pages and browsers
    // cannot reuse stale 404 responses from an earlier deployment.
    assetsDir: 'site-assets-v2'
  },
  server: {
    host: true,
    port: 5173
  }
})
