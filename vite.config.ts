import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';


const fullRepoName = process.env.GITHUB_REPOSITORY; 
const base = fullRepoName ? `/${fullRepoName.split('/')[1]}/` : '/';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    allowedHosts: true,
  },
  base,
})
