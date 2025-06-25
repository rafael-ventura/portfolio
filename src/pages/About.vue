<script setup>
import { onMounted } from 'vue';
import StackSkills from "@/components/About/StackSkills.vue";
import SectionHeader from "@/components/ui/SectionHeader.vue";
import AboutIntro from "@/components/About/AboutIntro.vue";
import AboutEducation from "@/components/About/AboutEducation.vue";
import AboutSkills from "@/components/About/AboutSkills.vue";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { skills, skillCategories } from "@/utils/data.js";

onMounted(() => {
  document.title = 'Sobre Mim | Rafael Siqueira - Portfólio';
});
</script>

<template>
  <section id="about" class="about-section">
    <!-- Header Principal -->
    <SectionHeader title="Sobre Mim" subtitle="Conheça minha jornada" />

    <!-- Introdução -->
    <AboutIntro />

    <!-- Formação Acadêmica e Idiomas -->
    <AboutEducation />

    <!-- Habilidades Técnicas -->
    <AboutSkills />

    <!-- Linguagens e Ferramentas -->
    <div class="tools-section">
      <StackSkills title="Linguagens & Ferramentas" :list="skills" :icon="faCode" :categories="skillCategories" />
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 6rem 1rem 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
}

.tools-section {
  margin-top: 2rem;
}
</style>
