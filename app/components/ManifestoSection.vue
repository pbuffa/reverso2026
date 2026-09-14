<script setup>
const points = [
  {
    title: '1. Freedom of the Press',
    text: 'We believe that information plays a crucial role in a country’s development and growth. That’s why we stand for journalistic freedom. This is the main reason we chose to become publishers.'
  },
  {
    title: '2. A New Vision of Communication',
    text: 'We aim to move beyond the traditional approach to communication, which focuses solely on promoting products and services. Instead, we embrace a new model that integrates the physical, intellectual, and creative resources of the organizations we collaborate with.'
  },
  {
    title: '3. The Power of Images',
    text: 'We use visual communication tools, such as photography and video, with the awareness that words and images each have their own space and impact.'
  },
  {
    title: '4. People First',
    text: 'We believe in humanity and its many ways of being present in the world—its creative power, wisdom, and artistic expression.'
  },
  {
    title: '5. The Medium is the Message',
    text: 'We see form and content as inseparable, knowing that ideas take shape through the way they are communicated.'
  },
  {
    title: '6. A Documentary Approach',
    text: 'We believe that places, social dynamics, and human experiences bring about change, often before it becomes fully visible. That’s why we focus on investigative storytelling, documenting reality as it unfolds.'
  },
  {
    title: '7. A Different Perspective is Possible',
    text: 'We believe in the importance of shifting perspectives, offering alternative, non-didactic interpretations. Reverso observes the world from every angle—even the most unexpected ones.'
  }
]
</script>

<template>
  <section class="bg-[url(/images/dsrt.webp)] bg-cover bg-center bg-no-repeat bg-blend-multiply bg-black/80">
    <h2 data-aos="fade-in">Our Manifesto</h2>
    <div class="lg:w-1/2">
      <ul class="space-y-8">
        <li v-for="point in points" :key="point.title" data-aos="fade-in">
          <span class="font-serif">{{ point.title }}</span>
          <p>{{ point.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
