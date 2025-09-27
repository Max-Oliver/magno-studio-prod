<template>
  <header
    class="header page-header-cerv bg-img section-padding"
    data-background="/dark/assets/imgs/header/Header.jpg"
    data-overlay-dark="4"
  >
    <div class="container pt-100">
      <div class="text-center">
        <h1 class="fz-70">{{ t('tab_contact.header.title') }}</h1>
        <div class="mt-15">
          <a href="/">{{ t('tab_contact.header.tab_a') }}</a>
          <span class="padding-rl-20">|</span>
          <span class="main-color">{{ t('tab_contact.header.tab_b') }}</span>
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
