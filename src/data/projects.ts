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
    name: "Bonga Shop",
    type: "Marketplace académico",
    year: "2025",
    summary:
      "Marketplace de vapeadores desechables con catálogo, carrito, pedidos, inventario, panel administrativo y recomendaciones mediante inteligencia artificial local.",
    problem:
      "La venta y administración de un catálogo con múltiples marcas y variantes exige mantener sincronizados el inventario, los pedidos y la experiencia de compra. El proyecto debía resolver ese flujo completo y, al mismo tiempo, separar con claridad las funciones del cliente y del administrador.",
    solution:
      "Desarrollamos una aplicación web con autenticación JWT y roles de cliente y administrador. Incluye catálogo y variantes, favoritos, carrito persistente, checkout, historial de pedidos, control de stock, exportación de movimientos e integración con Ollama para generar recomendaciones de compra y apoyo operativo.",
    technologies: [
      "Angular 19",
      "TypeScript",
      "Spring Boot",
      "Java 17",
      "PostgreSQL",
      "Docker",
      "Ollama",
    ],
    cover: "/images/projects/proyecto-01/bonga-home.webp",
    gallery: [
      "/images/projects/proyecto-01/bonga-login.webp",
      "/images/projects/proyecto-01/bonga-marketplace.webp",
      "/images/projects/proyecto-01/bonga-admin.webp",
    ],
    links: {
      demo: "",
      code: "https://github.com/SantiagoLeyton/BONGA-SHOP",
    },
  },
  {
    slug: "proyecto-02",
    name: "Ágora — Simulador Psicosocial",
    type: "Proyecto nuclear universitario",
    year: "2026",
    summary:
      "Plataforma de simulación clínica interactiva para que estudiantes de psicología practiquen casos psicosociales y reciban evaluación y retroalimentación estructurada.",
    problem:
      "La práctica clínica supervisada en psicología es costosa, difícil de escalar y compleja de evaluar con criterios homogéneos. Los docentes necesitan crear actividades trazables y los estudiantes requieren un entorno seguro donde puedan practicar decisiones clínicas antes de enfrentarse a escenarios reales.",
    solution:
      "Construimos una plataforma por roles donde el docente diseña casos, escenas, preguntas y resultados de aprendizaje, y programa actividades para grupos. El estudiante recorre simulaciones con decisiones ramificadas y estados emocionales dinámicos; al terminar, recibe una nota de 0 a 5, feedback, métricas de aprendizaje y una síntesis pedagógica asistida por IA.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Spring Boot",
      "Java 21",
      "PostgreSQL",
      "Tailwind CSS",
      "Ollama",
    ],
    cover: "/images/projects/proyecto-02/agora-home.webp",
    gallery: [
      "/images/projects/proyecto-02/agora-login.webp",
      "/images/projects/proyecto-02/agora-simulation.webp",
      "/images/projects/proyecto-02/agora-admin.webp",
    ],
    links: {
      demo: "",
      code: "https://github.com/SantiagoLeyton/Agora",
    },
  },
];
