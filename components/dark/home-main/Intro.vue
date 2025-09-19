<template>
  <section class="intro section-padding position-re">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-6">
          <div class="cont">
            <h4 class="d-slideup wow">
              <span class="sideup-text">
                <span class="up-text">
                  {{ t('intro.headline_1') }}
                </span>
              </span>
              <span class="sideup-text">
                <span class="up-text">
                  {{ t('intro.headline_2') }}
                </span>
              </span>
              <span class="sideup-text">
                <span class="up-text">

                  <div class="flex flex-wrap inline-flex items-center gap-2">
                    <span class="">
                      <a href="/home/contact" class="cta-underline cta-with-arrow">
                        {{ t('intro.headline_cta') }}
                        <svg class="ico" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="#38bdf8" stroke-width="3"
                            stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </a>
                    </span>
                  </div>
                  <!-- Micro-confianza -->
                  <p class="mt-2 text-sm opacity-70">
                    {{ t('intro.headline_micro') }}
                  </p>
                </span>

              </span>
            </h4>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="text">
            <p>
              {{ t('intro.paragraph') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="line-overlay">
      <svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
          style="stroke-dasharray: 3246.53, 0"></path>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from '@/i18n';
const { t } = useI18n();

const headline = computed(() => t('intro.headline') as string[]);
const marquee = computed(() => t('intro.marquee') as string[]);
</script>

<style>
/* Azul de marca: cambiá a tu variable si ya la tenés */
:root {
  --brand: #38bdf8;
}

.cta-underline {
  --c: var(--brand);
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: .55rem;
  color: #fff;
  text-decoration: none;
  padding-bottom: 2px;
  cursor: pointer;
  transition: color .25s ease;
  background: linear-gradient(var(--c), var(--c)) left bottom/24% 2px no-repeat;
  /* “sembrada” */
}

.cta-underline:hover,
.cta-underline:focus-visible {
  color: var(--c);
  background-size: 100% 2px;
}

.cta-underline:active {
  color: var(--c);
  background-size: 100% 2px;
}

.cta-with-arrow .ico {
  width: 18px;
  height: 18px;
  transform: translateX(0);
  opacity: .85;
  transition: transform .22s ease, opacity .22s;
}

.cta-with-arrow:hover .ico,
.cta-with-arrow:focus-visible .ico {
  transform: translateX(4px);
  opacity: 1;
}

/* “nudge” suave cada tanto para indicar interacción */
@keyframes nudge {

  0%,
  92%,
  100% {
    transform: translateX(0)
  }

  96% {
    transform: translateX(3px)
  }
}

.cta-with-arrow .ico {
  animation: nudge 4.6s ease-in-out infinite;
}

/* foco accesible */
.cta-underline:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px color-mix(in oklab, var(--c) 35%, transparent);
}

/* mobile: sin hover, mantenemos pista con subrayado ya visible (24%) y reacción en tap */
@media (hover:none) {
  .cta-with-arrow .ico {
    animation: none;
  }

  /* evitar movimiento continuo en mobile si molesta */
}

/* sky-400/500 */

.cta-underline {
  --c: var(--brand);
  position: relative;
  display: inline-block;
  color: #fff;
  /* color de texto normal */
  text-decoration: none;
  padding-bottom: 2px;
  /* espacio para la barra */
  transition: color .25s ease;
  /* Barra como bg para que no mueva layout */
  background: linear-gradient(var(--c), var(--c)) left bottom / 0 2px no-repeat;
  /* ↑ inicia en 0% y 2px de grosor */
}

/* Hover/focus: llena la barra y tiñe el texto */
.cta-underline:hover,
.cta-underline:focus-visible {
  color: var(--c);
  background-size: 100% 2px;
}

/* Mobile tap (sin hover): respuesta inmediata */
.cta-underline:active {
  color: var(--c);
  background-size: 100% 2px;
}

/* Accesibilidad: foco visible */
.cta-underline:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px color-mix(in oklab, var(--c) 35%, transparent);
}

/* Variante más “marcada” (3px) — opcional */
.cta-underline.is-thick {
  background-size: 0 3px;
}

.cta-underline.is-thick:hover,
.cta-underline.is-thick:focus-visible,
.cta-underline.is-thick:active {
  background-size: 100% 3px;
}
</style>