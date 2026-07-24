// ─────────────────────────────────────────────────────────────
// PROYECTOS — añade, edita o reordena proyectos desde este archivo.
// Cada proyecto nuevo aparece automáticamente en la sección de
// Proyectos y genera su propia página de detalle en /proyectos/[slug].
// ─────────────────────────────────────────────────────────────

export interface Project {
  slug: string;
  name: string;
  type: string;
  year: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  // Imagen principal — colócala en /public/images/projects/<slug>/cover.jpg
  cover: string;
  // Galería de mockups adicionales — /public/images/projects/<slug>/01.jpg, 02.jpg...
  gallery: string[];
  links: {
    demo?: string;
    code?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "proyecto-01",
    name: "[NOMBRE DEL PROYECTO 1]",
    type: "Proyecto universitario",
    year: "2025",
    summary:
      "Describe en una frase de qué trata el proyecto y a quién está dirigido.",
    problem:
      "Explica aquí el problema real que motivó el proyecto: qué situación, proceso o necesidad no estaba bien resuelta antes de este trabajo.",
    solution:
      "Describe la solución que desarrollaste: cómo funciona, qué decisiones tomaste y por qué resuelve el problema planteado.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    // Reemplaza estos archivos en /public/images/projects/proyecto-01/
    // (mismo nombre; cambia la extensión aquí si no usas .jpg)
    cover: "/images/projects/proyecto-01/cover.svg",
    gallery: [
      "/images/projects/proyecto-01/01.svg",
      "/images/projects/proyecto-01/02.svg",
      "/images/projects/proyecto-01/03.svg",
    ],
    links: {
      demo: "",
      code: "",
    },
  },
  {
    slug: "proyecto-02",
    name: "[NOMBRE DEL PROYECTO 2]",
    type: "Proyecto universitario",
    year: "2025",
    summary:
      "Describe en una frase de qué trata el proyecto y a quién está dirigido.",
    problem:
      "Explica aquí el problema real que motivó el proyecto: qué situación, proceso o necesidad no estaba bien resuelta antes de este trabajo.",
    solution:
      "Describe la solución que desarrollaste: cómo funciona, qué decisiones tomaste y por qué resuelve el problema planteado.",
    technologies: ["Astro", "TypeScript", "MySQL"],
    // Reemplaza estos archivos en /public/images/projects/proyecto-02/
    // (mismo nombre; cambia la extensión aquí si no usas .jpg)
    cover: "/images/projects/proyecto-02/cover.svg",
    gallery: [
      "/images/projects/proyecto-02/01.svg",
      "/images/projects/proyecto-02/02.svg",
      "/images/projects/proyecto-02/03.svg",
    ],
    links: {
      demo: "",
      code: "",
    },
  },
];
