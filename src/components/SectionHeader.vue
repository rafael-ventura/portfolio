<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<template>
  <div class="section-header">
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff66cc; /* Rosa neon */
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
}
</style>
