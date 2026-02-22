import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: true, // <--- This allows ANY tunnel link to work forever
  }
})