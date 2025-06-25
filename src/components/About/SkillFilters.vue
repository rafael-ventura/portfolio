<script setup>
import { ref } from 'vue';

const props = defineProps({
  categories: Array,
  selectedCategory: String,
});

const emit = defineEmits(['category-change']);

const selectCategory = (categoryId) => {
  emit('category-change', categoryId);
};
</script>

<template>
  <div class="skill-filters">
    <div class="filters-container">
      <button
        v-for="category in categories"
        :key="category.id"
        @click="selectCategory(category.id)"
        :class="[
          'filter-button',
          { 'active': selectedCategory === category.id }
        ]"
        :style="{ '--category-color': category.color }"
      >
        {{ category.name }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.skill-filters {
  margin: 2rem 0;
  text-align: center;
}

.filters-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  max-width: 100%;
}

.filter-button {
  padding: 0.5rem 1rem;
  border: 2px solid var(--category-color);
  background: transparent;
  color: var(--category-color);
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.filter-button:hover {
  background: var(--category-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.filter-button.active {
  background: var(--category-color);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Responsividade */
@media (max-width: 768px) {
  .filters-container {
    gap: 0.3rem;
  }
  
  .filter-button {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .filter-button {
    padding: 0.3rem 0.6rem;
    font-size: 0.75rem;
  }
}
</style> 