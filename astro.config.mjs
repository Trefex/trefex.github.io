import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://trefex.github.io',
  base: '/',
  outDir: './dist',
  publicDir: './public',
});
