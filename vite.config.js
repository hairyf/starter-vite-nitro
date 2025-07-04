import react from '@vitejs/plugin-react-swc'
import nitro from 'nitropack-vite'
import { defineConfig } from 'vite'
import pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    nitro({ preset: 'vercel' }),
    react(),
    pages({
      resolver: 'react',
      extensions: ['jsx', 'tsx'],
    }),
  ],
})
