<template>
  <Teleport to="body">
    <a
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      class="fixed z-[100000] transition-transform duration-300 hover:scale-110 whatsapp-fab"
      :class="bgClass"
      :style="styleOffsets"
    >
      <MessageCircle :size="28" />
    </a>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MessageCircle } from 'lucide-vue-next'
import { useWhatsapp } from '../../../common/useWhatsapp'

/**
 * Props:
 * - number/text: overrides opcionales (si no, se usan los del runtime config vía useWhatsapp)
 * - bottom/right/left: offsets en px (left anula right si se provee)
 * - bgClass: clases Tailwind para color/hover del botón
 */
const props = withDefaults(defineProps<{
  number?: string
  text?: string
  bottom?: number
  right?: number
  left?: number
  bgClass?: string
}>(), {
  bottom: 85,           // ≈ bottom-6
  right: 25,            // ≈ right-6
  left: undefined,
  bgClass: 'bg-green-500 hover:bg-green-600'
})

const { buildUrl } = useWhatsapp()
const whatsappUrl = computed(() => buildUrl(props.number, props.text))

// Offsets con safe-area para iOS
const styleOffsets = computed(() => {
  const bottom = `calc(env(safe-area-inset-bottom, 0px) + ${props.bottom}px)`
  const horizontal = (val?: number) => (val != null ? `${val}px` : undefined)
  return {
    position: 'fixed',
    bottom,
    right: props.left == null ? horizontal(props.right) : undefined,
    left: props.left != null ? horizontal(props.left) : undefined
  } as Record<string, string | undefined>
})

const bgClass = computed(() => props.bgClass)
</script>


