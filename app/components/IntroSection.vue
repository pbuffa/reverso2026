<script setup>
const videoEl = ref(null)
let stopPlaybackUnlock = () => {}

function tryPlay() {
  const el = videoEl.value
  if (!el) return
  el.muted = true
  el.defaultMuted = true
  el.playsInline = true
  el.setAttribute('playsinline', '')
  el.setAttribute('webkit-playsinline', '')
  el.play()?.catch(() => {})
}

onMounted(() => {
  const el = videoEl.value
  if (!el) return

  const controller = new AbortController()
  const { signal } = controller

  tryPlay()
  el.addEventListener('canplay', tryPlay, { signal })
  document.addEventListener('touchstart', tryPlay, { once: true, passive: true, signal })
  document.addEventListener('click', tryPlay, { once: true, signal })
  document.addEventListener(
    'visibilitychange',
    () => {
      if (document.visibilityState === 'visible') tryPlay()
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
  <div class="relative h-dvh w-full overflow-hidden">
    <video
      ref="videoEl"
      class="absolute inset-0 h-full w-full object-cover"
      poster="/images/reverso_1c.jpg"
      autoplay
      muted
      loop
      playsinline
      webkit-playsinline
      preload="auto"
      disablepictureinpicture
    >
      <source src="/video/reverso_1c.mp4" type="video/mp4">
    </video>
    <div class="absolute left-0 top-0 h-dvh w-full">
      <div class="flex h-full flex-col justify-between px-6 pb-4 pt-4 md:px-8 md:pb-8 md:pt-6">
        <div>
          <h1 class="text-2xl md:text-3xl">reverso<span class="font-serif">collettivo</span></h1>
        </div>
        <div>publishing and production</div>
      </div>
    </div>
  </div>
</template>
