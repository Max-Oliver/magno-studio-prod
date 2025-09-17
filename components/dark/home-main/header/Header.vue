<template>
  <header class="slider slider-prlx">
    <div class="swiper-container parallax-slider">
      <Swiper
        effect="Parallax"
        class="swiper-container parallax-slider"
        v-bind="swiperOptions"
      >
        <SwiperSlide>
          <div
            class="bg-img valign"
            data-background="/dark/assets/imgs/header/home-main/home-alta.jpg"
            data-overlay-dark="4"
          >
            <div class="container">
              <div class="caption text-center">
                <h2 class="mb-1" data-swiper-parallax="-2000">{{ t('heroSlides.s1.h2') }}</h2>

                <h1>
                  <span data-swiper-parallax="-1000">{{ t('heroSlides.s1.h1') }}</span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="bg-img valign"
            data-background="/dark/assets/imgs/header/full/3.jpg"
            data-overlay-dark="4"
          >
            <div class="container">
              <div class="caption text-center">
                <h2 class="mb-30" data-swiper-parallax="-2000">
                  {{ t('heroSlides.s2.h2') }}
                </h2>
                <h1>
                  <span data-swiper-parallax="-1000"> {{ t('heroSlides.s2.h1') }}</span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="bg-img valign"
            data-background="/dark/assets/imgs/header/full/4.jpg"
            data-overlay-dark="4"
          >
            <div class="container">
              <div class="caption text-center">
                <h2 class="mb-30" data-swiper-parallax="-2000">{{ t('heroSlides.s3.h2') }}</h2>
                <h1>
                  <span data-swiper-parallax="-1000">{{ t('heroSlides.s3.h1') }}</span>
                </h1>
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
        <svg
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-11 h-11"
        >
          <path
            d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
            fill="#1a1a1a"
          ></path>
        </svg>
      </div>
      <div class="shap-right-top">
        <svg
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-11 h-11"
        >
          <path
            d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
            fill="#1a1a1a"
          ></path>
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
//= Common Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

// Initialize background images when component is mounted
onMounted(() => {
  loadBackgroudImages();
});
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
