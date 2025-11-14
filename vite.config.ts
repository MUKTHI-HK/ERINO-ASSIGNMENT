import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// @ts-ignore Node types are available at runtime; TS sometimes complains during isolated build
import path from 'node:path';
// @ts-ignore
import { fileURLToPath } from 'node:url';

// ESM-compatible __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

