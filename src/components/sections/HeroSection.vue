<script setup lang="ts">
import { galleryImages } from '~/composables/useGallery'

const emit = defineEmits<{
  openLightbox: [index: number]
}>()
</script>

<template>
  <section class="pt-24 pb-12">
    <div class="max-w-[1600px] mx-auto px-4 lg:px-8">
      <!-- Single 12-column grid - spans come from image data -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-2 md:auto-rows-[45vw] lg:auto-rows-[35vw] xl:auto-rows-[550px]">
        <GalleryImage
          v-for="(img, idx) in galleryImages"
          :key="img.id"
          :src="img.src"
          :alt="img.alt"
          :index="idx"
          :col-span="img.span"
          @click="emit('openLightbox', idx)"
        />
      </div>
    </div>
  </section>
</template>
