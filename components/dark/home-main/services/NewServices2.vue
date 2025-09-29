<template>
  <section class="services-boxs section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-10">{{ t('services2.eyebrow') }}</h6>
        <div class="d-flex align-items-center">
          <h2 class="fw-600">
            {{ t('services2.tittle') }}
          </h2>
        </div>
        <div class="bord mt-10 pb-0 bord-thin-top d-flex align-items-center" />
      </div>

      <div class="row pt-30">
        <div v-for="(item, i) in items" :key="i" class="col-lg-3 col-md-6 items">
          <!-- Card con borde glow animado -->
          <article class="item-box bg md-mb50 card-glow group">
            <!-- capa borde “lleno” (se anima al hover/focus) -->
            <span class="card-glow__rim" aria-hidden="true"></span>
            <!-- trazo que “viaja” alrededor -->
            <span class="card-glow__dash" aria-hidden="true"></span>

            <div class="card-glow__content">
              <div class="icon mb-40 opacity-5">
                <img :src="item.img" alt="" />
              </div>

              <h5 class="mb-15 text-u">
                <template v-if="item.titleA && item.titleB">
                  {{ item.titleA }} <br /> {{ item.titleB }}
                </template>
                <template v-else>
                  {{ item.title }}
                </template>
              </h5>

              <p>{{ item.desc }}</p>

              <NuxtLink :to="whatsappUrl" class="rmore mt-30">
                <span class="sub-title">{{ t('servicesBoxes.read_more') }}</span>
                <img src="/dark/assets/imgs/arrow-right.png" alt="" class="icon-img-20 ml-5" />
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/i18n'
const { t } = useI18n()

import { useWhatsapp } from '../../../../common/useWhatsapp'

const props = withDefaults(defineProps<{
  number?: string
  text?: string
  bottom?: number
  right?: number
  left?: number
  bgClass?: string
  zIndex?: number
  /** selector CSS para ocultar el FAB cuando ese bloque esté visible (opcional) */
  hideOnSelector?: string
}>(), {
  bottom: 85,
  right: 25,
  left: undefined,
  bgClass: 'bg-green-500 text-black hover:bg-green-600',
  zIndex: 2147483000, // casi el máximo seguro
  hideOnSelector: '#contacto'   // cámbialo o quítalo si no querés esa lógica
})

const { buildUrl } = useWhatsapp()
const whatsappUrl = computed(() => buildUrl(props.number, props.text))


type Item = {
  title?: string; titleA?: string; titleB?: string;
  img: string; desc: string; link: string;
}
const items = computed(() => t('servicesBoxes.list') as Item[])
</script>

<style scoped>
/* ====== Glow animado en el borde (sin Tailwind) ====== */
@property --angle { syntax:"<angle>"; inherits:true; initial-value:0deg; }

@keyframes spin { to { --angle: 360deg; } }

.card-glow{
  position: relative;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,.08);
  background: #141414; /* tu base oscura */
  overflow: hidden;
  isolation: isolate; /* evita que el mix-blend afecte fuera */
}

/* Capa de borde “lleno” con conic-gradient (glow suave) */
.card-glow__rim{
  position:absolute; inset:0; border-radius: inherit;
  border: 1px solid transparent;
  background:
    linear-gradient(#141414,#141414) padding-box,
    conic-gradient(from var(--angle),
      rgba(100,116,139,.35) 75%, /* slate-600/35 */
      #5eead4 86%,               /* teal-300 */
      #60a5fa 92%,               /* sky-400 */
      rgba(100,116,139,.35) 100%
    ) border-box;
  opacity: 0; transition: opacity .25s ease;
  pointer-events: none;
  z-index: 0;
}

/* Trazo fino que “viaja” alrededor (underline extendido) */
.card-glow__dash{
  position:absolute; inset:1px; border-radius: calc(16px - 1px);
  border: 2px solid transparent;
  background:
    linear-gradient(#141414,#141414) padding-box,
    conic-gradient(from var(--angle),
      #9aa3ff 0%, transparent 10%) border-box; /* trazo */
  opacity: 0; transition: opacity .25s ease;
  pointer-events: none;
  z-index: 0;
  animation: spin 2400ms linear infinite paused;
}

/* Contenido por encima de las capas */
.card-glow__content{ position: relative; z-index: 1; }

/* Dispara animaciones sólo en hover/focus dentro de la card */
.card-glow:hover .card-glow__rim,
.card-glow:focus-within .card-glow__rim{
  opacity: 1;
  animation: spin 6000ms linear infinite;
}

.card-glow:hover .card-glow__dash,
.card-glow:focus-within .card-glow__dash{
  opacity: 1;
  animation-play-state: running;
}

/* ====== Mobile/Tablet: desactivar anims y dejar todo visible ====== */
@media (hover: none), (pointer: coarse){
  .card-glow__rim, .card-glow__dash{ display:none !important; }
}

/* Respeta reduced motion */
@media (prefers-reduced-motion: reduce){
  .card-glow__rim, .card-glow__dash{ animation: none !important; }
}

/* ====== Lo tuyo original para móviles (siempre “abiertas”) ====== */
@media (hover: none), (pointer: coarse) {
  .services-boxs .item-box {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
  }
  .services-boxs .item-box .icon,
  .services-boxs .item-box h5,
  .services-boxs .item-box p,
  .services-boxs .item-box .rmore { transform: none !important; }
  .services-boxs .item-box p,
  .services-boxs .item-box .rmore { position: static !important; }
  .services-boxs .item-box h5 { margin-bottom: 12px !important; }
  .services-boxs .item-box p {
    opacity: 1 !important; visibility: visible !important; max-height: none !important;
    margin: 0 0 16px 0 !important;
  }
  .services-boxs .item-box .rmore {
    opacity: 1 !important; transform: none !important; margin-top: auto !important;
  }
  .services-boxs .item-box::before, .services-boxs .item-box::after { opacity: 0 !important; }
  .services-boxs .item-box:hover, .services-boxs .item-box:active { transform: none !important; }
}
</style>
