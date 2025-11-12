// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server', // 👈 Importante para SSR
  adapter: vercel({}), // 👈 Argumento vacío obligatorio en versiones nuevas
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
