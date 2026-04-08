<script setup lang="ts">
interface Props {
  src: string
  alt: string
  index: number
  colSpan?: number
}

const props = withDefaults(defineProps<Props>(), {
  colSpan: 4
})
const emit = defineEmits<{ click: [index: number] }>()

const isVisible = ref(false)
const imageRef = ref<HTMLElement | null>(null)
const hasError = ref(false)

// Column span class for 12-column grid
const spanClass = computed(() => {
  if (props.colSpan === 6) return 'md:col-span-6'
  if (props.colSpan === 3) return 'md:col-span-3'
  return 'md:col-span-4'
})

// Scroll reveal
onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.05, rootMargin: '100px' }
  )
  if (imageRef.value) observer.observe(imageRef.value)
  onUnmounted(() => observer.disconnect())
})

const handleError = () => { hasError.value = true }
</script>

<template>
  <div
    ref="imageRef"
    :class="[
      'cursor-zoom-in group relative overflow-hidden bg-slate-100 dark:bg-slate-800',
      spanClass,
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    ]"
    :style="{ transitionDelay: `${(index % 3) * 80}ms` }"
    @click="emit('click', index)"
  >
    <div v-if="hasError" class="flex items-center justify-center min-h-[200px] text-slate-400 text-sm">
      Image failed to load
    </div>
    <img
      v-else
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
      :loading="index < 6 ? 'eager' : 'lazy'"
      @error="handleError"
    />
    <div class="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-500 pointer-events-none mix-blend-overlay" />
  </div>
</template>

<style scoped>
.opacity-0 { opacity: 0; }
.opacity-100 { opacity: 1; }
.translate-y-0 { transform: translateY(0); }
.translate-y-12 { transform: translateY(3rem); }
</style>
