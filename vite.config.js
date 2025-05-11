import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-karenschick/', // Make sure this is correct
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist', // Ensure it's building to the 'dist' folder
    assetsDir: 'assets', // This ensures assets are placed in the assets directory within 'dist'
  },
});
