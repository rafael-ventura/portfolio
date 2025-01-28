<template>
  <section class="projects" id="projects">
    <h2>Projetos</h2>
    <div class="project-list">
      <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :github="project.github"
          :demo="project.demo"
      />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "@/components/ProjectCard.vue";

const projects = [
  {
    title: "SkyCast",
    description: "Web app de previsão do tempo em tempo real.",
    image: "/images/skycast.png",
    github: "https://github.com/user/skycast",
    demo: "https://skycast-demo.com",
  },
  {
    title: "ChatGenius",
    description: "Plataforma de conversa usando modelos de linguagem avançados.",
    image: "/images/chatgenius.png",
    github: "https://github.com/user/chatgenius",
    demo: "https://chatgenius.com",
  },
];
</script>

<style scoped>
.projects {
  text-align: center;
  padding: 2rem;
  background-color: var(--secondary);
  color: var(--text-primary);
}

.projects h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
</style>
