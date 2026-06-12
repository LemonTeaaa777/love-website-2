/** Garden.js — Taman bunga dengan hover reveal */
export function renderGarden(garden) {
  const flowers = garden.flowers.map(f => `
    <div class="flower-card">
      <span class="flower-emoji">${f.emoji}</span>
      <span class="flower-name">${f.name}</span>
      <div class="flower-meaning">${f.meaning}</div>
    </div>
  `).join('');

  return `
    <section id="garden">
      <div class="garden-inner">
        <span class="section-label">${garden.sectionLabel}</span>
        <h2 class="section-heading garden-heading reveal">
          ${garden.heading} <em>${garden.headingAccent}</em>
        </h2>
        <p class="garden-hint">${garden.hint}</p>
        <div class="flowers-grid">
          ${flowers}
        </div>
      </div>
    </section>
  `;
}