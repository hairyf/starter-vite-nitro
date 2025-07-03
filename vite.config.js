import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import pages from 'vite-plugin-pages'
import nitro from 'nitropack-vite'

export default defineConfig({
  plugins: [
    nitro(),
    react(),
    pages({
      resolver: 'react',
      extensions: ['jsx', 'tsx'],
    }),
  ],
})
