import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

import data from './data';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data,
      },
    }),
  ],
});
