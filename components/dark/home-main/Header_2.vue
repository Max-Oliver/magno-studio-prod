<template>
  <header id="hero" class="header main-header bg-img" data-background="/dark/assets/imgs/header/bg1.jpg"
    data-overlay-dark="8">
    <div class="container pt-100">
      <div class="row justify-content-end">
        <div class="col-lg-6">
          <div class="text mb-100">
            <h4>
              {{ t('hero.paragraph') }}
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid ontop">
      <div class="container">
        <div class="lg-text">
          <div class="d-flex">
            <h6>{{ t('ribbons.left') }}</h6>
            <h6 class="ml-auto">{{ t('ribbons.right') }}</h6>
          </div>
          <h1>{{ t('hero.title') }}</h1>
          <p class="lead mt-15">{{ t('hero.subtitle') }}</p>
        </div>
      </div>
      <div class="img">
        <img src="/dark/assets/imgs/header/2.jpg" alt="" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import loadBackgroudImages from '@/common/loadBackgroudImages';
import { useI18n } from '@/i18n';
const { current, setLocale, t } = useI18n();

onMounted(() => {
  loadBackgroudImages();
});
</script>
