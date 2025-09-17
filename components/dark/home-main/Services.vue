<!-- ServicesTabs.vue -->
<template>
  <section class="services-tab">
    <div class="container">
      <div class="row" id="tabs">
        <!-- Paneles -->
        <div class="col-lg-6 valign">
          <div class="serv-tab-cont md-mb0">
            <div v-for="(tab, idx) in tabs" :key="`panel-${idx}`" class="tab-content"
              :class="{ current: idx === active }" v-show="idx === active">
              <div class="item" :ref="setPanelEl(idx)">
                <div class="img">
                  <img :src="tab.img" :alt="tab.label" />
                </div>

                <div class="cont sub-bg">
                  <div class="icon-img-60 mb-40">
                    <img :src="tab.icon" :alt="tab.label" />
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

        <!-- Tabs -->
        <div class="col-lg-6 valign">
          <div class="serv-tab-link tab-links full-width pt-40">
            <div class="sec-head mb-30">
              <h6 class="sub-title mb-15 main-color">
                {{ t('servicesTabs.eyebrow') }}
              </h6>
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
                    @mouseleave="cancelHover" @focus="hoverTab(idx)" @blur="cancelHover" @click="onTabClick(idx)">
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
import { ref, computed, nextTick, onMounted, onBeforeUnmount } from 'vue'
import type { ComponentPublicInstance } from 'vue'

import { useI18n } from '@/i18n'

const { t } = useI18n()

type TabItem = { num: string; label: string; img: string; icon: string; text: string }
const tabs = computed(() => t('servicesTabs.tabs') as TabItem[])

const active = ref(0)
const hoverTimer = ref<ReturnType<typeof setTimeout> | null>(null)

/* Hover suave (desktop) */
function hoverTab(idx: number) {
  if (hoverTimer.value) clearTimeout(hoverTimer.value)
  hoverTimer.value = setTimeout(() => (active.value = idx), 120)
}
function cancelHover() {
  if (!hoverTimer.value) return
  clearTimeout(hoverTimer.value)
  hoverTimer.value = null
}

/* Refs de panel para scrollear en mobile */
const panelEls = ref<(HTMLElement | null)[]>([])

/* Function ref: NO TS en template */
const setPanelEl =
  (idx: number) =>
  (el: Element | ComponentPublicInstance | null) => {
    panelEls.value[idx] = (el as HTMLElement) ?? null
  }

/* Obtiene offset del header fijo (si existe) */
function getHeaderOffset(): number {
  const sticky = document.querySelector('header, .navbar, .nav-top, .header, .sticky') as HTMLElement | null
  return sticky ? sticky.offsetHeight + 8 : 84 // ajustá si tu header es más alto
}

/* Scroll robusto (soporta Lenis si existe) */
function smoothScrollTo(y: number) {
  const w = window as any
  const lenis = w.lenis || w.Lenis || w.$lenis
  if (lenis && typeof lenis.scrollTo === 'function') {
    lenis.scrollTo(y, { duration: 0.6 })
  } else {
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

/* Hace scroll al panel (a la imagen si existe) */
function scrollToPanel(idx: number) {
  // Esperamos al render del nuevo tab y a un frame de layout
  nextTick(() => {
    requestAnimationFrame(() => {
      const container = panelEls.value[idx]
      if (!container) return
      const target = (container.querySelector('.img') as HTMLElement) || container
      const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset()
      smoothScrollTo(top)
      // ping visual opcional
      container.classList.add('flash')
      setTimeout(() => container.classList.remove('flash'), 650)
    })
  })
}

/* Click del tab: cambia y scrollea SIEMPRE (mobile y desktop) */
function onTabClick(idx: number) {
  active.value = idx
  scrollToPanel(idx)
}

/* Detectar touch (sin hover) */
const isTouch = ref(false)
let mq: MediaQueryList | null = null
let listener: ((e: MediaQueryListEvent) => void) | null = null

onMounted(() => {
  mq = window.matchMedia('(hover: none), (pointer: coarse)')
  isTouch.value = mq.matches
  listener = (e) => (isTouch.value = e.matches)
  // compatibilidad
  // @ts-ignore
  mq.addEventListener ? mq.addEventListener('change', listener) : mq.addListener(listener)
})

onBeforeUnmount(() => {
  if (!mq || !listener) return
  // @ts-ignore
  mq.removeEventListener ? mq.removeEventListener('change', listener) : mq.removeListener(listener)
})

</script>

<style scoped>
/* === Offset del header fijo cuando hacemos scroll al panel === */
.services-tab {
  --sticky-offset: 84px;
}

/* ===== Interacción Tabs ===== */
.item-link .tab-title {
  transition: color .2s ease, text-underline-offset .2s ease;
  text-decoration: none;
}

.item-link:hover .tab-title,
.item-link.current .tab-title {
  color: var(--primary, #0ea5e9);
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
}

.item-link:hover .tab-title .opacity-7,
.item-link.current .tab-title .opacity-7 {
  opacity: .9;
}

.tab-content.current {
  display: block;
}

/* ===== Layout (foto + tarjeta) ===== */
.services-tab {
  --img-height: 520px;
  --img-width: 400px;
  --img-radius: 18px;

  --card-width: 110%;
  --card-pad: 28px 32px;
  --card-offset-x: 30%;
  --card-offset-y: -100px;
  --card-radius: 16px;
  --card-bg: rgba(20, 20, 20, .92);
  --card-border: 1px solid rgba(255, 255, 255, .08);
  --card-shadow: 0 12px 40px rgba(0, 0, 0, .35);
}

.serv-tab-cont .item {
  position: relative;
}

/* deja espacio para el header al scrollear en mobile */
@media (hover:none),
(pointer:coarse) {
  .serv-tab-cont .item {
    scroll-margin-top: var(--sticky-offset);
  }
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
  display: block;
}

/* TARJETA */
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
}

.serv-tab-cont .item .cont .icon-img-60 {
  width: 60px;
  height: 60px;
}

.serv-tab-cont .item .cont .text p {
  line-height: 1.55;
  margin: 0;
  opacity: .9;
}

.serv-tab-cont .item .cont .mt-30 {
  margin-top: 22px !important;
}

/* ===== Responsivo ===== */
@media (max-width:1200px) {
  .services-tab {
    --img-height: 460px;
    --card-width: 62%;
    --card-offset-x: 10%;
    --card-offset-y: -28px;
  }
}

@media (max-width:992px) {
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

@media (max-width:576px) {
  .services-tab {
    --img-height: 300px;
    --card-pad: 20px 18px;
    --card-radius: 14px;
  }
}

/* Ping sutil opcional */
@keyframes flashBorder {
  0% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
  }

  30% {
    box-shadow: 0 0 0 6px rgba(59, 130, 246, .25);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
  }
}

.item.flash .img {
  animation: flashBorder .6s ease;
  border-radius: var(--img-radius);
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .item-link .tab-title {
    transition: none;
  }

  .item.flash .img {
    animation: none;
  }
}
</style>
