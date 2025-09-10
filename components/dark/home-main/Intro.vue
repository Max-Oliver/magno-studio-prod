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
                  {{ t('intro.headline_3') }}
                  <span class="underline">
                    <a href="/home/contact" class="main-color">{{ t('intro.headline_cta') }}</a>
                  </span>
                </span>
              </span>
            </h4>
            <div class="exp mt-80 md-mb15">
              <h2 class="">
                <span class="fz-70 numb-font main-color">
                  {{ t('intro.years_amount') }}
                </span>
                <span class="sub-title main-font opacity-7 ml-15">
                  {{ t('intro.years_label') }}
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="text">
            <p>
              {{ t('intro.paragraph') }}
            </p>
          </div>
          <div class="main-marq o-hidden mt-100">
            <div class="slide-har st1">
              <div class="box" v-for="n in 2" :key="n">
                <div class="item" v-for="(item, i) in marquee" :key="i">
                  <h4 class="d-flex align-items-center">
                    <span>{{ item }}</span>
                    <span class="fz-50 ml-50 stroke icon">*</span>
                  </h4>
                </div>
              </div>

            </div>
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