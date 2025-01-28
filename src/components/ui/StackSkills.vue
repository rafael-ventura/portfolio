<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps({
  title: String,
  list: Array,
  icon: Object,
});
</script>

<template>
  <div class="stack-skills">
    <h3>
      <FontAwesomeIcon :icon="icon" /> {{ title }}
    </h3>
    <div class="skills-grid">
      <div
          v-for="(item, index) in list"
          :key="index"
          class="skill-item fade-in"
          :style="{ animationDelay: `${index * 100}ms` }"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.stack-skills {
  text-align: left;
}

h3 {
  font-size: 1.25rem;
  color: var(--secondary);
  margin-bottom: 1rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 0.5rem;
}

.skill-item {
  padding: 0.5rem 1rem;
  background-color: var(--third);
  border-radius: 8px;
  text-align: center;
  color: var(--text-primary);
  font-size: 0.875rem;
  font-weight: bold;
  transition: background-color 0.3s;
  opacity: 0; /* Inicialmente invisível */
}

.skill-item:hover {
  background-color: var(--secondary);
  color: var(--primary-text);
}

/* Animação de entrada */
.fade-in {
  animation: fadeIn 0.8s ease forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
