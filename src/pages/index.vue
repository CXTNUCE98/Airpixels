<script setup lang="ts">
import { galleryImages } from '~/composables/useGallery'

// Lightbox state
const isLightboxOpen = ref(false)
const currentImageIndex = ref(0)

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  isLightboxOpen.value = true
}

const closeLightbox = () => {
  isLightboxOpen.value = false
}

const navigateImage = (index: number) => {
  currentImageIndex.value = index
}
</script>

<template>
  <div>
    <HeroSection @open-lightbox="openLightbox" />
    
    <ImageLightbox
      :images="galleryImages"
      :current-index="currentImageIndex"
      :is-open="isLightboxOpen"
      @close="closeLightbox"
      @navigate="navigateImage"
    />
  </div>
</template>
