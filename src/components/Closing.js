/** Closing.js — Bagian penutup halaman */
export function renderClosing(closing) {
  return `
    <section id="closing">
      <span class="section-label">${closing.sectionLabel}</span>
      <h2 class="section-heading closing-heading reveal">
        ${closing.heading} <em>${closing.headingAccent}</em>
      </h2>
      <p class="closing-body reveal">${closing.body}</p>
      <span class="closing-emoji reveal">${closing.emoji}</span>
      <p class="closing-footer">${closing.footer}</p>
      <span class="closing-credit">${closing.credit}</span>
    </section>
  `;
}