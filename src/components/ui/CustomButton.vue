<template>
  <button class="custom-button" @click="handleClick">
    {{ label }}
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  label: String,
});

const handleClick = () => {
  console.log("Botão clicado!");
};
</script>

<style scoped>
.custom-button {
  background-color: var(--secondary);
  color: var(--text-primary);
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.custom-button:hover {
  background-color: var(--primary);
}
</style>
