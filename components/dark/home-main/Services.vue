<template>
  <section class="services-tab">
    <div class="container">
      <div class="row lg-marg" id="tabs">
        <!-- Paneles -->
        <div class="col-lg-6 valign">
          <div class="serv-tab-cont md-mb0">
            <div v-for="(tab, idx) in tabs" :key="`panel-${idx}`" class="tab-content"
              :class="{ current: idx === active }" v-show="idx === active">
              <div class="item">
                <div class="img">
                  <img :src="tab.img" alt="" />
                </div>
                <div class="cont sub-bg">
                  <div class="icon-img-60 mb-40">
                    <img :src="tab.icon" alt="" />
                  </div>
                  <div class="text">
                    <p>{{ tab.text }}</p>
                  </div>
                  <NuxtLink to="/home/works" class="mt-30">
                    <span class="mr-15">{{ t('servicesTabs.cta') }}</span>
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tabs (hover) -->
        <div class="col-lg-6 valign">
          <div class="serv-tab-link tab-links full-width pt-40">
            <div class="sec-head mb-30">
              <h6 class="sub-title mb-15 main-color">{{ t('servicesTabs.eyebrow') }}</h6>
              <h2>{{ t('servicesTabs.title') }}</h2>
            </div>

            <div class="row justify-content-end">
              <div class="col-lg-11">
                <div class="text mb-50">
                  <p>{{ t('servicesTabs.intro') }}</p>
                </div>

                <ul class="rest" role="tablist" aria-label="Services tabs">
                  <li v-for="(tab, idx) in tabs" :key="`link-${idx}`" class="item-link mb-15"
                    :class="{ current: idx === active }" role="presentation" @mouseenter="hoverTab(idx)"
                    @mouseleave="cancelHover" @focus="hoverTab(idx)" @blur="cancelHover" @click="active = idx">
                    <h3 role="tab" :aria-selected="idx === active" :aria-controls="`panel-${idx}`" tabindex="0"
                      class="tab-title">
                      <span class="fz-18 opacity-7 mr-15">{{ tab.num }}</span>
                      {{ tab.label }}
                    </h3>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
        <!-- /Tabs -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from '@/i18n';

const { t } = useI18n();

type TabItem = { num: string; label: string; img: string; icon: string; text: string };
const tabs = computed(() => t('servicesTabs.tabs') as TabItem[]);

const active = ref(0);
const hoverTimer = ref<ReturnType<typeof setTimeout> | null>(null);

// Cambia por hover con pequeño delay (suave)
function hoverTab(idx: number) {
  if (hoverTimer.value) clearTimeout(hoverTimer.value);
  hoverTimer.value = setTimeout(() => (active.value = idx), 120);
}
function cancelHover() {
  if (hoverTimer.value) {
    clearTimeout(hoverTimer.value);
    hoverTimer.value = null;
  }
}
</script>

<style scoped>
/* Color primario y subrayado en hover/activo */
.item-link .tab-title {
  transition: color .2s ease, text-underline-offset .2s ease;
  text-decoration: none;
}

.item-link:hover .tab-title,
.item-link.current .tab-title {
  color: var(--primary, #0ea5e9);
  /* usa tu main color */
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
}

/* Opcional: numerito con menor opacidad en activo/hover */
.item-link:hover .tab-title .opacity-7,
.item-link.current .tab-title .opacity-7 {
  opacity: .9;
}

/* Mantén tu clase .current si tus estilos base la usan */
.tab-content.current {
  display: block;
}

/* =========================
   Services Tab – Foto + Card
   ========================= */
.services-tab {
  /* TUNABLES (desktop) */
  --img-height: 520px;
  /* TUNABLES (desktop) */
  --img-width: 400px;
  /* alto de la foto */
  --img-radius: 18px;
  /* borde redondeado de la foto */
  --card-width: 110%;
  /* ancho de la tarjeta sobre la foto (↓ para ver más imagen) */
  --card-pad: 28px 32px;
  /* padding interno de la tarjeta */
  --card-offset-x: 30%;
  /* cuánto se mete desde la izquierda */
  --card-offset-y: -100px;
  /* cuánto se “monta” hacia abajo (negativo la baja) */
  --card-radius: 16px;
  --card-bg: rgba(20, 20, 20, .92);
  /* podés subir/bajar opacidad */
  --card-border: 1px solid rgba(255, 255, 255, .08);
  --card-shadow: 0 12px 40px rgba(0, 0, 0, .35);
}

/* contenedor de cada panel */
.serv-tab-cont .item {
  position: relative;
}

/* FOTO */
.serv-tab-cont .item .img {
  position: relative;
  height: var(--img-height);
  width: var(--img-width);
  border-radius: var(--img-radius);
  overflow: hidden;
}

.serv-tab-cont .item .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* que recorte, no deforme */
  display: block;
  filter: none;
  /* por si hay filtros globales */
}

/* TARJETA SOBRE LA FOTO */
.serv-tab-cont .item .cont {
  position: absolute;
  left: var(--card-offset-x);
  bottom: var(--card-offset-y);
  width: var(--card-width);
  padding: var(--card-pad);
  background: var(--card-bg);
  border: var(--card-border);
  box-shadow: var(--card-shadow);
  border-radius: var(--card-radius);
  backdrop-filter: blur(4px);
  /* lindo efecto glass subtle */
}

.serv-tab-cont .item .cont .icon-img-60 {
  width: 60px;
  height: 60px;
}

/* TIPOGRAFÍA dentro de la card un pelín más compacta */
.serv-tab-cont .item .cont .text p {
  line-height: 1.55;
  margin: 0;
  opacity: .9;
}

/* CTA espaciado */
.serv-tab-cont .item .cont .mt-30 {
  margin-top: 22px !important;
}

/* ======= Responsivo ======= */
@media (max-width: 1200px) {
  .services-tab {
    --img-height: 460px;
    --card-width: 62%;
    --card-offset-x: 10%;
    --card-offset-y: -28px;
  }
}

@media (max-width: 992px) {

  /* En tablets, que la card “caiga” dentro del flujo para evitar overflow lateral */
  .serv-tab-cont .item .cont {
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    margin-top: 18px;
  }

  .services-tab {
    --img-height: 380px;
  }
}

@media (max-width: 576px) {
  .services-tab {
    --img-height: 300px;
    --card-pad: 20px 18px;
    --card-radius: 14px;
  }
}
</style>
