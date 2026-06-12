import { content } from './data/content.js';
import { renderHero }    from './components/Hero.js';
import { renderLetter }  from './components/Letter.js';
import { renderReasons } from './components/Reasons.js';
import { renderGarden }  from './components/Garden.js';
import { renderGallery } from './components/Gallery.js';
import { renderClosing } from './components/Closing.js';

document.title = content.profile.title;

const app = document.getElementById('app');

app.innerHTML = `
  ${renderHero(content.hero)}
  <div class="petal-divider">🌸 🌺 🌸</div>
  ${renderLetter(content.letter)}
  <div class="petal-divider">🌸</div>
  ${renderReasons(content.reasons)}
  ${renderGarden(content.garden)}
  <div class="petal-divider">🌸 🌺 🌼 🌸 🌷</div>
  ${renderGallery(content.gallery)}
  ${renderClosing(content.closing)}
`;

const heroBg = document.querySelector('.hero-bg-petals');
if (heroBg) {
  const petals = ['🌸','🌺','🌼','🌷','🌹','🪷'];
  for (let i = 0; i < 14; i++) {
    const p = document.createElement('span');
    p.classList.add('bg-petal');
    p.textContent = petals[Math.floor(Math.random() * petals.length)];
    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDuration = `${8 + Math.random() * 10}s`;
    p.style.animationDelay = `${Math.random() * 8}s`;
    p.style.fontSize = `${1.2 + Math.random() * 1.4}rem`;
    heroBg.appendChild(p);
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal, .reason-card, .gallery-item').forEach(el => {
  observer.observe(el);
});

document.querySelectorAll('.reason-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});
document.querySelectorAll('.gallery-item').forEach((item, i) => {
  item.style.transitionDelay = `${i * 0.12}s`;
});

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
  }, 900);
});

const musicCfg = content.music;
if (musicCfg && musicCfg.enabled) {
  const player = document.getElementById('music-player');
  const audio  = document.getElementById('bg-audio');
  const btn    = document.getElementById('music-btn');
  audio.src = musicCfg.src;
  player.style.display = 'block';
  let playing = false;
  btn.addEventListener('click', () => {
    if (playing) {
      audio.pause();
      btn.textContent = '🎵';
      btn.classList.remove('playing');
    } else {
      audio.play().catch(() => {});
      btn.textContent = '🎶';
      btn.classList.add('playing');
    }
    playing = !playing;
  });
  if (musicCfg.autoplay) {
    setTimeout(() => {
      audio.play().then(() => {
        playing = true;
        btn.textContent = '🎶';
        btn.classList.add('playing');
      }).catch(() => {});
    }, 1500);
  }
}
