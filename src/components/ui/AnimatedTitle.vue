<script setup>
import { ref, onMounted } from "vue";

const text = "Bem-vindo!";
const letters = Array.from(text);
const animationState = ref([]);

// Defina cada letra como inativa inicialmente
onMounted(() => {
  animationState.value = letters.map(() => false);

  // Ative as animações com um delay para cada letra
  letters.forEach((_, index) => {
    setTimeout(() => {
      animationState.value[index] = true;
    }, index * 50); // Atraso de 50ms por letra
  });
});
</script>

<template>
  <div class="animated-title">
    <span
        v-for="(letter, index) in letters"
        :key="index"
        :class="[{ active: animationState[index] }, 'letter']"
    >
      {{ letter === " " ? "\u00A0" : letter }}
    </span>
  </div>
</template>

<style scoped>
.animated-title {
  display: flex;
  overflow: hidden;
  font-size: 2rem;
}

.letter {
  opacity: 0;
  transform: translateY(20px);
  display: inline-block;
  transition: all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
}

.letter.active {
  opacity: 1;
  transform: translateY(0);
}
</style>
