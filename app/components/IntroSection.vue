<script setup>
const videoEl = ref(null)
const showPlay = ref(false)
let stopPlaybackUnlock = () => {}

async function tryPlay() {
  const el = videoEl.value
  if (!el) return

  el.muted = true
  el.defaultMuted = true
  el.playsInline = true
  el.setAttribute('playsinline', '')
  el.setAttribute('webkit-playsinline', '')

  try {
    await el.play()
    showPlay.value = false
  } catch {
    showPlay.value = true
  }
}

onMounted(() => {
  const el = videoEl.value
  if (!el) return

  const controller = new AbortController()
  const { signal } = controller

  tryPlay()
  el.addEventListener('canplay', tryPlay, { signal })
  el.addEventListener('playing', () => {
    showPlay.value = false
  }, { signal })
  el.addEventListener(
    'pause',
    () => {
      if (el.ended) return
      showPlay.value = true
    },
    { signal }
  )

  stopPlaybackUnlock = () => controller.abort()
})

onUnmounted(() => {
  stopPlaybackUnlock()
})
</script>

<template>
  <div class="relative h-dvh w-full overflow-hidden" @click="tryPlay">
    <video
      ref="videoEl"
      class="pointer-events-none absolute inset-0 h-full w-full object-cover"
      src="/video/reverso_1c.mp4?v=2"
      poster="/images/reverso_1c.jpg"
      autoplay
      muted
      loop
      playsinline
      webkit-playsinline
      preload="auto"
      disablepictureinpicture
    />
    <div class="absolute left-0 top-0 h-dvh w-full">
      <div class="flex h-full flex-col justify-between px-6 pb-4 pt-4 md:px-8 md:pb-8 md:pt-6">
        <div>
          <h1 class="text-2xl md:text-3xl">reverso<span class="font-serif">collettivo</span></h1>
        </div>
        <div>publishing and production</div>
      </div>
    </div>
    <button
      v-if="showPlay"
      class="absolute bottom-16 left-1/2 -translate-x-1/2 text-sm md:bottom-24"
      type="button"
    >
      Play
    </button>
  </div>
</template>
