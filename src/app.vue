<script setup lang="ts">
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value)
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#000000" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* Global styles - Minimalist photography portfolio */
html {
  scroll-behavior: smooth;
}

body {
  @apply bg-white dark:bg-slate-950 text-slate-900 dark:text-white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-slate-100 dark:bg-slate-900;
}

::-webkit-scrollbar-thumb {
  @apply bg-slate-400 dark:bg-slate-600;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-slate-500 dark:bg-slate-500;
}

/* Zoom cursor */
.cursor-zoom-in {
  cursor: zoom-in;
}

.cursor-zoom-in:active {
  cursor: zoom-out;
}

/* Scroll reveal animation base */
.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.translate-y-0 {
  transform: translateY(0);
}

.translate-y-8 {
  transform: translateY(2rem);
}
</style>
