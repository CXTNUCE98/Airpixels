<script setup lang="ts">
const isScrolled = ref(false)
const showMobileMenu = ref(false)
const localePath = useLocalePath()

const handleScroll = () => {
  if (process.client) {
    isScrolled.value = window.scrollY > 50
  }
}

const navItems = [
  { label: 'nav.home', href: '/' },
  { label: 'nav.professional', href: '/professional' },
  { label: 'nav.prints', href: '/prints' },
  { label: 'nav.about', href: '/about' },
  { label: 'nav.contact', href: '/contact' }
]

const socialLinks = [
  { icon: 'bx bxl-instagram', href: '#', label: 'Instagram' },
  { icon: 'bx bxl-facebook', href: '#', label: 'Facebook' },
  { icon: 'bx bxl-youtube', href: '#', label: 'YouTube' },
  { icon: 'bx bxl-linkedin', href: '#', label: 'LinkedIn' },
  { icon: 'bx bxl-behance', href: '#', label: 'Behance' },
  { icon: 'bx bxl-twitter', href: '#', label: 'Twitter' }
]

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  }
})

onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-950">
    <div class="max-w-[1600px] mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink
          :to="localePath('/')"
          class="flex items-center gap-3 group"
        >
          <!-- Owl logo circle -->
          <div class="w-14 h-14 rounded-full border-2 border-slate-900 dark:border-white flex items-center justify-center group-hover:opacity-80 transition-opacity">
            <svg class="w-8 h-8 text-slate-900 dark:text-white" viewBox="0 0 40 40" fill="currentColor">
              <path d="M20 4C11.16 4 4 11.16 4 20s7.16 16 16 16 16-7.16 16-16S28.84 4 20 4zm-4 24c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4-6c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
            </svg>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation + Social -->
        <div class="hidden lg:flex items-center gap-8">
          <!-- Nav Links -->
          <nav class="flex items-center gap-6">
            <NuxtLink
              v-for="(item, idx) in navItems"
              :key="item.label"
              :to="localePath(item.href)"
              class="text-[11px] tracking-[0.15em] font-light uppercase text-slate-800 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400 transition-colors"
            >
              {{ $t(item.label) }}
            </NuxtLink>
          </nav>

          <!-- Divider -->
          <div class="w-px h-4 bg-slate-300 dark:bg-slate-700"></div>

          <!-- Social Icons -->
          <div class="flex items-center gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="text-slate-800 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400 transition-colors"
            >
              <i :class="[social.icon, 'text-lg']"></i>
            </a>
          </div>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          @click="showMobileMenu = !showMobileMenu"
          class="lg:hidden text-slate-900 dark:text-white p-2"
          :aria-label="showMobileMenu ? 'Close Menu' : 'Open Menu'"
        >
          <div class="w-6 h-5 relative flex flex-col justify-between">
            <span
              class="w-full h-0.5 bg-current transition-all duration-300"
              :class="{ 'rotate-45 translate-y-2': showMobileMenu }"
            ></span>
            <span
              class="w-full h-0.5 bg-current transition-all duration-300"
              :class="{ 'opacity-0': showMobileMenu }"
            ></span>
            <span
              class="w-full h-0.5 bg-current transition-all duration-300"
              :class="{ '-rotate-45 -translate-y-2': showMobileMenu }"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="showMobileMenu" class="lg:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <nav class="px-6 py-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item.label"
            :to="localePath(item.href)"
            @click="showMobileMenu = false"
            class="block py-4 text-xs tracking-widest uppercase text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors border-b border-slate-200 dark:border-slate-800"
          >
            {{ $t(item.label) }}
          </NuxtLink>
          
          <!-- Mobile Social Icons -->
          <div class="flex items-center gap-4 mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <i :class="[social.icon, 'text-lg']"></i>
            </a>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>
