<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const featured = ref([
  {
    name: 'Starry Night Dreams',
    artist: 'Nguyen Thi Mai',
    price: '$680',
    image: 'https://picsum.photos/seed/featured1/400/400',
    badge: t('featured.badge'),
    description: 'A captivating original painting that captures the magic of a starlit sky with vibrant colors and expressive brushwork.',
  },
  {
    name: 'Golden Horizon',
    artist: 'Tran Van Duc',
    price: '$550',
    image: 'https://picsum.photos/seed/featured2/400/400',
    badge: t('featured.badge'),
    description: 'An abstract landscape that blends warm gold tones with sweeping gestures, evoking feelings of infinite space.',
  },
  {
    name: 'Silent Forest',
    artist: 'Le Hoang Nam',
    price: '$720',
    image: 'https://picsum.photos/seed/featured3/400/400',
    badge: t('featured.badge'),
    description: 'A contemporary interpretation of nature\'s tranquility, featuring layered textures and rich earth tones.',
  },
])
</script>

<template>
  <section id="featured" class="py-20 bg-white dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <p class="text-gold-600 dark:text-gold-500 tracking-[0.3em] uppercase text-sm mb-4 font-medium">
          {{ t('featured.subtitle') }}
        </p>
        <h2 class="text-4xl md:text-6xl font-heading font-bold text-primary dark:text-white mb-6">
          {{ t('featured.title') }}
        </h2>
        <div class="w-24 h-0.5 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto"></div>
      </div>

      <!-- Featured Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left - Large Feature -->
        <div class="relative group cursor-pointer overflow-hidden rounded-lg">
          <div
            class="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
            <img src="https://picsum.photos/seed/mainart/800/800" alt="Featured Artwork" class="w-full h-full object-cover">
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-8">
            <span
              class="inline-block bg-gold-500 text-primary px-4 py-1 text-xs font-semibold tracking-wider uppercase mb-4">
              {{ t('featured.badge') }}
            </span>
            <h3 class="text-3xl font-heading font-bold text-white mb-3">
              {{ t('featured.product.name') }}
            </h3>
            <p class="text-slate-300 mb-4">{{ t('featured.product.description') }}</p>
            <div class="flex items-center gap-4">
              <span class="text-gold-500 text-3xl font-bold">{{ t('featured.product.price') }}</span>
              <NuxtLink :to="localePath('/')" class="btn-primary !py-2 !px-6">
                {{ t('featured.product.cta') }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Right - Smaller Features -->
        <div class="space-y-6">
          <div v-for="(item, index) in featured" :key="index" class="luxury-card group cursor-pointer">
            <div class="flex gap-6 p-6">
              <div
                class="w-32 h-32 flex-shrink-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-lg flex items-center justify-center overflow-hidden">
                <img class="w-full h-full object-cover" :src="item.image" :alt="item.name">
              </div>
              <div class="flex-1">
                <span class="text-xs text-slate-500 tracking-wider uppercase">{{ item.artist }}</span>
                <h3
                  class="text-xl font-heading font-semibold text-primary dark:text-white mt-2 mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-500 transition-colors">
                  {{ item.name }}
                </h3>
                <p class="text-slate-500 dark:text-slate-400 text-sm mb-3">{{ item.description }}</p>
                <div class="flex items-center justify-between">
                  <span class="text-gold-600 dark:text-gold-500 font-bold text-xl">{{ item.price }}</span>
                  <button class="text-slate-400 hover:text-gold-500 transition-colors">
                    <i class='bx bx-shopping-bag text-2xl'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
