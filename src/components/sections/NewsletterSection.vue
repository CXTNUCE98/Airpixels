<script setup lang="ts">
const { t } = useI18n()
const email = ref('')
const submitted = ref(false)

const handleSubmit = () => {
  if (email.value) {
    submitted.value = true
    email.value = ''
    setTimeout(() => {
      submitted.value = false
    }, 3000)
  }
}
</script>

<template>
  <section class="py-20 lg:py-32 bg-slate-50 dark:bg-slate-900">
    <div class="max-w-xl mx-auto px-6 lg:px-8">
      <!-- Section Heading -->
      <h2 class="text-xl font-normal tracking-widest uppercase text-slate-900 dark:text-white mb-8 text-center">
        {{ t('newsletter.heading') }}
      </h2>

      <!-- Description -->
      <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 text-center text-sm">
        {{ t('newsletter.description') }}
      </p>

      <!-- Email Form -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div v-if="submitted" class="text-center py-4">
          <p class="text-sm font-medium text-slate-900 dark:text-white tracking-wide">
            {{ t('newsletter.thankYou') }}
          </p>
        </div>
        <template v-else>
          <div class="flex flex-col sm:flex-row gap-3">
            <input
              v-model="email"
              type="email"
              :placeholder="t('newsletter.emailPlaceholder')"
              required
              class="flex-1 px-4 py-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors text-sm"
            />
            <button
              type="submit"
              class="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium tracking-wider uppercase text-xs hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors"
            >
              {{ t('newsletter.submit') }}
            </button>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-500 text-center">
            {{ t('newsletter.disclaimer') }}
          </p>
        </template>
      </form>
    </div>
  </section>
</template>
