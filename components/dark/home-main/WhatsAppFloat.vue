<template>
  <Teleport to="body">
    <div class="whatsapp-fab-wrap" :style="styleOffsets" :data-visible="isVisible" @mouseenter="onHover(true)"
      @mouseleave="onHover(false)">
      <!-- Chat bubble con estética de servicios -->
      <transition name="bubbleX">
        <div v-if="showBubble" class="wpp-bubble wpp-bubble--dark"
          :class="[{ 'is-left': isLeft, 'from-left': isLeft, 'from-right': !isLeft, 'is-active': showBubble }]"
          role="status" aria-live="polite">
          <div class="wpp-bubble__glow" aria-hidden="true"></div>

          <div class="wpp-bubble__row">
            <div class="wpp-bubble__avatar"><span class="wpp-badge">AI</span></div>
            <div class="wpp-bubble__msg">
              <div class="wpp-bubble__typing"><span></span><span></span><span></span></div>
              <div class="wpp-bubble__text">
                <span>{{bubblePresentation}}</span>
                <span> {{ bubbleText }}</span>
              </div>
            </div>
          </div>

          <span class="wpp-bubble__tail" aria-hidden="true"></span>
        </div>
      </transition>

      <!-- FAB (sin ring, limpio) -->
      <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp"
        class="whatsapp-fab transition-transform duration-300 hover:scale-110" :class="bgClass" data-whatsapp-fab>

        <FontAwesomeIcon :icon="['fab', 'whatsapp']" />
      </a>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { MessageCircle } from 'lucide-vue-next'
import { useWhatsapp } from '../../../common/useWhatsapp'

library.add(faWhatsapp)


const props = withDefaults(defineProps<{
  number?: string
  text?: string
  bottom?: number
  right?: number
  left?: number
  bgClass?: string
  zIndex?: number
  hideOnSelector?: string
  bubblePresentation?: string
  bubbleText?: string
  bubbleDelayMs?: number
  bubbleAutoHideMs?: number
  bubbleHoverKeepMs?: number
}>(), {
  bottom: 85,
  right: 25,
  left: undefined,
  bgClass: 'bgClass',
  zIndex: 2147483000,
  hideOnSelector: '#contacto',
  bubblePresentation: 'Hola Bienvenido!',
  bubbleText: 'Agendamos una reunión sin costo?',
  bubbleDelayMs: 1500,
  bubbleAutoHideMs: 8000,
  bubbleHoverKeepMs: 2600
})

const isLeft = computed(() => props.left != null)

const { buildUrl } = useWhatsapp()
const whatsappUrl = computed(() => buildUrl(props.number, props.text))

const isVisible = ref(true)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (props.hideOnSelector) {
    const target = document.querySelector(props.hideOnSelector)
    if (target) {
      observer = new IntersectionObserver(
        (entries) => { isVisible.value = entries[0].intersectionRatio < 0.2 },
        { threshold: [0, 0.2, 1] }
      )
      observer.observe(target)
    }
  }
  scheduleAutoBubble()
})
onBeforeUnmount(() => observer?.disconnect())

const styleOffsets = computed(() => {
  const bottom = `calc(env(safe-area-inset-bottom, 0px) + ${props.bottom}px)`
  const right = props.left == null ? `calc(env(safe-area-inset-right, 0px) + ${props.right}px)` : undefined
  const left = props.left != null ? `calc(env(safe-area-inset-left, 0px) + ${props.left}px)` : undefined
  return {
    position: 'fixed',
    '--fab-bottom': bottom,
    '--fab-right': right,
    '--fab-left': left,
    bottom: 'var(--fab-bottom)',
    right: 'var(--fab-right)',
    left: 'var(--fab-left)',
    zIndex: String(props.zIndex)
  } as Record<string, string | undefined>
})

const bgClass = computed(() => props.bgClass)

/* ---------- Bubble logic ---------- */
const showBubble = ref(false)
let showT: number | null = null
let hideT: number | null = null

function clearTimers() {
  if (showT) { clearTimeout(showT); showT = null }
  if (hideT) { clearTimeout(hideT); hideT = null }
}

function scheduleAutoBubble() {
  clearTimers()
  showT = window.setTimeout(() => {
    if (isVisible.value) {
      showBubble.value = true
      hideT = window.setTimeout(() => (showBubble.value = false), props.bubbleAutoHideMs)
    }
  }, props.bubbleDelayMs)
}

function onHover(state: boolean) {
  if (state) {
    clearTimers()
    showBubble.value = true
  } else {
    clearTimers()
    hideT = window.setTimeout(() => (showBubble.value = false), props.bubbleHoverKeepMs)
  }
}

watch(isVisible, (v) => { if (!v) showBubble.value = false })
</script>

<style scoped>
/* ====== base ====== */
@property --angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0deg;
}

@keyframes spin {
  to {
    --angle: 360deg;
  }
}

/* layout del bubble */
.wpp-bubble {
  position: relative;
  max-width: 320px;
  border-radius: 18px;
  padding: 14px 16px;
  isolation: isolate;
  overflow: visible;
  background: linear-gradient(180deg, rgba(20, 22, 28, .92), rgba(20, 22, 28, .90));
  box-shadow: 0 12px 28px rgba(0, 0, 0, .28), inset 0 0 0 1px rgba(255, 255, 255, .04);
  color: #f1f5f9;
}

/* fila: centra verticalmente avatar + texto */
.wpp-bubble__row {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* texto */
.wpp-bubble__text {
  color: #f8fafc;
  font: 600 15px/1.4 'Inter', ui-sans-serif;
}

/* msg contenedor */
.wpp-bubble__msg {
  position: relative;
}

/* typing NO ocupa altura (no empuja) */
.wpp-bubble__typing {
  position: absolute;
  top: -8px;
  left: 0;
  display: inline-flex;
  gap: 4px;
  opacity: .9;
  animation: typingHide .8s ease forwards;
  margin: 0;
  height: auto;
}

.wpp-bubble__typing span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #7dd3fc;
  animation: bounce 1.2s ease-in-out infinite;
}

@keyframes bounce {

  0%,
  80%,
  100% {
    transform: translateY(0);
    opacity: .8
  }

  40% {
    transform: translateY(-5px);
    opacity: 1
  }
}

@keyframes typingHide {
  to {
    opacity: 0;
    transform: translateY(-2px);
    height: 0;
    margin: 0
  }
}

/* avatar y badge */
.wpp-bubble__avatar {
  width: 28px;
  height: 28px;
  border-radius: 10px;
  background: radial-gradient(120% 120% at 30% 20%, #0b1220, #060a12);
  display: grid;
  place-items: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, .5);
}

.wpp-badge {
  color: #e2e8f0;
  font: 600 11px/1 'Inter', ui-sans-serif;
  letter-spacing: .02em;
}

/* tail por encima del rim/dash */
.wpp-bubble__tail {
  position: relative;
  z-index: 1;
  right: -8px;
  bottom: 18px;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background: rgba(20, 22, 28, .92);
  transform: rotate(45deg);
  box-shadow: 3px 3px 18px rgba(0, 0, 0, .28);
  -webkit-mask-image: radial-gradient(14px 14px at 100% 0, #000 60%, transparent 61%);
}

.is-left .wpp-bubble__tail {
  right: auto;
  left: -8px;
  transform: rotate(-45deg);
}

/* glow sutil detrás */
.wpp-bubble__glow {
  position: absolute;
  inset: -24px -18px -24px -18px;
  z-index: -1;
  background:
    radial-gradient(40% 50% at 100% 50%, rgba(37, 211, 102, .16), transparent 70%),
    radial-gradient(60% 80% at 0% 0%, rgba(99, 102, 241, .10), transparent 70%);
  filter: blur(12px);
}

/* ==== RIM (borde irisado) en ::before ==== */
.wpp-bubble--dark::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1px solid transparent;
  background:
    linear-gradient(#0000, #0000) padding-box,
    conic-gradient(from var(--angle),
      rgba(100, 116, 139, .35) 75%,
      #5eead4 86%,
      #60a5fa 92%,
      rgba(100, 116, 139, .35) 100%) border-box;
  -webkit-mask:
    linear-gradient(#000 0 0) padding-box,
    linear-gradient(#000 0 0) border-box;
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  z-index: 0;
  animation: spin 6000ms linear infinite paused;
}

/* ==== DASH (recorre el perímetro) en ::after ==== */
.wpp-bubble--dark::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px solid transparent;
  /* grosor del dash */
  background:
    linear-gradient(#0000, #0000) padding-box,
    conic-gradient(from var(--angle), #9aa3ff 0%, transparent 10%) border-box;
  -webkit-mask:
    linear-gradient(#000 0 0) padding-box,
    linear-gradient(#000 0 0) border-box;
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transition: opacity .2s ease;
  animation: spin 2400ms linear infinite paused;
}

/* activar animaciones sólo visible/hover */
.wpp-bubble--dark.is-active::before,
.wpp-bubble--dark:hover::before,
.wpp-bubble--dark.is-active::after,
.wpp-bubble--dark:hover::after {
  animation-play-state: running;
}

.wpp-bubble--dark.is-active::after,
.wpp-bubble--dark:hover::after {
  opacity: .9;
}

/* transición aparición/desaparición */
.bubble-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.bubble-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.bubble-enter-active {
  transition: all .28s ease;
}

.bubble-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.bubble-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

.bubble-leave-active {
  transition: all .22s ease;
}

/* wrapper FAB ocultamiento */
.whatsapp-fab-wrap[data-visible="false"] {
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px) scale(.96);
}

/* mobile */
@media (max-width:640px) {
  .whatsapp-fab-wrap {
    --fab-bottom: calc(env(safe-area-inset-bottom, 0px) + 80px) !important;
    --fab-right: calc(env(safe-area-inset-right, 0px) + 10px) !important;
  }

  .wpp-bubble {
    max-width: 220px;
  }

  .wpp-bubble__text {
    font-size: 13px;
  }
}

/* reduced motion */
@media (prefers-reduced-motion: reduce) {

  .bubble-enter-active,
  .bubble-leave-active {
    transition: none !important;
  }

  .wpp-bubble--dark::before,
  .wpp-bubble--dark::after {
    animation: none !important;
  }
}

.whatsapp-fab svg {
  width: 26px;
  height: 26px;
}

/* Mantener bubble a un costado del FAB (no arriba) */
.whatsapp-fab-wrap {
  display: flex;
  /* ya lo tenías con grid; flex es perfecto aquí */
  align-items: center;
  gap: 12px;
}

/* Por defecto, con FAB a la derecha (isLeft = false), el bubble va a la izquierda del FAB */
.wpp-bubble {
  order: 0;
  margin-right: 8px;
}

/* Si el FAB está a la izquierda (isLeft = true), invertimos el lado */
.is-left {
  order: 1;
  margin-right: 0;
  margin-left: 8px;
}

/* Transición horizontal (slide) */
.bubbleX-enter-from {
  opacity: 0;
  transform: translateX(12px) scale(.98);
}

.bubbleX-enter-to {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.bubbleX-enter-active {
  transition: transform .28s ease, opacity .28s ease;
}

.bubbleX-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.bubbleX-leave-to {
  opacity: 0;
  transform: translateX(12px) scale(.98);
}

.bubbleX-leave-active {
  transition: transform .22s ease, opacity .22s ease;
}

/* Si sale desde la izquierda del FAB, invertimos el vector de entrada/salida */
.from-left.bubbleX-enter-from {
  transform: translateX(-12px) scale(.98);
}

.from-left.bubbleX-leave-to {
  transform: translateX(-12px) scale(.98);
}

/* El ‘tail’ ya está preparado para ambos lados; no tocar.
   (Por si se movió: lo mantenemos encima del rim/dash) */
.wpp-bubble__tail {
  position: relative;
  z-index: 1;
}
</style>
