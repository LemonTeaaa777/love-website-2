/** Hero.js — Bagian paling atas halaman */
export function renderHero(hero) {
  return `
    <section id="hero">
      <div class="hero-bg-petals"></div>
      <p class="hero-eyebrow">${hero.eyebrow}</p>
      <h1 class="hero-heading">${hero.heading}</h1>
      <p class="hero-sub">${hero.subheading}</p>
      <a class="hero-cta" href="#letter">${hero.cta}</a>
    </section>
  `;
}