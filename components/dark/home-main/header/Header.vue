<template>
  <header class="slider slider-prlx">
    <div class="swiper-container parallax-slider">
      <Swiper effect="Parallax" class="swiper-container parallax-slider" v-bind="swiperOptions"
        @slideChange="onSlideChange">
        <SwiperSlide>
          <div class="bg-img valign" data-background="/dark/assets/imgs/header/home-main/home-alta.jpg"
            data-overlay-dark="4">
            <div class="container">
              <div class="caption text-center">
                <h1 class="hero-title">
                  <span class="line line--normal" data-swiper-parallax="-1000">
                    {{ t('heroSlides.s1.h2') }}
                  </span>

                  <span class="line line--bold typed-caret" v-typed-loop="{
                    words: 'Tu presencia digital|Tu marca|Tu Producto',
                    speed: 55, backSpeed: 40, backDelay: 1200, startDelay: 150, loop: true
                  }" data-swiper-parallax="-1000"></span>

                  <span class="line line--italic" data-swiper-parallax="-1000">
                    {{ t('heroSlides.s1.h1_suffix') }}
                  </span>
                </h1>

                <div class="hero-sub" data-swiper-parallax="-800">
                  <span>{{ t('heroSlides.s1.parrafo_1') }}</span>
                  <span>{{ t('heroSlides.s1.parrafo_2') }}</span>
                  <span>{{ t('heroSlides.s1.parrafo_3') }}</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg-img valign" data-background="/dark/assets/imgs/header/full/3.jpg" data-overlay-dark="4">
            <div class="container">
              <div class="caption text-center">
                <h1 class="hero-title">
                  <span class="line line--normal" data-swiper-parallax="-1000">
                    {{ t('heroSlides.s1.h2') }}
                  </span>

                  <span class="line line--bold typed-caret" v-typed-loop="{
                    words: 'Tu presencia digital|Tu marca|Tu Producto',
                    speed: 55, backSpeed: 40, backDelay: 1200, startDelay: 150, loop: true
                  }" data-swiper-parallax="-1000"></span>

                  <span class="line line--italic" data-swiper-parallax="-1000">
                    {{ t('heroSlides.s1.h1_suffix') }}
                  </span>
                </h1>

                <div class="hero-sub" data-swiper-parallax="-800">
                  <span>{{ t('heroSlides.s1.parrafo_1') }}</span>
                  <span>{{ t('heroSlides.s1.parrafo_2') }}</span>
                  <span>{{ t('heroSlides.s1.parrafo_3') }}</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg-img valign" data-background="/dark/assets/imgs/header/full/b5.jpg" data-overlay-dark="4">
            <div class="container">
              <div class="caption text-center">
                <h1 class="hero-title">
                  <span class="line line--normal" data-swiper-parallax="-1000">
                    {{ t('heroSlides.s1.h2') }}
                  </span>

                  <span class="line line--bold typed-caret" v-typed-loop="{
                    words: 'Tu presencia digital|Tu marca|Tu Producto',
                    speed: 55, backSpeed: 40, backDelay: 1200, startDelay: 150, loop: true
                  }" data-swiper-parallax="-1000"></span>

                  <span class="line line--italic" data-swiper-parallax="-1000">
                    {{ t('heroSlides.s1.h1_suffix') }}
                  </span>
                </h1>

                <div class="hero-sub" data-swiper-parallax="-800">
                  <span>{{ t('heroSlides.s1.parrafo_1') }}</span>
                  <span>{{ t('heroSlides.s1.parrafo_2') }}</span>
                  <span>{{ t('heroSlides.s1.parrafo_3') }}</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
    <div class="slider-contro main-bg">
      <div class="swiper-button-prev swiper-nav-ctrl cursor-pointer">
        <div>
          <span>{{ t('heroSlides.prev') }}</span>
        </div>
      </div>
      <div class="ml-30 mr-30">
        <span>/</span>
      </div>
      <div class="swiper-button-next swiper-nav-ctrl cursor-pointer">
        <div>
          <span>{{ t('heroSlides.next') }}</span>
        </div>
      </div>

      <div class="shap-left-bottom">
        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
          <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
            fill="#1a1a1a"></path>
        </svg>
      </div>
      <div class="shap-right-top">
        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
          <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
            fill="#1a1a1a"></path>
        </svg>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </header>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Parallax } from 'swiper';
import { onMounted } from 'vue';
import { useI18n } from '@/i18n';

const { t } = useI18n();
import typedLoop from '@/common/typed'            // ⬅️ directiva
const vTypedLoop = typedLoop                              // ⬅️ registro local

//= Common Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

// Initialize background images when component is mounted
onMounted(() => {
  loadBackgroudImages();
});

function onSlideChange(e) {
  const active = e.slides[e.activeIndex]
  const el = active?.querySelector('.typed-caret')
  if (el?.__typedLoop__?.start) {
    el.__typedLoop__.stop?.()
    el.__typedLoop__.start()
  }
}

const swiperOptions = {
  modules: [Navigation, Parallax, Pagination],

  spaceBetween: 30,
  speed: 600,
  navigation: {
    nextEl: '.slider-contro .swiper-button-next',
    prevEl: '.slider-contro .swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
};
</script>

<style scoped>
/* Título compuesto en 3 líneas */
.hero-title {
  display: grid;
  gap: .18em;
  justify-items: center;
  text-align: center;
  line-height: 1.04;
  text-wrap: balance;
  /* mejora saltos en 2-3 líneas en navegadores modernos */
  margin: 0 auto;
}

.hero-title .line {
  display: block;
}

/* jerarquía visual */
.hero-title .line--normal {
  font-weight: 400;
  letter-spacing: .02em;
  opacity: .92;
}

.hero-title .line--bold {
  font-weight: 850;
  /* más punch */
  letter-spacing: .004em;
}

/* italic con punch, pero un toque menos grande que la bold */
.hero-title .line--italic {
  font-style: italic;
  font-weight: 700;
}

/* tamaños responsive “referencia” */
@media (min-width: 1024px) {
  .hero-title .line--normal {
    font-size: clamp(28px, 2.6vw, 44px);
  }

  .hero-title .line--bold {
    font-size: clamp(48px, 7.8vw, 116px);
  }

  .hero-title .line--italic {
    font-size: clamp(34px, 3.8vw, 60px);
  }
}

@media (max-width: 1023.98px) {
  .hero-title .line--normal {
    font-size: clamp(18px, 4.8vw, 26px);
  }

  .hero-title .line--bold {
    font-size: clamp(32px, 10vw, 56px);
  }

  .hero-title .line--italic {
    font-size: clamp(22px, 6vw, 32px);
  }
}

/* glow muy suave para legibilidad sobre fondos con ruido */
.hero-title .line {
  text-shadow: 0 0 24px rgba(0, 0, 0, .28), 0 1px 0 rgba(0, 0, 0, .18);
}

/* párrafo bajo el h1 */
.hero-sub {
  display: grid;
  gap: .25rem;
  margin: 18px auto 0;
  max-width: min(920px, 86vw);
  /* acotar ancho de lectura */
  font-size: clamp(13px, 1.6vw, 18px);
  line-height: 1.55;
  opacity: .88;
  text-wrap: pretty;
}

/* cursor del typing */
.typed-caret::after {
  content: '▍';
  margin-left: .08em;
  display: inline-block;
  animation: blink 1s steps(1) infinite;
  opacity: .9;
}

@keyframes blink {
  50% {
    opacity: 0
  }
}


.hero-title .line {
  display: block;
}

/* pesos por línea */
.hero-title .line--normal {
  font-weight: 400;
  opacity: .95;
}

.hero-title .line--bold {
  font-weight: 800;
  letter-spacing: .2px;
}

.hero-title .line--italic {
  font-style: italic;
  font-weight: 700;
}

/* tamaños responsivos */
@media (min-width: 1024px) {
  .hero-title .line--normal {
    font-size: clamp(24px, 2.6vw, 44px);
  }

  .hero-title .line--bold {
    font-size: clamp(42px, 7.5vw, 112px);
  }

  .hero-title .line--italic {
    font-size: clamp(28px, 3.5vw, 56px);
  }
}

@media (max-width: 1024px) {
  .hero-title .line--normal {
    font-size: clamp(18px, 4.5vw, 26px);
  }

  .hero-title .line--bold {
    font-size: clamp(30px, 10vw, 52px);
  }

  .hero-title .line--italic {
    font-size: clamp(20px, 5.5vw, 28px);
  }
}

/* caret (cursor) */
.typed-caret {
  position: relative;
}

.typed-caret::after {
  content: "";
  display: inline-block;
  width: clamp(2px, 0.05em, 3px);
  height: 0.92em;
  background: currentColor;
  margin-left: clamp(1px, 0.04em, 4px);
  vertical-align: -0.08em;
  border-radius: 1px;

  animation: caretBlinkQuick .9s infinite;
  will-change: opacity;
  backface-visibility: hidden;
}

@keyframes caretBlinkQuick {

  0%,
  48%,
  100% {
    opacity: 1;
  }

  /* mayor parte encendido */
  50%,
  60% {
    opacity: 0;
  }

  /* apagado corto, sin “grises” */
}
</style>