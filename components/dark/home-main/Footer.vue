<template>
  <footer class="footer" aria-labelledby="footer-heading">
    <div class="footer__overlay"></div>

    <div class="footer__container">
      <div class="footer__cta">
        <h2 id="footer-heading" class="footer__title">
          <a href="/contact" class="footer__titleLink">
            <span>Let’s Contact </span>
            <svg viewBox="0 0 24 24" class="footer__arrow">
              <path fill="currentColor" d="M5 19L19 5M19 5H9M19 5v10" />
            </svg>
          </a>
        </h2>
      </div>

      <div class="footer__grid">
        <div>
          <img
            src="/dark/assets/imgs/logo-light.png"
            alt="Magno Studio"
            class="footer__logo"
          />
        </div>

        <div>
          <h6 class="footer__label">Address</h6>
          <address class="footer__address">
            Miami Boulevard 2<br />Punta del Este, Uruguay
          </address>
        </div>

        <nav aria-label="Primary">
          <ul class="menu-col">
            <li><a class="u-underline is-active" href="/">Home</a></li>
            <li><a class="u-underline" href="/work">Work</a></li>
            <li><a class="u-underline" href="/studio">Studio</a></li>
          </ul>
        </nav>

        <nav aria-label="Social">
          <ul class="menu-col">
            <li>
              <a
                class="u-underline"
                href="https://instagram.com/magnocreative"
                target="_blank"
                rel="noreferrer"
                >Instagram</a
              >
            </li>
            <li>
              <a
                class="u-underline"
                href="https://behance.net/magnocreative"
                target="_blank"
                rel="noreferrer"
                >Behance</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
  // Si querés setear el bg desde data-attribute:
  const el = document.querySelector<HTMLElement>('.footer');
  if (el && el.dataset.bg) el.style.backgroundImage = `url('${el.dataset.bg}')`;
});
</script>

<style scoped>
.footer {
  position: relative;
  overflow: hidden;
  color: #fff;
  background: #000;
  background-image: url('/dark/assets/imgs/header/bg1.jpg');
  background-size: cover;
  background-position: center;
}
.footer__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  pointer-events: none;
}
.footer__container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 2.5rem;
}
.footer__cta {
  padding-bottom: 4rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.footer__title {
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.02em;
  font-size: 56px;
}
@media (min-width: 640px) {
  .footer__title {
    font-size: 72px;
  }
}
@media (min-width: 768px) {
  .footer__title {
    font-size: 96px;
  }
}
@media (min-width: 1024px) {
  .footer__title {
    font-size: 120px;
  }
}
.footer__titleLink {
  display: inline-flex;
  align-items: center;
  gap: 1.25rem;
}
.footer__arrow {
  width: 2.5rem;
  height: 2.5rem;
  transition: transform 0.25s ease;
}
.footer__titleLink:hover .footer__arrow {
  transform: translate(4px, -4px);
}

.footer__grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}
@media (min-width: 1024px) {
  .footer__grid {
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
  }
  .footer__grid > div:nth-child(1) {
    grid-column: span 3;
  }
  .footer__grid > div:nth-child(2) {
    grid-column: span 4;
  }
  .footer__grid nav:nth-of-type(1) {
    grid-column: 9 / span 2;
  }
  .footer__grid nav:nth-of-type(2) {
    grid-column: 11 / span 2;
  }
}

.footer__logo {
  width: 7rem;
  opacity: 0.9;
}
.footer__label {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 0 1rem;
}
.footer__address {
  font-style: normal;
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.3;
}

.footer__list {
  list-style: none;
  
  margin: 0;
  padding: 0;
}
.footer__list a {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: opacity 0.2s;
}
.footer__list a:hover {
  opacity: 1;
}

.footer__bar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 3rem;
  padding-top: 1rem;
}
@media (min-width: 768px) {
  .footer__bar {
    flex-direction: row;
  }
}
.footer__social {
  display: flex;
  gap: 1.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
}
.footer__social a {
  color: rgba(255, 255, 255, 0.7);
  transition: opacity 0.2s;
}
.footer__social a:hover {
  opacity: 1;
}
.footer__copy {
  margin-left: auto;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
}
</style>
