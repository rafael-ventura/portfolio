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
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: var(--text-primary);
  overflow: hidden;
}

.sections {
  margin-top: -1rem;
}
</style>
