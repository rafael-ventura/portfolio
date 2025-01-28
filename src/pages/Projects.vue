<script setup>
import ProjectCard from "@/components/cards/ProjectCard.vue";
import SectionHeader from "@/components/ui/SectionHeader.vue";

// Dados de projetos
const projects = [
  {
    title: "SkyCast",
    image: "/assets/images/cast.png",
    linkGithub: "https://github.com/bjclayton/SkyCast",
    linkOnline: "https://sky-cast-taupe.vercel.app/",
    description:
        "SkyCast is a web app that provides real-time weather conditions and forecasts for selected cities.",
    techStack: ["React", "Tailwind CSS", "Firebase", "Weather API"],
  },
  {
    title: "ORA-API",
    image: "/assets/images/ora.png",
    linkGithub: null,
    linkOnline: "https://ora-api-documentation.vercel.app/",
    description:
        "A RESTful API that provides access to a wide range of Bible-related information, including versions, books, verses, and search functionality.",
    techStack: ["JavaScript", "Express", "Mongoose"],
  },
  // Adicione mais projetos conforme necessário
];
</script>

<template>
  <section class="projects-section">
    <SectionHeader title="Projects." subtitle="Most recent works" />
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
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}
</style>
