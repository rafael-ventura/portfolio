<script setup>
import ProjectCard from "@/components/Projects/ProjectCard.vue";
import SectionHeader from "@/components/ui/SectionHeader.vue";
import { projects } from "@/utils/data.js";
</script>

<template>
  <section class="projects-section">
    <SectionHeader title="Projetos" subtitle="Meus trabalhos mais recentes" />
    <div class="projects-grid">
      <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
      />
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 6rem 0 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}
</style>
