<script setup>
import { categories } from '~/utils/portfolio'

const active = ref(null)
const overlayOpen = ref(false)

function openProject(project) {
  active.value = project
  overlayOpen.value = true
}

function close() {
  overlayOpen.value = false
}

function onOverlayAfterLeave() {
  active.value = null
  if (import.meta.client) document.body.style.overflow = ''
}

watch(overlayOpen, (open) => {
  if (!import.meta.client) return
  if (open) document.body.style.overflow = 'hidden'
})

function onKeydown(event) {
  if (event.key === 'Escape' && overlayOpen.value) close()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section class="pt-0">
    <h2 data-aos="fade-in">Portfolio</h2>

    <div class="space-y-16 lg:space-y-24">
      <div v-for="category in categories" :key="category.id" data-aos="fade-in">
        <h3 class="mb-8 font-serif text-2xl lg:text-4xl">
          {{ category.title }}
        </h3>
        <ul class="grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="project in category.projects" :key="project.slug">
            <button
              class="group w-full cursor-pointer text-left"
              type="button"
              @click="openProject(project)"
            >
              <img
                :src="project.thumb"
                :alt="project.title"
                class="mb-3 aspect-[3/2] w-full object-cover transition-opacity group-hover:opacity-80"
              >
              <span class="block">{{ project.title }}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <Transition name="overlay-fade" @after-leave="onOverlayAfterLeave">
    <div
      v-if="overlayOpen && active"
      class="fixed inset-0 z-50 overflow-y-auto bg-[#1a1a1a] text-[#f2f2f2]"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="'case-study-title'"
    >
      <div class="flex items-center justify-between px-6 py-4 md:px-8 md:py-6">
        <p class="leading-none">reverso<span class="font-serif">collettivo</span></p>
        <button
          id="case-study-close"
          class="text-xs leading-none focus-visible:underline"
          type="button"
          @click="close"
        >
          Close
        </button>
      </div>

      <article class="px-6 pb-24 pt-8 md:px-8 md:pb-32 md:pt-12">
        <h2 id="case-study-title" class="mb-4">
          {{ active.title }}
        </h2>
        <p class="mb-10 text-sm opacity-70">
          <span>{{ active.client }}</span>
          <span v-if="active.year"> · {{ active.year }}</span>
        </p>

        <div class="mb-12 max-w-prose space-y-4">
          <p v-for="(paragraph, index) in active.body" :key="index">
            {{ paragraph }}
          </p>
        </div>

        <div class="space-y-4">
          <img
            v-for="(image, index) in active.images"
            :key="image"
            :src="image"
            :alt="`${active.title} ${index + 1}`"
            class="w-full"
          >
        </div>
      </article>
    </div>
  </Transition>
</template>

<style scoped>
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 180ms ease-out;
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}
</style>
