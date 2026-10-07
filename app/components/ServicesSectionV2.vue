<script setup lang="ts">

import { services, type Project } from '~/data/services'

const isModalOpen = ref(false)
const selectedProject = ref<Project | null>(null)

const openProject = (project: Project) => {
  selectedProject.value = project
  isModalOpen.value = true
}
</script>

<template>
  <section>
    <div data-aos="fade-in">
      <h2>What We Do</h2>
    </div>

    <div class="mt-16 space-y-24 md:mt-32 md:space-y-40">
      <article v-for="(service, index) in services" :key="service.title" data-aos="fade-in">
        <h3 class="text-2xl lg:text-4xl">
          <span class="font-serif">{{ String(index + 1).padStart(2, '0') }}.</span>
          {{ service.title }}
        </h3>

        <div class="mt-6 max-w-xl space-y-4 md:w-1/2">
          <p v-for="(text, i) in service.paragraphs" :key="i">{{ text }}</p>
        </div>

        <ul class="mt-10 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3">
          <li v-for="project in service.projects" :key="project.title">
            <ProjectCard :title="project.title" :image="project.image" @select="openProject(project)" />
          </li>
        </ul>
      </article>
    </div>

    <ProjectModal v-model="isModalOpen" :title="selectedProject?.title ?? ''" :client="selectedProject?.client"
      :year="selectedProject?.year">
      <ProjectDetail v-if="selectedProject" :project="selectedProject" />
    </ProjectModal>
  </section>
</template>