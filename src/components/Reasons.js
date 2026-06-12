/** Reasons.js — Kartu-kartu alasan mencintai */
export function renderReasons(reasons) {
  const cards = reasons.items.map(item => `
    <div class="reason-card">
      <span class="reason-emoji">${item.emoji}</span>
      <p class="reason-title">${item.title}</p>
      <p class="reason-text">${item.text}</p>
    </div>
  `).join('');

  return `
    <section id="reasons">
      <span class="section-label">${reasons.sectionLabel}</span>
      <h2 class="section-heading reasons-heading reveal">${reasons.heading}</h2>
      <div class="reasons-grid">
        ${cards}
      </div>
    </section>
  `;
}