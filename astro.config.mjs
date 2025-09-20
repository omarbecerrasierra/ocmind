// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Configura el sitio para dominio personalizado
  site: 'https://ocmind.tech',
  // base: '/ocmind', // Comentamos esto para dominio personalizado
  
  // Integrations para SEO
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Configuraciones adicionales para el sitemap
      customPages: [
        'https://ocmind.tech/',
        'https://ocmind.tech/#servicios',
        'https://ocmind.tech/#planes', 
        'https://ocmind.tech/#faq',
        'https://ocmind.tech/#contacto'
      ]
    })
  ],
  
  // Configura el output como estático para GitHub Pages
  output: 'static',
  
  // Optimiza para producción
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  
  // Configuraciones de SEO adicionales
  compressHTML: true,
  
  // Mejora la experiencia de desarrollo
  devToolbar: {
    enabled: false
  }
});
