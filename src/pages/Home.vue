<script setup>
import HeroSection from "@/components/HeroSection.vue";
import About from "@/pages/About.vue";
import Projects from "@/pages/Projects.vue";
import Contact from "@/pages/Contact.vue";
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Próximas Seções -->
    <div ref="about" class="sections">
      <About />
      <Projects />
      <Contact />
    </div>
  </div>
</template>

<style scoped>
.home {
  background-color: var(--primary); /* Cor consistente */
  color: var(--text-primary);
  overflow: hidden;
  width: 100%; /* Largura total */
  max-width: 1200px; /* Mesma largura das seções */
  margin: 0 auto; /* Centraliza a Home */
  padding-top: 80px; /* Compensa a navbar fixa */
}

.sections {
  margin-top: 0;
}
</style>
