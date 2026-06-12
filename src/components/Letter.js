/** Letter.js — Surat cinta / pesan utama */
export function renderLetter(letter) {
  const paragraphs = letter.body
    .map(p => `<p class="letter-body">${p}</p>`)
    .join('');

  return `
    <section id="letter">
      <span class="section-label">${letter.sectionLabel}</span>
      <h2 class="section-heading letter-heading reveal">
        ${letter.heading} <em>${letter.headingAccent}</em> ${letter.headingEnd}
      </h2>
      <div style="margin-top: 2rem;">
        ${paragraphs}
      </div>
      <p class="letter-signature reveal">${letter.signature}</p>
    </section>
  `;
}