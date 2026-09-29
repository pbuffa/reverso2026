<script setup lang="ts">
import type { Project } from '~/data/services'

defineProps<{ project: Project }>()
</script>

<template>
  <div>
    <img :src="project.image" :alt="project.title" class="h-auto w-full">

    <div class="px-4 py-12 md:px-6 md:py-20">
      <p v-if="project.intro" class="max-w-5xl font-serif text-3xl leading-tight md:text-5xl">
        {{ project.intro }}
      </p>

      <div v-if="project.body?.length" class="mt-12 md:mt-20 md:grid md:grid-cols-4">
        <div class="space-y-6 md:col-span-3 md:col-start-2">
          <p v-for="(text, i) in project.body" :key="i">{{ text }}</p>
        </div>
      </div>
    </div>

    <div v-if="project.gallery?.length" class="columns-1 gap-4 px-4 pb-6 md:columns-2 md:px-6">
      <img
        v-for="(src, i) in project.gallery"
        :key="i"
        :src="src"
        :alt="`${project.title} ${i + 1}`"
        class="mb-4 h-auto w-full break-inside-avoid"
        loading="lazy"
      >
    </div>
  </div>
</template>