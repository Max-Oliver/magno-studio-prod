<template>
  <section class="skills-img-crev pb-50">
    <div class="container">
      <div class="row justify-content-between">
        <!-- Video / Imagen -->
        <div class="col-lg-4 offset-lg-1 valign">
          <div class="img md-mb80">
            <div class="rotate-butn-vid">
              <a href="https://youtu.be/AzwC6umvd1s" class="vid d-flex align-items-center">
                <div class="icon">
                  <i class="fas fa-play main-color"></i>
                </div>
                <span class="sub-title ml-15">{{ t('servicesIntro.watch') }}</span>
              </a>
            </div>
            <img src="/dark/assets/imgs/intro/04.jpg" alt="" class="radius-30" />
          </div>
        </div>

        <!-- Contenido -->
        <div class="col-lg-6 valign">
          <div class="content full-width">
            <div class="sec-head mb-50">
              <h6 class="sub-title mb-15 main-color">{{ t('servicesIntro.why') }}</h6>

              <h2 class="d-slideup wow">
                <span class="sideup-text">
                  <span class="up-text">{{ titleLines[0] }}</span>
                </span>
                <span class="sideup-text">
                  <span class="up-text">{{ titleLines[1] }}</span>
                </span>
              </h2>
            </div>

            <div class="row justify-content-end">
              <div class="col-lg-11">
                <div class="text">
                  <p>{{ t('servicesIntro.paragraph') }}</p>
                </div>

                <div class="row mt-50 pt-50 bord-thin-top">
                  <!-- Proyectos -->
                  <div class="col-sm-6">
                    <div class="item d-flex align-items-center sm-mb30">
                      <h2 class="fz-60 line-height-1">
                        <span class="numb-count">{{ stats.projects_value }}</span>
                      </h2>
                      <span class="sub-title opacity-7 ml-30">
                        {{ stats.projects_label[0] }} <br />
                        {{ stats.projects_label[1] }}
                      </span>
                    </div>
                  </div>

                  <!-- Satisfacción -->
                  <div class="col-sm-6">
                    <div class="item d-flex align-items-center">
                      <h2 class="fz-60 line-height-1">
                        <span class="numb-count">{{ stats.satisfaction_value }}</span>{{ stats.satisfaction_unit }}
                      </h2>
                      <span class="sub-title opacity-7 ml-30">
                        {{ stats.satisfaction_label[0] }} <br />
                        {{ stats.satisfaction_label[1] }}
                      </span>
                    </div>
                  </div>
                </div><!-- /row stats -->
              </div>
            </div>

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

const titleLines = computed(() => t('servicesIntro.titleLines') as string[]);
const stats = computed(() => t('servicesIntro.stats') as {
  projects_value: number;
  projects_label: string[];
  satisfaction_value: number;
  satisfaction_unit: string;
  satisfaction_label: string[];
});
</script>
