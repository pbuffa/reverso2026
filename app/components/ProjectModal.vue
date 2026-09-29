<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
  title: string
  client?: string
  year?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const close = () => emit('update:modelValue', false)

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}

watch(
  () => props.modelValue,
  (open) => {
    if (!import.meta.client) return
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) window.addEventListener('keydown', onKeydown)
    else window.removeEventListener('keydown', onKeydown)
  }
)

onBeforeUnmount(() => {
  if (!import.meta.client) return
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <transition name="modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 bg-black/80 p-2 md:p-4"
        @click.self="close"
      >
        <div class="modal-panel mx-auto h-full max-w-7xl overflow-y-auto bg-[#1a1a1a] text-white">
          <header
            class="sticky top-0 z-10 flex items-start justify-between gap-6 bg-[#1a1a1a] px-4 py-4 md:px-6"
          >
            <h3 class="text-2xl leading-none md:text-3xl">{{ title }}</h3>

            <div class="flex shrink-0 gap-8 md:gap-24">
              <div class="text-sm md:text-xs">
                <p v-if="client">Client: {{ client }}</p>
                <p v-if="year">Year: {{ year }}</p>
              </div>
              <button type="button" class="font-serif text-sm md:text-xs" @click="close">
                close
              </button>
            </div>
          </header>

          <slot />
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-active .modal-panel,
.modal-leave-active .modal-panel {
  transition: transform 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-panel,
.modal-leave-to .modal-panel {
  transform: translateY(2rem);
}
</style>