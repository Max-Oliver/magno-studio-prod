<template>
  <section class="services-boxs section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">{{ t('portfolio.kicker') }}</h6>

        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600 text-u ls1">
            {{ t('portfolio.title_a') }}
            <span class="fw-200">{{ t('portfolio.title_b') }}</span>
          </h2>
        </div>
      </div>

      <div class="row pt-30">
        <div v-for="(item, i) in items" :key="i" class="col-lg-3 col-md-6 items">
          <div class="item-box bg md-mb50">
            <div class="icon mb-40 opacity-5">
              <img :src="item.img" alt="" />
            </div>

            <h5 class="mb-15 text-u">
              <template v-if="item.titleA && item.titleB">
                {{ item.titleA }} <br /> {{ item.titleB }}
              </template>
              <template v-else>
                {{ item.title }}
              </template>
            </h5>

            <p>{{ item.desc }}</p>

            <NuxtLink :to="item.link" class="rmore mt-30">
              <span class="sub-title">{{ t('servicesBoxes.read_more') }}</span>
              <img src="/dark/assets/imgs/arrow-right.png" alt="" class="icon-img-20 ml-5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from '@/i18n';
const { t } = useI18n();

type Item = {
  title?: string; titleA?: string; titleB?: string;
  img: string; desc: string; link: string;
};

const items = computed(() => t('servicesBoxes.list') as Item[]);
</script>

<style scoped>
/* Desktop: sin cambios, se mantiene el hover normal del theme */

/* ==== Mobile / Tablet: boxes siempre "abiertos" y sin superposición ==== */
@media (hover: none),
(pointer: coarse) {

  /* Estructura en flujo para evitar overlays */
  .services-boxs .item-box {
    display: flex;
    flex-direction: column;
    /* ajustá si necesitás más respiro */
    padding-bottom: 20px;
  }

  /* Reseteo de transforms y posiciones que dependían del :hover */
  .services-boxs .item-box .icon,
  .services-boxs .item-box h5,
  .services-boxs .item-box p,
  .services-boxs .item-box .rmore {
    transform: none !important;
  }

  /* Si el theme posiciona desc o CTA en absoluto, los traemos al flujo */
  .services-boxs .item-box p,
  .services-boxs .item-box .rmore {
    position: static !important;
  }

  /* Título con respiro para que no se pegue a la descripción */
  .services-boxs .item-box h5 {
    margin-bottom: 12px !important;
  }

  /* Descripción siempre visible y sin límites */
  .services-boxs .item-box p {
    opacity: 1 !important;
    visibility: visible !important;
    max-height: none !important;
    margin: 0 0 16px 0 !important;
    /* espacio bajo el texto */
  }

  /* CTA siempre visible y pegado al fondo de la card */
  .services-boxs .item-box .rmore {
    opacity: 1 !important;
    transform: none !important;
    margin-top: auto !important;
    /* empuja el CTA hacia abajo */
  }

  /* Si la card tenía overlays de hover, los apagamos */
  .services-boxs .item-box::before,
  .services-boxs .item-box::after {
    opacity: 0 !important;
  }

  /* Evita el "sticky hover" de iOS */
  .services-boxs .item-box:hover,
  .services-boxs .item-box:active {
    transform: none !important;
  }
}
</style>
