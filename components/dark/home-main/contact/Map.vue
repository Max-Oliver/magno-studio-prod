<template>
  <div class="google-map" aria-label="Mapa de la oficina de Magno Studio">
    <iframe
      id="gmap_canvas"
      :title="`Ubicación: ${address}`"
      :src="mapSrc"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
    />
    <noscript>
      <a
        :href="`https://www.google.com/maps?hl=es&q=${encodedAddress}&z=16`"
        target="_blank"
        rel="noopener"
      >Ver en Google Maps</a>
    </noscript>
  </div>
</template>

<script setup lang="ts">
const address = 'Miami Boulevard 2, Punta del Este, Uruguay';
// Si preferís "Boulebard" tal como lo escribiste antes, reemplázalo arriba.

const encodedAddress = encodeURIComponent(address);
// Ajustá zoom con z=14..18 (16 queda bien urbano)
const mapSrc = `https://www.google.com/maps?hl=es&q=${encodedAddress}&z=16&output=embed`;
</script>

<style scoped>
.google-map {
  position: relative;
  width: 100%;
  /* Relación 16:9; podés usar 3:2 (66.66%) o 1:1 (100%) según tu diseño */
  /* padding-bottom: 56.25%; */
  border-radius: 16px;
  overflow: hidden;
  background: #0b0b0b; /* fallback elegante mientras carga */
}
.google-map iframe {
  position: absolute; inset: 0;
  width: 100%; height: 600px;
  border: 0;
}
</style>
