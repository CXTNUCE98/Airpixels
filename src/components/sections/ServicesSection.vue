<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="py-20 lg:py-32 bg-white dark:bg-slate-950">
    <div class="max-w-3xl mx-auto px-6 lg:px-8">
      <!-- Section Heading -->
      <h2 class="text-xl font-normal tracking-widest uppercase text-slate-900 dark:text-white mb-16 text-center">
        {{ t('services.heading') }}
      </h2>

      <!-- Content -->
      <div class="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
        <p>
          {{ t('services.intro') }}
        </p>

        <p>
          {{ t('services.recognition') }}
        </p>

        <p>
          {{ t('services.philosophy') }}
        </p>

        <p>
          {{ t('services.storytelling') }}
        </p>

        <p class="text-slate-900 dark:text-white font-medium">
          {{ t('services.cta') }}
        </p>
      </div>
    </div>
  </section>
</template>
