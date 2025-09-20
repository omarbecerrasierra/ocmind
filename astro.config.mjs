// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configura el sitio base para GitHub Pages
  // Reemplaza 'tu-usuario' y 'tu-repositorio' con tus valores reales
  site: 'https://omarbecerrasierra.github.io',
  base: '/ocmind',
  
  // Configura el output como estático para GitHub Pages
  output: 'static',
  
  // Optimiza para producción
  build: {
    assets: 'assets'
  }
});
