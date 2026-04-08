<script setup lang="ts">
interface Props {
  images: { src: string; alt: string }[]
  currentIndex: number
  isOpen: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
  navigate: [index: number]
}>()

const { images, currentIndex, isOpen } = toRefs(props)

// Navigation functions
const goToPrevious = () => {
  const newIndex = (currentIndex.value - 1 + images.value.length) % images.value.length
  emit('navigate', newIndex)
}

const goToNext = () => {
  const newIndex = (currentIndex.value + 1) % images.value.length
  emit('navigate', newIndex)
}

const handleClose = () => {
  emit('close')
}

// Keyboard navigation
const handleKeydown = (e: KeyboardEvent) => {
  if (!isOpen.value) return
  switch (e.key) {
    case 'ArrowLeft':
      e.preventDefault()
      goToPrevious()
      break
    case 'ArrowRight':
      e.preventDefault()
      goToNext()
      break
    case 'Escape':
      e.preventDefault()
      handleClose()
      break
  }
}

// Touch/swipe support
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX = e.changedTouches[0].screenX
  const diff = touchStartX - touchEndX
  const swipeThreshold = 50
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) goToNext()
    else goToPrevious()
  }
}

// Lifecycle
watch(isOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-[9999] bg-white/95 flex items-center justify-center"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <!-- Click areas: left half = prev, right half = next -->
        <div 
          class="absolute inset-y-0 left-0 w-1/2 cursor-pointer z-20"
          @click="goToPrevious"
          aria-label="Previous image"
        ></div>
        <div 
          class="absolute inset-y-0 right-0 w-1/2 cursor-pointer z-20"
          @click="goToNext"
          aria-label="Next image"
        ></div>

        <!-- Close button - top right (higher z-index) -->
        <button 
          @click.stop="handleClose"
          class="absolute top-6 right-6 z-30 text-slate-800 hover:text-slate-600 transition-colors p-2"
          aria-label="Close"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Arrow indicators (decorative, pointer-events-none) -->
        <div class="absolute left-6 z-30 text-slate-400 pointer-events-none">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div class="absolute right-6 z-30 text-slate-400 pointer-events-none">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <!-- Image with scale animation -->
        <div class="max-w-[85vw] max-h-[85vh] flex items-center justify-center p-8 z-10">
          <Transition name="image-fade" mode="out-in">
            <img
              :key="currentIndex"
              :src="images[currentIndex].src"
              :alt="images[currentIndex].alt"
              class="max-w-full max-h-[80vh] object-contain"
              @click.stop
            />
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.image-fade-enter-active {
  transition: all 0.3s ease-out;
}

.image-fade-leave-active {
  transition: all 0.2s ease-in;
}

.image-fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.image-fade-leave-to {
  opacity: 0;
  transform: scale(1.02);
}
</style>
