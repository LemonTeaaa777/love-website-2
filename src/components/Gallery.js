/** Gallery.js — Grid foto */
export function renderGallery(gallery) {
  const photos = gallery.photos.map(photo => `
    <div class="gallery-item">
      <img src="${photo.image}" alt="${photo.caption}" loading="lazy" />
      <div class="gallery-caption">${photo.caption}</div>
    </div>
  `).join('');

  return `
    <section id="gallery">
      <span class="section-label">${gallery.sectionLabel}</span>
      <h2 class="section-heading gallery-heading reveal">
        ${gallery.heading} <em>${gallery.headingAccent}</em>
      </h2>
      <div class="gallery-grid">
        ${photos}
      </div>
      <p class="gallery-footer reveal">${gallery.footer}</p>
    </section>
  `;
}