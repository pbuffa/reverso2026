<script setup lang="ts">
defineProps<{
  title: string
  image?: string
}>()

defineEmits<{
  (e: 'select'): void
}>()
</script>

<template>
  <button type="button" class="block w-full text-left hover:opacity-50" @click="$emit('select')">
    <div class="aspect-[3/2] w-full overflow-hidden bg-neutral-800">
      <img v-if="image" :src="image" :alt="title" class="h-full w-full object-cover" loading="lazy">
    </div>
    <p class="mt-3 text-lg">{{ title }}</p>
  </button>
</template>