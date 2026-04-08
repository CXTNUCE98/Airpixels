<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const currentYear = new Date().getFullYear()

const footerLinks = [
  { label: 'footer.privacyPolicy', href: '/privacy' },
  { label: 'footer.contact', href: '/contact' },
  { label: 'footer.prints', href: '/prints' },
  { label: 'footer.about', href: '/about' },
  { label: 'footer.journal', href: '/journal' }
]
</script>

<template>
  <footer class="bg-white dark:bg-slate-950 pt-20 pb-10 border-t border-slate-100 dark:border-slate-900">
    <div class="max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
      
      <!-- Newsletter Section -->
      <div class="mb-20 max-w-2xl mx-auto w-full pt-16">
        <h3 class="text-[10px] tracking-[0.25em] font-normal uppercase text-slate-800 dark:text-slate-200 mb-6">FIELD NOTES BY AIRPIXELS</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 font-light leading-loose mb-10 max-w-xl mx-auto">
          Let's explore the Creative Journey together. Once a month, I honestly and unfiltered share a curated mix of stories and reflections from life on the road and behind the lens.
        </p>
        <form class="flex flex-col sm:flex-row gap-0 max-w-md mx-auto items-end border-b border-black dark:border-white pb-2" @submit.prevent>
          <input 
            type="email" 
            placeholder="Email Address" 
            class="flex-1 bg-transparent px-2 py-2 text-sm focus:outline-none transition-colors placeholder:text-slate-400 font-light"
          >
          <button type="submit" class="text-[10px] tracking-widest uppercase font-medium px-4 py-2 hover:opacity-70 transition-opacity">
            Sign Up
          </button>
        </form>
      </div>

      <!-- Footer Divider -->
      <div class="w-full h-px bg-slate-200 dark:bg-slate-800 mb-10"></div>

      <!-- Copyright & Links -->
      <div class="flex flex-col gap-6 items-center w-full">
        <svg class="w-8 h-8 text-black dark:text-white mb-2" viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 4C11.16 4 4 11.16 4 20s7.16 16 16 16 16-7.16 16-16S28.84 4 20 4zm-4 24c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4-6c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
        </svg>

        <p class="text-[11px] text-slate-500 tracking-widest uppercase">
          All Rights Reserved © AIRPIXELSMEDIA AB {{ currentYear }}
        </p>

        <!-- Footer Links -->
        <div class="flex flex-wrap justify-center gap-6 mt-4">
          <NuxtLink
            v-for="link in footerLinks"
            :key="link.label"
            :to="localePath(link.href)"
            class="text-[11px] text-slate-500 hover:text-black dark:hover:text-white transition-colors tracking-widest uppercase"
          >
            {{ t(link.label) }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
