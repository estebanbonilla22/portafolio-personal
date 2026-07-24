import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const prefersReduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReduced) {
  gsap.registerPlugin(ScrollTrigger);

  const heroEls = gsap.utils.toArray<HTMLElement>("#inicio [data-reveal]");
  const otherEls = gsap.utils
    .toArray<HTMLElement>("[data-reveal]")
    .filter((el) => !heroEls.includes(el));

  // Aparición progresiva del hero al cargar.
  gsap.set(heroEls, { opacity: 0, y: 24 });
  gsap.to(heroEls, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.12,
    delay: 0.15,
  });

  // Revelado de texto e imágenes al hacer scroll, sección por sección.
  otherEls.forEach((el) => {
    gsap.set(el, { opacity: 0, y: 24 });
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    });
  });
}
