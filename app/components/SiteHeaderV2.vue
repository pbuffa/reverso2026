<script setup lang="ts">
const visible = ref(false)
const label = ref('')
const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

let observer: IntersectionObserver | null = null

const onScroll = () => {
  visible.value = window.scrollY > window.innerHeight * 0.6
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  // la sezione "attiva" è quella che attraversa la fascia centrale dello schermo
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) label.value = (e.target as HTMLElement).dataset.label ?? ''
      }
    },
    { rootMargin: '-45% 0px -50% 0px' }
  )
  document.querySelectorAll('[data-section]').forEach((el) => observer!.observe(el))
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between bg-[#1a1a1a] px-4 text-white transition-transform duration-300 md:px-6"
    :class="visible ? 'translate-y-0' : '-translate-y-full'"
  >
    <a href="#" class="font-serif text-lg" @click.prevent="toTop">reversocollettivo</a>

    <Transition name="label" mode="out-in">
      <span :key="label" class="text-sm uppercase">{{ label }}</span>
    </Transition>
  </header>
</template>

<style scoped>
.label-enter-active,
.label-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.label-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.label-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>