<template>
  <header class="startup-header" data-scroll-index="0">
    <div
      class="valign bg-img"
      data-background="/dark/assets/imgs/background/1.jpg"
      data-overlay-dark="5"
    >
      <div class="container pt-40">
        <div class="caption">
          <div class="lg-text fw-600">
            <div class="text d-flex align-items-center">
              <span>{{ t('hero.line_1') }}</span>
            </div>
            <div class="text">{{ t('hero.line_2') }}</div>
            <div class="text">{{ t('hero.line_3') }}</div>
          </div>
          <p>
            {{ t('hero.paragraph') }}
          </p>
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
