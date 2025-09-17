<template>
  <Teleport to="body">
    <a
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      class="whatsapp-fab fixed transition-transform duration-300 hover:scale-110"
      :class="bgClass"
      :style="styleOffsets"
      :data-visible="isVisible"
    >
      <MessageCircle :size="28" />
    </a>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { MessageCircle } from 'lucide-vue-next'
import { useWhatsapp } from '../../../common/useWhatsapp'

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

// visibilidad controlada por IntersectionObserver (opcional)
const isVisible = ref(true)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (props.hideOnSelector) {
    const target = document.querySelector(props.hideOnSelector)
    if (target) {
      observer = new IntersectionObserver(
        (entries) => {
          // si el contacto entra >20% en viewport, ocultamos el FAB
          isVisible.value = entries[0].intersectionRatio < 0.2
        },
        { threshold: [0, 0.2, 1] }
      )
      observer.observe(target)
    }
  }
})

onBeforeUnmount(() => observer?.disconnect())

// offsets con safe-area en bottom y lateral
const styleOffsets = computed(() => {
  const bottom = `calc(env(safe-area-inset-bottom, 0px) + ${props.bottom}px)`
  const right = props.left == null
    ? `calc(env(safe-area-inset-right, 0px) + ${props.right}px)`
    : undefined
  const left = props.left != null
    ? `calc(env(safe-area-inset-left, 0px) + ${props.left}px)`
    : undefined

  return {
    position: 'fixed',
    bottom,
    right,
    left,
    zIndex: String(props.zIndex)
  } as Record<string, string | undefined>
})

const bgClass = computed(() => props.bgClass)
</script>

<style>
.whatsapp-fab{
  width: 56px; height: 56px;
  border-radius: 9999px;
  display: grid; place-items: center;
  box-shadow: 0 10px 30px rgba(0,0,0,.35);
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

/* ocultamiento suave cuando se cruza con #contacto */
.whatsapp-fab[data-visible="false"]{
  opacity: .0;
  pointer-events: none;
  transform: translateY(8px) scale(.96);
}

/* por si algún overlay intenta taparlo */
.whatsapp-fab { will-change: transform; }
@media (prefers-reduced-motion: reduce){
  .whatsapp-fab{ transition: none !important; }
}
</style>
