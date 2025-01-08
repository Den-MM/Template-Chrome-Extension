import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        background: resolve(__dirname, 'src/Scripts/background.ts'),
        contentScriptGPT: resolve(__dirname, 'src/Scripts/contentScriptGPT.ts'),
        app: './Popup.html',
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js'
      },
    },
  },
  server: {
    open: '/Popup.html'
  }
});