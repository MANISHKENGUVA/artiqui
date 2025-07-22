import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import path from 'path';

export default defineConfig({
  plugins: [createVuePlugin()],
  
  build: {
    outDir: path.resolve(__dirname, 'dist'),  // ✅ output path   outDir: path.resolve(__dirname, 'src/assets/artidist'),
    lib: {
      entry: path.resolve(__dirname, 'src/routerEngine.js'),
      name: 'RouterEngine',
      fileName: (format) => `router-engine.${format}.js`,
      formats: ['es', 'umd']
    },
    // rollupOptions: {
    //   external: ['vue'],
    //   output: {
    //     globals: {
    //       vue: 'Vue'
    //     },
    //     assetFileNames: 'assets/[name].[ext]'  // ✅ controls asset path inside artidist
    //   }
    // }
  }
});
