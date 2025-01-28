<script setup>
import { FaGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <div class="project-card">
    <img :src="project.image" alt="Project Thumbnail" class="project-image" />
    <div class="project-details">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
      <div class="project-links">
        <a
            v-if="project.linkOnline"
            :href="project.linkOnline"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link"
        >
          Demo →
        </a>
        <a
            v-if="project.linkGithub"
            :href="project.linkGithub"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link"
        >
          <FontAwesomeIcon :icon="FaGithub" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background-color: var(--third);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-details {
  padding: 1rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--text-primary);
}

.project-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.project-link {
  color: var(--secondary);
  font-weight: bold;
  text-decoration: none;
}

.project-link:hover {
  color: var(--primary);
}
</style>
