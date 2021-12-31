import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'MyLib',
      fileName: format => `my-lib.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'styled-components',
        'styled-components',
        'react-use',
        'lodash',
      ],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
