import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { VitePWA } from 'vite-plugin-pwa';

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
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'apple-touch-icon.png',
        'favicon.ico',
        'logo.svg',
        'home.png',
      ],
      manifest: {
        name: 'OneClick',
        short_name: '1click',
        description:
          'Navigate to your favorite actions on the websites you love with just one click',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          {
            src: 'logo192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'logo512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
