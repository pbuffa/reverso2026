<script setup lang="ts">
import type { Project } from '~/data/services'

const props = defineProps<{ project: Project }>()

const items = computed(() =>
  (props.project.gallery ?? []).map((g) => (typeof g === 'string' ? { src: g } : g))
)

const videoFailed = ref(false)
</script>

<template>
  <div>
    <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
      <div>
        <video
          v-if="project.video && !videoFailed"
          :src="project.video"
          :poster="project.image"
          class="aspect-[4/3] w-full object-cover"
          autoplay
          muted
          loop
          playsinline
          @error="videoFailed = true"
        />
        <NuxtImg
          v-else
          :src="project.image"
          :alt="project.title"
          width="1000"
          densities="x1"
          class="aspect-[4/3] w-full object-cover"
        />
      </div>

      <div class="px-4 py-8 md:px-6 md:py-2">
        <p v-if="project.intro" class="max-w-3xl font-serif text-3xl leading-tight md:text-2xl">
          {{ project.intro }}
        </p>

        <div v-if="project.body?.length" class="mt-8 space-y-6 md:mt-10">
          <p v-for="(text, i) in project.body" :key="i">{{ text }}</p>
        </div>
      </div>
    </div>

    <div v-if="items.length" class="mt-2 grid grid-cols-1 gap-2 pb-6 md:grid-cols-2">
      <NuxtImg
        v-for="(it, i) in items"
        :key="i"
        :src="it.src"
        :alt="`${project.title} ${i + 1}`"
        :width="it.wide ? 1600 : 1000"
        densities="x1"
        class="aspect-[16/9] w-full object-cover"
        :class="it.wide && 'md:col-span-2 md:aspect-[16/9]'"
        loading="lazy"
      />
    </div>
  </div>
</template>