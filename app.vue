<script setup lang="ts">
import { onMounted } from 'vue';
import { provideI18n } from '@/i18n';

const { current, setLocale } = provideI18n('es'); // idioma por defecto

// Opcional: leer preferencia del browser
onMounted(() => {
  const pref = navigator.language?.startsWith('en') ? 'en' : 'es';
  setLocale(pref as 'en' | 'es');
});
</script>

<template>
  <NuxtPage />
</template>

