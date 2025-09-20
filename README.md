# 🚀 OCMIND Landing Page

Landing page moderna, responsiva y **muy fácil de editar** para OCMIND - Consultoría en IA, Marketing y Desarrollo Web.

Construida con **Astro v4+**, **TypeScript** y **CSS Variables** para máxima facilidad de personalización.

## ✨ Características

- 🎨 **Diseño moderno y profesional** con tema tech
- 📱 **Completamente responsiva** (mobile-first)
- ⚡ **Súper rápida** con Astro Islands
- 🔧 **Muy fácil de editar** con comentarios "EDITAR AQUÍ"
- ♿ **Accesible** (WCAG 2.1 AA)
- 🎯 **SEO optimizada** con Schema.org
- 🌍 **Multiidioma ready** (ES/EN)

## �️ Tecnologías

- **Astro v4+** - Framework web moderno
- **TypeScript** - Tipado estático
- **CSS Variables** - Sistema de diseño flexible
- **Astro Islands** - Interactividad optimizada
- **Google Fonts** - Typography (Inter)

## 🚀 Inicio Rápido

### Prerequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```powershell
# Navegar al proyecto
cd C:\Users\omara\Documents\ladingpage\ocmind-landing

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción  
npm run build

# Preview de producción
npm run preview
```

La página estará disponible en `http://localhost:4321`

## 📁 Estructura del Proyecto

```
ocmind-landing/
├── public/                 # Archivos estáticos
├── src/
│   ├── styles/
│   │   └── vars.css       # 🎨 VARIABLES DE DISEÑO
│   ├── layouts/
│   │   └── Base.astro     # Layout principal con SEO
│   ├── components/        # Componentes estáticos
│   │   ├── Header.astro   # Navegación principal
│   │   ├── Hero.astro     # Sección hero
│   │   ├── SocialProof.astro # Estadísticas y países
│   │   ├── Pricing.astro  # Planes de precios
│   │   ├── Contact.astro  # Formulario de contacto
│   │   ├── Footer.astro   # Pie de página
│   │   └── islands/       # Componentes interactivos
│   │       ├── FAQ.astro       # Acordeón de preguntas
│   │       ├── PricingToggle.astro # Toggle mensual/anual
│   │       └── MobileMenu.astro    # Menú móvil
│   └── pages/
│       └── index.astro    # 🏠 PÁGINA PRINCIPAL
├── astro.config.mjs       # Configuración de Astro
├── tsconfig.json          # Configuración TypeScript
└── package.json           # Dependencias
```

## 🎨 Personalización Fácil

### 1. Colores y Estilos Globales
**Archivo: `src/styles/vars.css`**

```css
/* EDITAR AQUÍ: Colores principales de OCMIND */
:root {
  --bg: #0B0F1A;        /* Fondo principal */
  --text: #F5F7FA;      /* Texto principal */
  --muted: #94A3B8;     /* Texto secundario */
  --accent: #F59E0B;    /* Color de acento (naranja) */
  /* ... más variables */
}
```

### 2. Información de la Empresa
**Archivo: `src/pages/index.astro`**

```astro
---
/* EDITAR AQUÍ: Configuración de la página principal */
const pageTitle = "OCMIND - Consultoría en IA, Marketing y Desarrollo Web";
const pageDescription = "Tu descripción aquí...";
---
```

### 3. Datos de Contacto
**Buscar por "EDITAR AQUÍ" en todos los archivos:**

- **WhatsApp**: Cambiar `+56964567998` por tu número
- **Email**: Actualizar en Footer y Contact
- **Dirección**: Modificar información de ubicación
- **Redes sociales**: Actualizar enlaces en Footer

### 4. Contenido de Secciones

#### Hero Section (`src/components/Hero.astro`)
```astro
<!-- EDITAR AQUÍ: Título principal y servicios -->
<h1 class="hero-title">
  Impulsamos tu negocio con <span class="gradient-text">Inteligencia Artificial</span>
</h1>
```

#### Precios (`src/components/Pricing.astro`)
```astro
<!-- EDITAR AQUÍ: Planes de precios -->
const plans = [
  {
    name: "Start",
    price: { monthly: 200, annual: 2000 },
    // ... más configuración
  }
];
```

#### FAQ (`src/components/islands/FAQ.astro`)
```typescript
// EDITAR AQUÍ: Preguntas frecuentes
const faqData = [
  {
    question: "¿Qué servicios ofrece OCMIND?",
    answer: "Tu respuesta aquí..."
  }
];
```

## 📱 Componentes Interactivos (Islands)

### FAQ Accordion
- **Archivo**: `src/components/islands/FAQ.astro`
- **Funcionalidad**: Acordeón interactivo con navegación por teclado
- **Personalizar**: Modificar array `faqData`

### Pricing Toggle  
- **Archivo**: `src/components/islands/PricingToggle.astro`
- **Funcionalidad**: Cambio entre precios mensual/anual
- **Personalizar**: Ajustar precios en componente Pricing

### Mobile Menu
- **Archivo**: `src/components/islands/MobileMenu.astro`
- **Funcionalidad**: Menú móvil con overlay
- **Personalizar**: Enlaces en Header.astro

## 🔧 Configuraciones Importantes

### SEO y Metadatos
**Archivo: `src/layouts/Base.astro`**
- Open Graph tags
- Schema.org structured data
- Meta descriptions
- Canonical URLs

### Analytics
**Archivo: `src/pages/index.astro`**
```javascript
// EDITAR AQUÍ para agregar Google Analytics, etc.
// Example: gtag('config', 'GA_MEASUREMENT_ID');
```

### Formulario de Contacto
**Archivo: `src/components/Contact.astro`**
- Actualmente envía por WhatsApp
- Fácil integración con Formspree, Netlify Forms, etc.

## 🌍 Multiidioma

Para agregar soporte multiidioma:

1. Crear `src/i18n/` con archivos de traducción
2. Usar Astro i18n routing
3. Actualizar componentes con traducciones

## 📈 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **Core Web Vitals**: Optimizado
- **Carga rápida**: Assets optimizados
- **SEO**: Schema.org + Open Graph

## 🚀 Deploy

### Netlify
```powershell
npm run build
# Subir carpeta dist/ a Netlify
```

### Vercel
```powershell
npm run build
# Conectar repo a Vercel
```

### Manual
```powershell
npm run build
# Subir contenido de dist/ a tu servidor
```

## 🔍 Comandos Útiles

```powershell
# Desarrollo
npm run dev              # Servidor de desarrollo
npm run build           # Construir para producción
npm run preview         # Preview de build local

# Utilidades
npm run astro add       # Agregar integraciones
npm run astro check     # Verificar TypeScript
npm run astro dev       # Alias para dev
```

## 📞 Información de Contacto OCMIND

- **WhatsApp Business**: [+56 9 6456 7998](https://wa.me/56964567998)
- **Email**: info@ocmind.com
- **Países**: 🇺🇸🇵🇪🇨🇴🇻🇪🇨🇱🇦🇷
- **Especialidades**: IA, Marketing Digital, Desarrollo Web

## 🤝 Soporte

Para modificaciones o soporte técnico:

1. **Buscar "EDITAR AQUÍ"** en los archivos
2. **Variables CSS** en `src/styles/vars.css`
3. **Contenido** en componentes individuales
4. **SEO** en `src/layouts/Base.astro`

## 📄 Licencia

Proyecto privado de OCMIND. Todos los derechos reservados.

---

**✨ ¡Landing page lista para impulsar tu negocio con IA, Marketing y Desarrollo Web!**

*Construida con ❤️ y mucho ☕ por el equipo OCMIND*
