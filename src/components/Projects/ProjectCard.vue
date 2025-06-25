<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

defineProps({
  project: Object,
});
</script>

<template>
  <div class="project-card">
    <img :src="project.image" :alt="project.title" class="project-image" />
    <h3 class="project-title">{{ project.title }}</h3>
    <p class="project-description">{{ project.description }}</p>
    <ul class="tech-stack">
      <li v-for="(tech, index) in project.techStack" :key="index" class="tech-item">
        {{ tech }}
      </li>
    </ul>
    <div class="project-links">
      <a
          v-if="project.linkGithub"
          :href="project.linkGithub"
          target="_blank"
          rel="noopener noreferrer"
          class="link-button"
      >
        <FontAwesomeIcon :icon="faGithub" /> GitHub
      </a>
      <a
          v-if="project.linkOnline"
          :href="project.linkOnline"
          target="_blank"
          rel="noopener noreferrer"
          class="link-button"
      >
        <FontAwesomeIcon :icon="faExternalLinkAlt" /> Live Demo
      </a>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: var(--third);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.project-description {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-item {
  background: var(--secondary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.link-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--secondary);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease;
}

.link-button:hover {
  background: var(--primary);
}
</style>
