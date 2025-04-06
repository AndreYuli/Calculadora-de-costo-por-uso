import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br', 
      threshold: 1024, 
      deleteOriginFile: false, 
    }),
    visualizer({
      filename: './dist/stats.html', // Nombre del archivo de salida
      open: true, // Abre el visualizador automáticamente
    }),
  ],
  build: {
    minify: 'esbuild', // Utiliza esbuild para la minificación
    sourcemap: true, // Genera mapas de origen para facilitar la depuración
  },
  
});
