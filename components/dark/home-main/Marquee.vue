<template>
  <section>
    <div class="main-marq xlrg mb-50 mt-50 o-hidden">
      <div class="slide-har st1">
        <div class="box">
          <div class="item">
            <h4 class="d-flex align-items-center">
              <span>{{ t('marquee.item_mvp') }}</span>
              <span class="fz-50 ml-50 stroke icon">*</span>
            </h4>
          </div>
          <div class="item">
            <h4 class="d-flex align-items-center">
              <span>{{ t('marquee.item_amazing') }}</span>
              <span class="fz-50 ml-50 stroke icon">*</span>
            </h4>
          </div>
          <div class="item">
            <h4 class="d-flex align-items-center">
              <span>{{ t('marquee.item_visual_identity') }}</span>
              <span class="fz-50 ml-50 stroke icon">*</span>
            </h4>
          </div>
          <div class="item">
            <h4 class="d-flex align-items-center">
              <span>{{ t('marquee.item_branding') }}</span>
              <span class="fz-50 ml-50 stroke icon">*</span>
            </h4>
          </div>
          <div class="item">
            <h4 class="d-flex align-items-center">
              <span>{{ t('marquee.item_saas') }}</span>
              <span class="fz-50 ml-50 stroke icon">*</span>
            </h4>
          </div>
          <div class="item">
            <h4 class="d-flex align-items-center">
              <span>{{ t('marquee.item_web_dev') }}</span>
              <span class="fz-50 ml-50 stroke icon">*</span>
            </h4>
          </div>

          <div class="item">
            <h4 class="d-flex align-items-center">
              <span>{{ t('marquee.item_ai') }}</span>
              <span class="fz-50 ml-50 stroke icon">*</span>
            </h4>
          </div>
          <div class="item">
            <h4 class="d-flex align-items-center">
              <span>{{ t('marquee.item_ai_agents') }}</span>
              <span class="fz-50 ml-50 stroke icon">*</span>
            </h4>
          </div>
          <div class="item">
            <h4 class="d-flex align-items-center">
              <span>{{ t('marquee.item_ai_automation') }}</span>
              <span class="fz-50 ml-50 stroke icon">*</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { useI18n } from '@/i18n';
const { t } = useI18n();
</script>