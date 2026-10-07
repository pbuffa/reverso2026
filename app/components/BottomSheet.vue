<script setup lang="ts">
defineProps<{
  modelValue: boolean
  top?: string
  z?: number
}>()

const emit = defineEmits<{
  (e: 'scroll', scrollTop: number): void
}>()
</script>

<template>
  <Teleport to="body">
    <Transition name="sheet">
      <div
        v-if="modelValue"
        class="fixed inset-x-0 bottom-0 overflow-y-auto overscroll-contain bg-[#1a1a1a] text-white shadow-[0_-8px_30px_rgba(0,0,0,0.5)]"
        :style="{ top: top ?? '10rem', zIndex: z ?? 50 }"
        @scroll="emit('scroll', ($event.target as HTMLElement).scrollTop)"
      >
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.sheet-enter-active,
.sheet-leave-active {
  transition: transform 0.45s cubic-bezier(0.32, 0.72, 0, 1);
}
.sheet-enter-from,
.sheet-leave-to {
  transform: translateY(100%);
}
</style>