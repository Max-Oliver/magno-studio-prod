<template>
  <div class="slider-sec">
    <div class="sec-head ml-60 mr-60 mb-80">
      <h6 class="sub-title main-color mb-10">{{ t('slider.eyebrow') }}</h6>
      <div class="d-flex align-items-center">
        <h2 class="fw-600">
          {{ t('slider.tittle') }}
        </h2>

      </div>
      <p v-if="t('slider.subcopy')" class="mt-12 opacity-70">
        {{ t('slider.subcopy') }}
      </p>
      <div class="bord mt-10 pb-0 bord-thin-top d-flex align-items-center" />
    </div>

    <header class="header half-slider">
      <div class="gallery-img">
        <div class="swiper-container">
          <Swiper v-bind="swiperGalleryImageOptions">
            <SwiperSlide>
              <div class="bg-img" data-bg-desktop="/dark/assets/imgs/portfolio-slider/beru/beru.jpg"
                data-bg-mobile="/dark/assets/imgs/portfolio-slider/beru/beru.jpg" data-overlay-dark="6">
                <a href="/home/works"></a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="bg-img" data-bg-desktop="/dark/assets/imgs/portfolio-slider/urban-code/desktop/slider-2.jpg"
                data-bg-mobile="/dark/assets/imgs/portfolio-slider/urban-code/mobile/mock-2.jpg" data-overlay-dark="3">
                <a href="/home/works"></a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="bg-img" data-bg-desktop="/dark/assets/imgs/portfolio-slider/beru/beru-web.jpg"
                data-bg-mobile="/dark/assets/imgs/portfolio-slider/beru/beru-web.jpg" data-overlay-dark="3">
                <a href="/home/works"></a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="bg-img" data-bg-desktop="/dark/assets/imgs/portfolio-slider/pachu/Desktop/slider.jpg"
                data-bg-mobile="/dark/assets/imgs/portfolio-slider/pachu/Mobile/fachada-1.jpg" data-overlay-dark="4">
                <a href="/home/works"></a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="bg-img" data-bg-desktop="/dark/assets/imgs/portfolio-slider/esteña/desktop/feed-desktop.jpg"
                data-bg-mobile="/dark/assets/imgs/portfolio-slider/esteña/mobile/full-feed.jpg" data-overlay-dark="6">
                <a href="/home/works"></a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div class="gallery-text">
        <div class="swiper-container">
          <Swiper v-bind="swiperGalleryTextOptions"
            class="swiper-container swiper-container-initialized swiper-container-horizontal">
            <SwiperSlide>
              <div class="text cursor-pointer">
                <h6>
                  <span>{{ t('works.one_subtitle') }}</span>
                </h6>
                <h4 class="f-bold">{{ t('works.one_title') }}</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="text cursor-pointer">
                <h6>
                  <span>{{ t('works.two_subtitle') }}</span>
                </h6>
                <h4 class="f-bold">{{ t('works.two_title') }}</h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="text cursor-pointer">
                <h6>
                  <span>{{ t('works.three_subtitle') }}</span>
                </h6>
                <h4 class="f-bold">{{ t('works.three_title') }}</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="text cursor-pointer">
                <h6>
                  <span>{{ t('works.four_subtitle') }}</span>
                </h6>
                <h4 class="f-bold">{{ t('works.four_title') }}</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="text cursor-pointer">
                <h6>
                  <span>{{ t('works.five_subtitle') }}</span>
                </h6>
                <h4 class="f-bold">{{ t('works.five_title') }}</h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div class="swiper-controls">
        <div class="swiper-button-next swiper-nav-ctrl cursor-pointer">
          <div>
            <span>{{ t('works.next') }}</span>
          </div>
          <div>
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
        <div class="swiper-button-prev swiper-nav-ctrl cursor-pointer">
          <div>
            <i class="fas fa-chevron-left"></i>
          </div>
          <div>
            <span>{{ t('works.prev') }}</span>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </header>
  </div>
</template>

<script setup>
import data from '@/data/portfolios/worksfull.json';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import { ref, onMounted, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Keyboard, Mousewheel, Pagination, Thumbs } from 'swiper';
import { useI18n } from '@/i18n';

const { t } = useI18n();

onMounted(() => {
  loadBackgroudImages();
});

const galleryImg = ref(null);
const galleryText = ref(null);
function setGallaryText(swiper) {
  galleryText.value = swiper;
}
function setGallaryImg(swiper) {
  galleryImg.value = swiper;
}
const swiperGalleryTextOptions = {
  modules: [Mousewheel, Thumbs],
  spaceBetween: 100,
  centeredSlides: true,
  onSwiper(swiper) {
    galleryText.value = swiper;
  },
  slidesPerView: 2,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  loopedSlides: 4,
  mousewheel: true,
  speed: 1500,
  breakpoints: {
    0: {
      spaceBetween: 10,
      slidesPerView: 1,
      centeredSlides: false,
    },
    640: {
      spaceBetween: 30,
      slidesPerView: 1,
      centeredSlides: false,
    },
    768: {
      spaceBetween: 50,
      slidesPerView: 1,
      centeredSlides: false,
    },
    1024: {
      spaceBetween: 100,
      slidesPerView: 2,
      centeredSlides: true,
    },
  },
  thumbs: {
    swiper: galleryImg.value,
  },
};

const swiperGalleryImageOptions = {
  modules: [Navigation, Keyboard, Mousewheel, Pagination, Thumbs],
  onSwiper(swiper) {
    galleryImg.value = swiper;
  },
  spaceBetween: 0,
  centeredSlides: true,
  loopedSlides: 4,
  mousewheel: true,
  speed: 1500,
  navigation: {
    nextEl: '.half-slider .swiper-controls .swiper-button-next',
    prevEl: '.half-slider .swiper-controls .swiper-button-prev',
  },
  pagination: {
    el: '.half-slider .swiper-pagination',
    clickable: true,
    renderBullet: function (_, className) {
      return (
        '<span class="' +
        className +
        '">' +
        '<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">' +
        '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"' +
        'stroke-opacity="1" stroke-width="1px"></circle>' +
        '<circle cx="8" cy="8" r="3" fill="#FFF"></circle>' +
        '</svg></span>'
      );
    },
  },
  keyboard: {
    enabled: true,
  },
  thumbs: {
    swiper: galleryText.value,
  },
};

watch([galleryImg, galleryText], () => {
  if (galleryImg.value && galleryText.value) {
    galleryImg.value.on('slideChangeTransitionStart', function () {
      galleryText.value.slideTo(galleryImg.value.activeIndex);
    });
    galleryText.value.on('transitionStart', function () {
      galleryImg.value.slideTo(galleryText.value.activeIndex);
    });
  }
});
</script>

<style scoped>
/* Mobile: ≤ 640px */
@media (max-width: 640px) {
  .slider-sec .sec-head {
    margin-left: 15px !important;
    margin-right: 15px !important;
    margin-bottom: 48px !important;
  }

  .slider-sec .sec-head h2 {
    font-size: clamp(28px, 7vw, 36px);
    line-height: 1.15;
  }

  .slider-sec .sec-head .sub-title {
    margin-bottom: 8px;
  }

  .slider-sec .sec-head .bord {
    margin-top: 12px;
  }
}

/* XS extra apretado */
@media (max-width: 380px) {
  .slider-sec .sec-head {
    margin-left: 12px !important;
    margin-right: 12px !important;
  }
}
</style>