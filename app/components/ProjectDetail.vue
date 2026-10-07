<script setup lang="ts">
import type { Project } from '~/data/services'

const props = defineProps<{ project: Project }>()

const items = computed(() =>
  (props.project.gallery ?? []).map((g) => (typeof g === 'string' ? { src: g } : g))
)
</script>

<template>
  <div>
    <img :src="project.image" :alt="project.title" class="h-auto w-full">

    <div class="px-4 py-12 md:px-6 md:py-10">
      <p v-if="project.intro" class="max-w-3xl font-serif text-3xl leading-tight md:text-2xl">
        {{ project.intro }}
      </p>

      <div v-if="project.body?.length" class="mt-12 md:mt-10 md:grid md:grid-cols-4">
        <div class="space-y-6 md:col-span-3 md:col-start-2">
          <p v-for="(text, i) in project.body" :key="i">{{ text }}</p>
        </div>
      </div>
    </div>

    <div v-if="items.length" class="grid grid-cols-1 gap-2 pb-6 md:grid-cols-2">
      <img v-for="(it, i) in items" :key="i" :src="it.src" :alt="`${project.title} ${i + 1}`"
        class="aspect-[3/2] w-full object-cover" :class="it.wide && 'md:col-span-2 md:aspect-[21/9]'" loading="lazy">
    </div>
  </div>
</template>