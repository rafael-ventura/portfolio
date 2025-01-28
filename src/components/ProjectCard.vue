<template>
  <CustomCard>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <a :href="link" target="_blank" class="project-link">Ver Projeto</a>
  </CustomCard>
</template>

<script setup>
import CustomCard from "./CustomCard.vue";

defineProps({
  title: String,
  description: String,
  link: String,
});
</script>

<style scoped>
.project-link {
  display: inline-block;
  margin-top: 1rem;
  color: var(--secondary);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: var(--primary);
}
</style>
