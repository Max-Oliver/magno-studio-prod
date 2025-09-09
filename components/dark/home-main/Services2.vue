<template>
  <section class="services section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">{{ t('services2.eyebrow') }}</h6>

        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600 d-rotate wow">
            <span class="rotate-text">
              {{ t('services2.title_a') }}
              <span class="fw-200">{{ t('services2.title_b') }}</span>
            </span>
          </h2>

          <div class="ml-auto">
            <div class="swiper-arrow-control">
              <div class="swiper-button-prev"><span class="ti-arrow-left"></span></div>
              <div class="swiper-button-next"><span class="ti-arrow-right"></span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- ⚠️ NADA de data-carousel/data-swiper y SIN clase .swiper-container -->
      <ClientOnly>
        <Swiper
          class="serv-swiper"
          :modules="[Navigation]"  
          :loop="true"
          :speed="600"
          :breakpoints="breakpoints"
          :navigation="{
            nextEl: '.swiper-arrow-control .swiper-button-next',
            prevEl: '.swiper-arrow-control .swiper-button-prev'
          }"
        >
          <SwiperSlide v-for="(item, i) in items.slice(0,4)" :key="i">
            <div class="item-box radius-15">
              <div class="icon mb-40 opacity-5"><img :src="item.img" alt="" /></div>
              <h5 class="mb-15">{{ item.title }}</h5>
              <p>{{ item.desc }}</p>
              <a :href="item.link" class="rmore mt-30">
                <span class="sub-title">{{ t('services2.read_more') }}</span>
                <img src="/dark/assets/imgs/arrow-right.png" alt="" class="icon-img-20 ml-5" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- (opcional) fallback SSR -->
        <template #fallback>
          <div class="row">
            <div class="col-md-4 mb-30" v-for="n in 3" :key="'sk-'+n">
              <div class="item-box radius-15">...</div>
            </div>
          </div>
        </template>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from '@/i18n';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';          // ✅ Swiper 10 (coincide con css bundle global)

// CSS ya lo cargas global en nuxt.config con 'swiper/css/bundle'

import enData from '@/data/services.en.json';
import esData from '@/data/services.esp.json';

const { t, current } = useI18n();
const items = computed(() => (current === 'es' ? esData : enData));

const breakpoints = {
  640:  { loop: true, slidesPerView: 1, spaceBetween: 20, centeredSlides: false },
  768:  { loop: true, slidesPerView: 2, spaceBetween: 50, centeredSlides: false },
  1000: { loop: true, slidesPerView: 3, spaceBetween: 50, centeredSlides: true  },
};
</script>
