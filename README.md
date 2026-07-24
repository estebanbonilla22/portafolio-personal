# Portafolio personal

Landing page de una sola página para presentar proyectos como desarrollador de software. Construida con Astro, TypeScript, Tailwind CSS y GSAP, con una estética editorial minimalista (marfil / negro / acento verde grisáceo).

## Tecnologías

- [Astro](https://astro.build) — generación estática, cero JS por defecto
- TypeScript
- Tailwind CSS v4 (vía `@tailwindcss/vite`)
- [GSAP](https://gsap.com) + ScrollTrigger — animaciones de scroll y del hero
- Google Fonts: **Fraunces** (serif editorial) + **Instrument Sans** (sans)

No usa React ni ningún framework de UI: todos los componentes son `.astro`.

## Estructura del proyecto

```
src/
  components/       Header, Hero, ProjectsSection, ProjectFeature, About, Tech, Contact, Footer
  data/
    site.ts         Datos personales, contacto, navegación, tecnologías
    projects.ts      Lista de proyectos (editable, central)
  layouts/
    Layout.astro     <head>, SEO, Open Graph, fuentes
  pages/
    index.astro       Página principal (une todas las secciones)
    proyectos/
      [slug].astro    Página de detalle, una por cada proyecto en projects.ts
  scripts/
    animations.ts     Animaciones GSAP (reveal, hero, respeta prefers-reduced-motion)
  styles/
    global.css        Tokens de diseño (colores, tipografías) y estilos base
public/
  images/             Imágenes e íconos (ver sección siguiente)
  favicon.svg
  robots.txt
```

## Edita tu contenido — dónde cambiar cada cosa

No necesitas tocar los componentes para actualizar el sitio. Todo el contenido vive en dos archivos:

### `src/data/site.ts`

- Nombre, cargo, ubicación, frase del hero, biografía
- Formación académica
- Correo, GitHub, LinkedIn, WhatsApp, enlace al CV
- Enlaces del menú de navegación
- Lista de tecnologías (sección "Tecnologías")

### `src/data/projects.ts`

Cada proyecto es un objeto en el arreglo `projects`. Para añadir un proyecto nuevo, copia uno existente y cambia sus datos: se agrega automáticamente a la sección de Proyectos y genera su propia página `/proyectos/<slug>/`.

Campos por proyecto: `name`, `type`, `year`, `summary`, `problem`, `solution`, `technologies`, `cover`, `gallery`, `links.demo`, `links.code`.

Si `links.demo` o `links.code` quedan vacíos (`""`), el botón correspondiente se muestra atenuado y no clickeable hasta que agregues el enlace real.

## Imágenes — qué reemplazar

El sitio usa **placeholders locales en SVG** (no enlaces externos) para que nada se vea roto mientras no tengas tus capturas reales. Cada placeholder indica en la propia imagen el nombre de archivo que debe reemplazarlo.

Reemplaza estos archivos manteniendo el mismo nombre (o cambia la extensión en `site.ts` / `projects.ts` si no usas `.jpg`):

| Reemplaza este archivo | Úsalo para | Tamaño sugerido |
|---|---|---|
| `public/images/about/perfil.svg` | Foto personal en "Sobre mí" (opcional) | 640×800 (vertical) |
| `public/images/og-cover.svg` | Imagen de vista previa al compartir el sitio (Open Graph) | 1200×630 |
| `public/images/projects/proyecto-01/cover.svg` | Imagen principal del proyecto 1 | 1200×900 |
| `public/images/projects/proyecto-01/01.svg`, `02.svg`, `03.svg` | Galería del proyecto 1 | 1200×900 |
| `public/images/projects/proyecto-02/cover.svg` | Imagen principal del proyecto 2 | 1200×900 |
| `public/images/projects/proyecto-02/01.svg`, `02.svg`, `03.svg` | Galería del proyecto 2 | 1200×900 |

Para añadir un tercer proyecto: crea `public/images/projects/proyecto-03/` con las mismas imágenes y agrégalo en `src/data/projects.ts`.

También puedes reemplazar `public/favicon.svg` por tu propio logotipo o inicial.

## Ejecutar el proyecto localmente

Requisitos: [Node.js](https://nodejs.org) 18 o superior.

```bash
npm install       # instala las dependencias
npm run dev        # servidor de desarrollo en http://localhost:4321
npm run build       # compila el sitio para producción (incluye chequeo de tipos)
npm run preview     # sirve la versión ya compilada, para verificarla localmente
```

## Publicar el sitio

El proyecto ya está configurado para desplegarse como sitio estático. Comando de build: `npm run build`. Carpeta de salida: `dist/`.

**Antes de publicar**, actualiza `SITE_URL` en [astro.config.mjs](astro.config.mjs) con tu dominio real (se usa para el sitemap y las etiquetas Open Graph).

### Cloudflare Pages
1. Sube este proyecto a un repositorio de GitHub/GitLab.
2. En Cloudflare Pages, crea un proyecto nuevo conectado a ese repositorio.
3. Framework preset: **Astro**. Comando de build: `npm run build`. Carpeta de salida: `dist`.

### Vercel
1. Importa el repositorio en [vercel.com/new](https://vercel.com/new).
2. Vercel detecta Astro automáticamente. Comando de build: `npm run build`. Carpeta de salida: `dist`.

### Netlify
1. Importa el repositorio en Netlify.
2. Comando de build: `npm run build`. Carpeta de publicación: `dist`.

## Accesibilidad y SEO

- HTML semántico (`header`, `main`, `nav`, `article`, `footer`) y jerarquía de encabezados correcta.
- Enlace "Saltar al contenido" para navegación por teclado.
- Estados de foco visibles (`:focus-visible`) en todos los elementos interactivos.
- Textos alternativos en todas las imágenes.
- Metadatos SEO y Open Graph configurados en `Layout.astro`, con `sitemap-index.xml` generado automáticamente en el build.
- Todas las animaciones respetan `prefers-reduced-motion: reduce`.

## Notas

- Todo el contenido de ejemplo (nombre, proyectos, formación) son placeholders explícitos entre corchetes — reemplázalos antes de compartir el sitio.
- No se incluyen clientes, empresas ni testimonios inventados.
- Las tipografías (Fraunces, Instrument Sans) son gratuitas y de uso libre vía Google Fonts.
