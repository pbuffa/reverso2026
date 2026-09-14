<script setup>
const services = [
  'We create journalistic and documentary content for the media industry. Our productions combine high cinematic quality with strong editorial expertise.',
  'We produce branded content for companies and agencies, with a strong focus on distribution strategies to maximize content reach.',
  'We manage the executive production of video, photography, and multimedia projects for media, brands, and institutions, involving our network of authors and skilled professionals.',
  'We provide strategic consulting, particularly in editorial direction and video strategy, helping both traditional and new media position themselves in the market with original, high-quality productions while respecting resources and business models.',
  'We develop editorial products for companies, organizations, and institutions, whether digital, print, or interactive. Our approach offers clients a modern, innovative, and effective strategic model.',
  'We are publishers. Poster is the first media project directly created and managed by the Reversocollettivo team. Our ambition is to establish ourselves in the Italian and international publishing market with this and future projects.'
]
</script>

<template>
  <section>
    <div class="lg:grid lg:grid-cols-2 lg:gap-4">
      <div data-aos="fade-in">
        <h2>What We Do</h2>
      </div>
      <div>
        <ul class="space-y-8 lg:mt-1.5">
          <li v-for="(text, index) in services" :key="index" data-aos="fade-in">
            <span class="font-serif text-2xl lg:text-4xl">{{ String(index + 1).padStart(2, '0') }}</span>
            <p>{{ text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
