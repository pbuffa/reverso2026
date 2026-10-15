<script setup lang="ts">
import { services, type Project } from '~/data/services'

const SHEET_TOP = 'clamp(2.5rem, 8dvh, 5rem)'
const HEADER_H = '4rem'
const PROJECT_TOP = `calc(${SHEET_TOP} + ${HEADER_H})`

const serviceOpen = ref(false)
const projectOpen = ref(false)
const serviceIndex = ref(0)
const project = ref<Project | null>(null)

const service = computed(() => services[serviceIndex.value])
const number = computed(() => String(serviceIndex.value + 1).padStart(2, '0'))

const openService = (i: number) => {
    serviceIndex.value = i
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

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src)
</script>

<template>
    <section>
        <div data-aos="fade-in">
            <h2>What We Do</h2>
        </div>

        <ul
            class="mt-16 flex flex-col items-start gap-12 md:mt-40 md:grid md:grid-cols-3 md:grid-rows-[auto_1fr_auto] md:gap-x-4 md:gap-y-0">
            <li v-for="(s, i) in services" :key="s.title"
                class="flex flex-col md:row-span-3 md:grid md:grid-rows-subgrid" data-aos="fade-in">
                <h3 class="text-balance text-2xl leading-tight lg:text-[1.7rem]">
                    <span class="font-serif">{{ String(i + 1).padStart(2, '0') }}.</span>
                    {{ s.title }}
                </h3>

                <div class="mt-6 space-y-2 text-pretty">
                    <p class="mt-6 text-pretty">{{ s.paragraphs[0] }}</p>
                </div>

                <button type="button" class="group flex items-center gap-2 self-start pt-6 text-sm uppercase"
                    @click="openService(i)">
                    <span
                        class="underline underline-offset-4 decoration-1 transition-all duration-300 group-hover:underline-offset-8">
                        {{ s.cta }}
                    </span>
                    <span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </button>
            </li>
        </ul>

        <BottomSheet v-model="serviceOpen" :top="SHEET_TOP" :z="50">
            <div v-if="service">
                <header class="sticky top-0 z-10 flex items-center justify-between bg-[#1a1a1a] px-4 md:px-6"
                    :style="{ height: HEADER_H, cursor: projectOpen ? 'pointer' : undefined }"
                    @click="projectOpen = false">
                    <h3 class="text-2xl md:text-4xl">
                        <span class="font-serif">{{ number }}.</span> {{ service.title }}
                    </h3>
                    <button type="button"
                        class="font-serif text-xs transition-opacity duration-200 hover:opacity-50 md:text-xs"
                        @click.stop="closeAll">
                        close
                    </button>
                </header>

                <div :class="projectOpen && 'invisible'">
                    <div class="px-4 pb-12 pt-8 md:px-6 md:pb-10">
                        <div class="max-w-2xl space-y-8 font-serif text-2xl leading-snug md:text-2xl">
                            <p v-for="(text, i) in service.paragraphs" :key="i">{{ text }}</p>
                        </div>
                    </div>

                    <ul class="grid grid-cols-1 gap-x-4 gap-y-8 px-4 pb-24 md:grid-cols-3 md:px-6">
                        <li v-for="p in service.projects" :key="p.title">
                            <ProjectCard :title="p.title" :image="p.image" @select="openProject(p)" />
                        </li>
                    </ul>
                </div>
            </div>
        </BottomSheet>

        <BottomSheet v-model="projectOpen" :top="PROJECT_TOP" :z="60">
            <div v-if="project">
                <header
                    class="sticky top-0 z-10 flex items-start justify-between gap-6 bg-[#1a1a1a] px-4 py-4 shadow-[0_-2px_0_#1a1a1a] md:px-6">
                    <h3 class="text-3xl leading-none md:text-3xl">{{ project.title }}</h3>

                    <div class="flex shrink-0 gap-8 md:gap-24">
                        <div class="text-sm md:text-xs">
                            <p v-if="project.client">Client: {{ project.client }}</p>
                            <p v-if="project.year">Year: {{ project.year }}</p>
                        </div>
                        <button type="button"
                            class="font-serif text-xs transition-opacity duration-200 hover:opacity-50 md:text-xs"
                            @click="projectOpen = false">
                            close
                        </button>
                    </div>
                </header>

                <ProjectDetail :project="project" />
            </div>
        </BottomSheet>
    </section>
</template>