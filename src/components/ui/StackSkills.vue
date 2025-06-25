<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, computed } from "vue";
import SkillFilters from "./SkillFilters.vue";

const props = defineProps({
  title: String,
  list: Array,
  icon: Object,
  categories: Array,
});

const selectedCategory = ref("all");

const filteredSkills = computed(() => {
  if (selectedCategory.value === "all") {
    return props.list;
  }
  return props.list.filter(skill => skill.category === selectedCategory.value);
});

const handleCategoryChange = (categoryId) => {
  selectedCategory.value = categoryId;
};
</script>

<template>
  <div class="stack-skills">
    <h3 class="stack-title">
      <FontAwesomeIcon :icon="icon" /> {{ title }}
    </h3>
    
    <!-- Filtros -->
    <SkillFilters 
      v-if="categories"
      :categories="categories"
      :selected-category="selectedCategory"
      @category-change="handleCategoryChange"
    />
    
    <div class="skills-grid">
      <div
          v-for="(item, index) in filteredSkills"
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
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.75rem;
  justify-items: center;
  max-width: 100%;
}

.skill-item {
  position: relative;
  padding: 0.75rem 0.5rem;
  border-radius: 8px;
  text-align: center;
  color: var(--text-primary);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s, background-color 0.3s, opacity 0.3s, box-shadow 0.3s;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  line-height: 1.2;
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

/* Responsividade */
@media (max-width: 1200px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
}

@media (max-width: 900px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  
  .skill-item {
    font-size: 0.75rem;
    padding: 0.6rem 0.4rem;
  }
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    gap: 0.5rem;
  }
  
  .skill-item {
    font-size: 0.7rem;
    padding: 0.5rem 0.3rem;
    min-height: 35px;
  }
  
  .stack-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
  
  .skill-item {
    font-size: 0.65rem;
    padding: 0.4rem 0.2rem;
  }
}
</style>
