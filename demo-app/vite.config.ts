import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { join } from 'path';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: `Live Demo Preview`,
        },
      },
    }),
  ],
  assetsInclude: ['**/*.csv'],
  resolve: {
    alias: {
      react: join(__dirname, './node_modules/react'),
      'react-dom': join(__dirname, './node_modules/react-dom'),
    },
  },
});
