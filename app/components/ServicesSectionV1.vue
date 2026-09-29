<script setup lang="ts">
import { services, type Project } from '~/data/services'

const STRIP = '15rem'

const serviceOpen = ref(false)
const projectOpen = ref(false)
const serviceIndex = ref(0)
const project = ref<Project | null>(null)

const service = computed(() => services[serviceIndex.value])
const number = computed(() => String(serviceIndex.value + 1).padStart(2, '0'))

const scrolled = ref(false)

const openService = (i: number) => {
    serviceIndex.value = i
    scrolled.value = false
    serviceOpen.value = true
}
const openProject = (p: Project) => {
    project.value = p
    projectOpen.value = true
}

const closeAll = () => {
    projectOpen.value = false
    serviceOpen.value = false
}

watch(serviceOpen, (open) => {
    if (import.meta.client) document.body.style.overflow = open ? 'hidden' : ''
})

const onKeydown = (e: KeyboardEvent) => {
    if (e.key !== 'Escape') return
    if (projectOpen.value) projectOpen.value = false
    else if (serviceOpen.value) serviceOpen.value = false
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown)
    if (import.meta.client) document.body.style.overflow = ''
})
</script>

<template>
    <section>
        <div data-aos="fade-in">
            <h2>What We Do</h2>
        </div>

        <ul class="mt-16 flex flex-col items-start gap-12 md:mt-40 md:grid md:grid-cols-3 md:gap-4">
            <li v-for="(s, i) in services" :key="s.title" data-aos="fade-in">
                <h3 class="text-2xl lg:text-4xl">
                    <span class="font-serif">{{ String(i + 1).padStart(2, '0') }}.</span>
                    {{ s.title }}
                </h3>

                <div class="mt-6 space-y-2">
                    <p v-for="(text, j) in s.paragraphs" :key="j">{{ text }}</p>
                </div>

                <button type="button" class="mt-6 uppercase underline" @click="openService(i)">
                    See projects
                </button>
            </li>
        </ul>

        <BottomSheet v-model="serviceOpen" top="10rem" :z="50" @scroll="scrolled = $event > 8">
            <div v-if="service">
                <header class="sticky top-0 z-10 flex h-16 items-center justify-between px-4 md:px-6" :class="projectOpen || scrolled
                    ? 'bg-[#1a1a1a]'
                    : 'bg-gradient-to-b from-black/60 to-transparent'" :style="projectOpen ? { cursor: 'pointer' } : undefined"
                    @click="projectOpen = false">
                    <h3 class="text-2xl md:text-4xl">
                        <span class="font-serif">{{ number }}.</span> {{ service.title }}
                    </h3>
                    <button type="button" class="font-serif" @click.stop="closeAll">close</button>
                </header>

                <img :src="service.image" :alt="service.title" class="-mt-16 h-[60vh] w-full object-cover md:h-[80vh]">

                <div class="px-4 py-12 md:px-6 md:py-20">
                    <div class="max-w-4xl space-y-8 font-serif text-2xl leading-snug md:text-4xl">
                        <p v-for="(text, i) in service.paragraphs" :key="i">{{ text }}</p>
                    </div>
                </div>

                <ul class="grid grid-cols-1 gap-x-4 gap-y-8 px-4 pb-24 md:grid-cols-3 md:px-6">
                    <li v-for="p in service.projects" :key="p.title">
                        <ProjectCard :title="p.title" :image="p.image" @select="openProject(p)" />
                    </li>
                </ul>
            </div>
        </BottomSheet>

        <BottomSheet v-model="projectOpen" :top="STRIP" :z="60">
            <div v-if="project">
                <header class="sticky top-0 z-10 flex items-start justify-between gap-6 bg-[#1a1a1a] px-4 py-4 md:px-6">
                    <h3 class="text-3xl leading-none md:text-5xl">{{ project.title }}</h3>

                    <div class="flex shrink-0 gap-8 md:gap-24">
                        <div class="text-sm md:text-base">
                            <p v-if="project.client">Client: {{ project.client }}</p>
                            <p v-if="project.year">Year: {{ project.year }}</p>
                        </div>
                        <button type="button" class="font-serif text-sm md:text-base" @click="projectOpen = false">
                            close
                        </button>
                    </div>
                </header>

                <ProjectDetail :project="project" />
            </div>
        </BottomSheet>
    </section>
</template>