<script setup>
useHead({ meta: [{ name: 'robots', content: 'noindex' }] })
</script>

<template>
  <div>
    <SiteHeaderV2 />
    <IntroSection />
    <div data-section data-label="About"><AboutSection /></div>
    <div data-section data-label="What we do"><ServicesSectionV2 /></div>
    <div data-section data-label="Clients"><ClientsSection /></div>
    <div data-section data-label="Manifesto"><ManifestoSection /></div>
    <AppFooter />
  </div>
</template>