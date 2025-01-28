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
    <h3 class="stack-title">
      <FontAwesomeIcon :icon="icon" /> {{ title }}
    </h3>
    <div class="skills-grid">
      <div
          v-for="(item, index) in list"
          :key="index"
          class="skill-item fade-in"
          :style="{ animationDelay: `${index * 100}ms`, '--hover-color': item.color }"
      >
        <div class="skill-content">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stack-skills {
  text-align: center;
  margin: 1rem 0;
}

.stack-title {
  font-size: 1.5rem;
  color: var(--secondary);
  margin-bottom: 1rem;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); /* Cards mais compactos */
  gap: 0.75rem;
  justify-items: center;
}

.skill-item {
  position: relative;
  padding: 0.5rem; /* Reduzimos o padding */
  border-radius: 8px;
  text-align: center;
  color: var(--text-primary);
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
  opacity: 0; /* Inicialmente invisível */
  transform: translateY(20px); /* Para criar o efeito de fade-in */
  background-color: transparent; /* Fundo transparente */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Borda sutil para os cards */
  transition: transform 0.3s, background-color 0.3s, opacity 0.3s, box-shadow 0.3s;
  overflow: hidden; /* Esconde qualquer conteúdo fora do card */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.skill-item:hover {
  transform: scale(1.05); /* Pequeno aumento ao passar o mouse */
  background-color: var(--hover-color); /* Cor dinâmica */
  opacity: 0.2; /* Opacidade suave no hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); /* Realce da sombra */
}

.skill-content {
  position: relative;
  z-index: 2; /* Mantém o texto acima do fundo */
}

/* Animação de entrada */
.fade-in {
  animation: fadeIn 0.6s ease forwards;
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
