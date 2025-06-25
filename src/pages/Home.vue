<script setup>
import { onMounted } from 'vue';
import HeroSection from "@/components/Home/HeroSection.vue";
import About from "@/pages/About.vue";
import Experience from "@/pages/Experience.vue";
import Projects from "@/pages/Projects.vue";
import Contact from "@/pages/Contact.vue";

onMounted(() => {
  document.title = 'Rafael Siqueira - Portfólio';
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', 'Portfólio de Rafael Siqueira, Engenheiro de Software e Desenvolvedor Full Stack. Conheça minha trajetória, projetos e formas de contato.');
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Portfólio de Rafael Siqueira, Engenheiro de Software e Desenvolvedor Full Stack. Conheça minha trajetória, projetos e formas de contato.';
    document.head.appendChild(meta);
  }
});
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section id="home">
      <HeroSection />
    </section>

    <!-- About Section -->
    <section id="about">
      <About />
    </section>

    <!-- Experience Section -->
    <section id="experience">
      <Experience />
    </section>

    <!-- Projects Section -->
    <section id="projects">
      <Projects />
    </section>

    <!-- Contact Section -->
    <section id="contact">
      <Contact />
    </section>
  </div>
</template>

<style scoped>
.home {
  background-color: var(--primary); /* Cor consistente */
  color: var(--text-primary);
  overflow-x: hidden;
  width: 100%; /* Largura total */
  margin: 0 auto; /* Centraliza a Home */
  padding-top: 80px; /* Compensa a navbar fixa */
}

section {
  scroll-margin-top: 80px; /* Compensa a navbar fixa para scroll suave */
  width: 100%;
}

/* Garantir que cada seção ocupe pelo menos a altura da viewport */
section:not(#home) {
  min-height: 100vh;
}
</style>
