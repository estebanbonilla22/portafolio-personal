// ─────────────────────────────────────────────────────────────
// DATOS PERSONALES — edita este archivo para actualizar el sitio.
// No necesitas tocar ningún componente para cambiar textos o enlaces.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Esteban Bonilla Giraldo",
  role: "Estudiante de Ingeniería de Software",
  location: "Armenia, Quindío",

  // Frase corta que acompaña el nombre en el hero.
  tagline: "Construyo productos web claros, funcionales y cuidados en el detalle.",

  // Presentación breve del hero (2-3 líneas). Directa, sin exagerar experiencia.
  heroDescription:
    "Soy estudiante de cuarto semestre y desarrollo aplicaciones web de principio a fin, desde la lógica del backend y los datos hasta una interfaz clara y funcional.",

  // Texto más largo para la sección "Sobre mí".
  aboutText: [
    "Tengo 18 años y curso cuarto semestre de Ingeniería de Software en la Corporación Universitaria Empresarial Alexander von Humboldt, en Armenia, Quindío. Me enfoco en crear aplicaciones web completas, claras y visualmente cuidadas.",
    "He trabajado en proyectos académicos con frontend, backend, bases de datos, autenticación, roles, contenedores e integración de inteligencia artificial. Disfruto entender el problema, diseñar una solución útil y convertirla en una experiencia fácil de usar.",
  ],

  // Foto opcional para "Sobre mí". Reemplaza el archivo en /public/images/about/perfil.jpg
  // (guarda tu foto real con ese nombre y cambia la extensión aquí si no usas .jpg).
  aboutPhoto: "/images/about/esteban-bonilla.png",

  education: [
    {
      title: "Ingeniería de Software — cuarto semestre",
      institution: "Corporación Universitaria Empresarial Alexander von Humboldt",
      period: "En curso",
    },
  ],

  contact: {
    email: "bonikrr9@gmail.com",
    phone: "+57 310 545 9660",
    github: "https://github.com/estebanbonilla22",
    linkedin: "",
    whatsapp: "https://wa.me/573105459660",
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
    "Portafolio de Esteban Bonilla Giraldo, estudiante de Ingeniería de Software en Armenia, Quindío.",
  // Reemplaza /public/images/og-cover.jpg por tu propia imagen (1200×630) y actualiza esta ruta.
  ogImage: "/images/og-cover.svg",
} as const;
