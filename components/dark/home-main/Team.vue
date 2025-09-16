<template>
  <section class="team section-padding">
    <div class="container container-bottom">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">{{ t('team.kicker') }}</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600 d-rotate wow">
            <span class="rotate-text">
              {{ t('team.title_a') }} <span class="fw-200">{{ t('team.title_b') }}</span>
            </span>
          </h2>
          <div class="ml-auto">
            <a href="#" class="go-more">
              <span class="text">{{ t('team.cta') }}</span>
              <span class="icon ti-arrow-top-right"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item, i) in data" :key="i" class="col-lg-4">
          <div class="item md-mb50">
            <div class="img">
              <img :src="item.img" alt="" class="size_images" />
              <div class="info">
                <span class="fz-12">{{ item.subName }}</span>
                <h6 class="fz-18">{{ item.name }}</h6>
              </div>
            </div>
            <div class="social">
              <div class="links">
                <a href="#0">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="#0">
                  <i class="fab fa-medium"></i>
                </a>
                <a href="#0">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/data/team.json';
import { useI18n } from '@/i18n';
const { t } = useI18n();

</script>

<style>

.container-bottom {
 margin-bottom: -50px;
}
.size_images {
  height: 450px;
}

/* ----- MOBILE / TOUCH ----- */
@media (hover: none),
(pointer: coarse) {

  /* Nombre SIEMPRE visible en mobile */
  .team .item .info {
    opacity: 1 !important;
    transform: none !important;
    pointer-events: auto;
  }

  /* Redes: ocultas por defecto (conservando su layout original) */
  .team .item .social {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    /* NO tocamos transform/posiciones para no romper el diseño original */
  }

  /* Al tocar (focus dentro de la card) se muestran las redes */
  .team .item:focus-within .social,
  .team .item .social {
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
    /* Si tu CSS original usa display:none, descomenta una de estas líneas: */
    /* display: block !important; */
    /* display: flex !important;  */
  }

  /* Ajuste opcional de altura en mobile */
  .size_images {
    height: 360px;
  }
}
</style>