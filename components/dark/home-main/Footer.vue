<template>
  <footer class="footer" aria-labelledby="footer-heading">
    <!-- overlay del patrón -->
    <div class="footer__pattern" aria-hidden="true"></div>
    <div class="footer__cap" aria-hidden="true"></div> <!-- NUEVO: capa de recorte curvo -->


    <div class="footer__container">
      <div class="sec-head">
        <h6 class="sub-title main-color mb-25">{{ t('footer.cta_subtitle') }}</h6>
        <div class="bord pt-10 bord-thin-top d-flex align-items-center">

        </div>
      </div>
      <div class="footer__cta">
        <h2 id="footer-heading" class="footer__title">
          <a :href="whatsappUrl" class="footer__titleLink u-underline-2 ">
            <span>{{ t('footer.cta_title') }}</span>
            <span class="fz-70 ti-arrow-top-right fab-ping"></span>
          </a>
        </h2>
      </div>

      <div class="footer__grid">
        <div>
          <img src="/dark/assets/imgs/logo-light.png" alt="Magno Studio" class="footer__logo" />
        </div>

        <div>
          <h6 class="footer__label">{{ t('footer.address_label') }}</h6>
          <address class="footer__address">
            {{ t('footer.address_line1') }}<br />{{ t('footer.address_line2') }}
          </address>
        </div>

        <nav :aria-label="t('footer.aria_primary')">
          <ul class="menu-col">
            <li><a class="u-underline is-active" href="/">{{ t('links.home') }}</a></li>
            <li><a class="u-underline" href="/home/works">{{ t('links.work') }}</a></li>
            <li><a class="u-underline" href="/home/contact">{{ t('links.contact') }}</a></li>
          </ul>
        </nav>

        <nav :aria-label="t('footer.aria_social')">
          <ul class="menu-col">
            <li>
              <i class="fab fa-instagram mr-10"></i>
              <a class="u-underline" href="https://www.instagram.com/magnocreativee/" target="_blank" rel="noreferrer">
                {{ t('social.instagram') }}
              </a>
            </li>
            <li>
              <i class="fab fa-facebook mr-10"></i>
              <a class="u-underline" href="https://www.facebook.com/people/MagnoStudio/61579703818795/" target="_blank"
                rel="noreferrer">
                {{ t('social.behance') }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useI18n } from '@/i18n';

import { useWhatsapp } from '../../../common/useWhatsapp'

const props = withDefaults(defineProps<{
  number?: string,
  text?: string
}>(), {})


const { buildUrl } = useWhatsapp()
const whatsappUrl = computed(() => buildUrl(props.number, props.text))

const { t } = useI18n();

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
  background-color: #1a1a1a;

}

.footer__container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 2.5rem;
  padding-top: 2.5rem;

  /* por encima del overlay */
}

/* ping del FAB (define una clase en tu botón flotante si podés) */
@keyframes fabPulse {
  0%   { transform: scale(1); box-shadow: 0 0 0 0 rgba(37,211,102,.5); }
  70%  { transform: scale(1.06); box-shadow: 0 0 0 12px rgba(37,211,102,0); }
  100% { transform: scale(1); }
}
.fab-ping{
  animation: fabPulse .7s ease-out;
}


@media (max-width: 1024px) {
  .footer__pattern {
    --y: 92%;
    --s1: 34%;
    --s2: 50%;
    --s3: 64%;
  }
}

@media (max-width: 640px) {
  .footer__pattern {
    --y: 95%;
    --s1: 30%;
    --s2: 44%;
    --s3: 58%;
  }
}

/* Glow (tu patrón) */
.footer__pattern {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  --y: 150%;
  /* centro vertical del glow */
  --s1: 34%;
  /* radios de los halos */
  --s2: 80%;
  --s3: 84%;
  background:
    radial-gradient(ellipse at 50% var(--y), rgba(70, 85, 110, .50) 0%, transparent var(--s1)),
    radial-gradient(ellipse at 50% var(--y), rgba(0, 8, 255, 0.4) 0%, transparent var(--s2)),
    radial-gradient(ellipse at 50% var(--y), rgba(181, 184, 208, .30) 0%, transparent var(--s3));
  background-repeat: no-repeat;
}

/* NUEVO: tapa con ventana radial para que el borde sea curvo */
.footer__cap {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  /* mismo color de fondo que el footer para “tapar” la parte superior */
  background: #1a1a1a;

  /* Control de la ventana (curva) */
  --capY: 200%;
  /* altura del centro de la ventana (más bajo = 60–65%) */
  --capR: 70%;
  /* radio base de la ventana */
  --feather: 130px;
  /* suavizado del borde */

  /* Máscara radial: centro TRANSPARENTE (deja ver el glow), exterior OPACO (cubre) */
  -webkit-mask-image: radial-gradient(circle at 50% var(--capY),
      transparent 0 var(--capR),
      rgba(0, 0, 0, 0.6) calc(var(--capR) + var(--feather)*0.5),
      rgba(0, 0, 0, 1) calc(var(--capR) + var(--feather)) 100%);
  mask-image: radial-gradient(circle at 50% var(--capY),
      transparent 0 var(--capR),
      rgba(0, 0, 0, 0.6) calc(var(--capR) + var(--feather)*0.5),
      rgba(0, 0, 0, 1) calc(var(--capR) + var(--feather)) 100%);
}

.footer::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: url("data:image/svg+xml;utf8,\ <svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'>\ <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0 0.015 0'/></feComponentTransfer></filter>\ <rect width='100%' height='100%' filter='url(#n)'/></svg>");
  mix-blend-mode: soft-light;
  opacity: .35;
}

.footer__cta {
  text-align: center;
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
  transform: translate(4px,-4px) rotate(6deg);
  transition: transform .25s ease;
  color: dodgerblue
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

  .footer__grid>div:nth-child(1) {
    grid-column: span 3;
  }

  .footer__grid>div:nth-child(2) {
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
