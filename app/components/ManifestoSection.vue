<script setup>
const points = [
  {
    title: '1. Freedom of the press',
    text: 'We believe that information plays a crucial role in the development and growth of a country. This is why we believe in the freedom of journalism. It is the main reason why we decided to become publishers.'
  },
  {
    title: '2. A new vision of communication',
    text: 'We aim to go beyond the traditional view of communication based solely on the promotion of products and services. We seek to adopt a new approach that synthesizes the physical, intellectual, and productive resources of the entities we engage with.'
  },
  {
    title: '3. The power of imagery',
    text: 'We use visual communication tools, such as photography and video, aware that there is space for words and another for images.'
  },
  {
    title: '4. People first',
    text: 'We believe in the human being and their expressions of presence in the world, in their creative strength, wisdom, and art.'
  },
  {
    title: '5. The medium is the message',
    text: 'We believe that form and substance are one, and that ideas move forward on the legs of their communication.'
  },
  {
    title: '6. A documentary approach',
    text: 'We believe that places, social, and human phenomena carry transformations within them, even before these transformations become clearly visible. This is why we believe it is essential to tell a story of investigation into reality, primarily through documentation.'
  },
  {
    title: '7. Another point of view is possible',
    text: 'We believe in the importance of reversing the perspective on things, offering an alternative and non-didactic reading. Reverso observes the world from all angles, even the most unexpected.'
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
