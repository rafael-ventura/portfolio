<template>
  <div class="custom-card">
    <slot></slot>
  </div>
</template>

<script setup>
</script>

<style scoped>
.custom-card {
  border: 1px solid var(--secondary);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: var(--text-primary);
  color: var(--primary);
}

.custom-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.15);
}
</style>
