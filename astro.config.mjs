// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configura el sitio para dominio personalizado
  site: 'https://ocmind.tech',
  // base: '/ocmind', // Comentamos esto para dominio personalizado
  
  // Configura el output como estático para GitHub Pages
  output: 'static',
  
  // Optimiza para producción
  build: {
    assets: 'assets'
  }
});
