<script setup>
import StackSkills from "@/components/ui/StackSkills.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { skills } from "@/utils/data.js";
</script>

<template>
  <section class="about-section">
    <SectionHeader title="Sobre Mim" subtitle="." />
    <p class="about-description">
      Desenvolvedor Full Stack com mais de 5 anos de experiência em tecnologias como .NET,
      JavaScript e Angular. Apaixonado por resolver problemas complexos, liderar equipes
      e criar aplicações escaláveis.
    </p>
    <p class="about-description">
      Atualmente, busco oportunidades onde eu possa combinar minhas habilidades técnicas
      com minha paixão por aprender e enfrentar desafios inovadores.
    </p>
    <StackSkills
        title="Linguagens & Ferramentas"
        :list="skills"
        :icon="faCode"
    />
  </section>
</template>

<style scoped>
.about-section {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.about-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}
</style>
