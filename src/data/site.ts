// ─────────────────────────────────────────────────────────────
// DATOS PERSONALES — edita este archivo para actualizar el sitio.
// No necesitas tocar ningún componente para cambiar textos o enlaces.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "[TU NOMBRE]",
  role: "Desarrollador de software",
  location: "Colombia",

  // Frase corta que acompaña el nombre en el hero.
  tagline: "Construyo productos web claros, sólidos y cuidados en el detalle.",

  // Presentación breve del hero (2-3 líneas). Directa, sin exagerar experiencia.
  heroDescription:
    "Diseño y desarrollo interfaces web funcionales, desde la lógica del backend hasta el detalle visual final. Actualmente enfocado en proyectos universitarios que resuelven problemas reales.",

  // Texto más largo para la sección "Sobre mí".
  aboutText: [
    "Soy desarrollador de software enfocado en crear productos web funcionales, claros y visualmente cuidados. Me interesa combinar una estructura técnica sólida con experiencias digitales que sean fáciles de utilizar.",
    "Disfruto el proceso completo: entender el problema, definir la solución, construir el backend y cuidar cada detalle de la interfaz. Me interesa especialmente el diseño de producto, la experiencia de usuario y cómo la tecnología puede resolver problemas concretos.",
  ],

  // Foto opcional para "Sobre mí". Reemplaza el archivo en /public/images/about/perfil.jpg
  // (guarda tu foto real con ese nombre y cambia la extensión aquí si no usas .jpg).
  aboutPhoto: "/images/about/perfil.svg",

  education: [
    {
      title: "[Título / carrera]",
      institution: "[Nombre de la institución]",
      period: "[Año de inicio] — [Año de fin / en curso]",
    },
  ],

  contact: {
    email: "tucorreo@ejemplo.com",
    github: "https://github.com/tu-usuario",
    linkedin: "https://linkedin.com/in/tu-usuario",
    whatsapp: "https://wa.me/57XXXXXXXXXX",
    resumeUrl: "", // Enlace a tu CV en PDF, cuando lo tengas.
  },

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
  ],

  footerNote: "Diseñado y desarrollado a mano, sección por sección.",
} as const;

// Tecnologías mostradas en la sección "Tecnologías".
// Sin niveles ni porcentajes: solo una lista limpia y editable.
export const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "PHP",
  "Laravel",
  "Astro",
  "Tailwind CSS",
  "MySQL",
  "Git",
  "GitHub",
] as const;

export const seo = {
  titleDefault: `${site.name} — ${site.role}`,
  description:
    "Portafolio de desarrollador de software: proyectos, tecnologías y contacto.",
  // Reemplaza /public/images/og-cover.jpg por tu propia imagen (1200×630) y actualiza esta ruta.
  ogImage: "/images/og-cover.svg",
} as const;
