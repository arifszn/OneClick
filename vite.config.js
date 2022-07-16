import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    isExtension: false,
  },
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          injectStyle: ``,
        },
      },
    }),
  ],
});
