<template>
  <div class="cards-list">
    <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :link="project.link"
    />
  </div>
</template>

<script setup>
import ProjectCard from "./Projects/ProjectCard.vue";

const projects = [
  { id: 1, title: "Projeto 1", description: "Descrição do projeto 1", link: "#" },
  { id: 2, title: "Projeto 2", description: "Descrição do projeto 2", link: "#" },
  { id: 3, title: "Projeto 3", description: "Descrição do projeto 3", link: "#" },
];
</script>

<style scoped>
.cards-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
</style>
