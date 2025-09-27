<template>
  <header class="startup-header page-header-cerv-2" data-scroll-index="0">
    <div class="valign bg-img" data-background="/dark/assets/imgs/header/Header.jpg" data-overlay-dark="5">
      <div class="container">
        <div class="caption text-left">
          <h1 class="hero-title"
            :aria-label="`${t('heroSlides.s1.h2_static_prefix')} ${t('heroSlides.s1.h2_static_strong')}`">
            <span class="line line--normal" data-swiper-parallax="-1000">
              {{ t('heroSlides.s1.h2_static_prefix') }}
            </span>
            <span class="line line--bold mb-[20px]" data-swiper-parallax="-1000">
              {{ t('heroSlides.s1.h2_static_strong') }}
            </span>
          </h1>

          <div class="hero-sub" data-swiper-parallax="-800">
            <span>{{ t('heroSlides.s1.parrafo_1') }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';
import { useI18n } from '@/i18n';
const { t } = useI18n();

onMounted(() => {
  loadBackgroudImages();
});
</script>

<style scoped>
/* Altura y contexto del hero */
.startup-header .valign {
  position: relative !important;
  min-height: clamp(540px, 78vh, 960px);
  /* pegamos el contenido abajo-izquierda */
  display: flex !important;
  align-items: flex-end !important;
  justify-content: flex-start !important;
  /* padding-left: clamp(16px, 6vw, 96px); */
  padding-bottom: calc(clamp(24px, 8vh, 120px) + env(safe-area-inset-bottom, 0px));
}

/* Solo una franja al final del hero */
.page-header-cerv-2:after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 80%;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#1a1a1a),
    to(transparent)
  );
  background-image: -webkit-linear-gradient(bottom, #1a1a1a, transparent);
  background-image: -o-linear-gradient(bottom, #1a1a1a, transparent);
  background-image: linear-gradient(0deg, #1a1a1a, transparent);
  z-index: 2;
}

/* Elimina cualquier centrado del theme */
.startup-header .container {
  position: static !important;
}

.startup-header .caption {
  position: static !important;
  transform: none !important;
  text-align: left !important;
  margin: 0 !important;
  width: min(1100px, calc(100% - clamp(16px, 6vw, 96px)*2));
  z-index: 2;
}

/* Ajustes del texto (los tuyos) pueden quedar tal cual */
.hero-title {
  line-height: 1.08;
  letter-spacing: -0.01em;
  margin-bottom: 1.25rem;
  text-shadow: 0 2px 14px rgba(0, 0, 0, .35);
}

.hero-title .line {
  display: block;
}


:root {
  --hero-size: clamp(36px, 6vw, 64px);
}

/* ajustá a gusto */
.hero-title .line--normal,
.hero-title .line--bold {
  font-size: var(--hero-size);
}

/* Pesos: 1ª regular/light, 2ª bold */
.hero-title .line--normal {
  font-weight: 50;
}

/* o 400 si la querés más marcada */
.hero-title .line--bold {
  font-weight: 500;
  font-style: italic;
  margin-bottom: 40px;
}

/* bold */
.hero-title .line--normal {
  opacity: .95;
}

.hero-sub {
  max-width: 436px;
}

.hero-sub span {
  display: block;
  margin-top: .35rem;
  opacity: .88;
}

/* (opcional) esconder la bolita/paginación si viene del theme */
.swiper-pagination,
.dots,
.bullets {
  display: none !important;
}

@media (min-width: 758px) {
  .hero-hub {
    max-width: fit-content;
  }
}

/* Solo una franja al final del hero */
.page-header-cerv::after{
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: clamp(80px, 12vh, 220px);   /* <— banda, no todo el alto */
  pointer-events: none;
  z-index: 1;                         /* el texto por encima con z-index:2 */

  /* fade suave a #1a1a1a (o el color de la sección siguiente) */
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0) 0%,
    rgba(0,0,0,.45) 60%,
    #1a1a1a 100%
  );
}

.page-header-cerv{
  -webkit-mask-image: linear-gradient(to bottom, #000 60%, transparent 100%);
          mask-image: linear-gradient(to bottom, #000 60%, transparent 100%);
}
</style>