<script setup>
import { ref, onMounted } from "vue";

const text = "Explore projetos incríveis!";
const letters = Array.from(text);
const animationState = ref([]);

onMounted(() => {
  animationState.value = letters.map(() => false);

  letters.forEach((_, index) => {
    setTimeout(() => {
      animationState.value[index] = true;
    }, index * 40);
  });
});
</script>

<template>
  <div class="animated-subtitle">
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
.animated-subtitle {
  display: flex;
  font-size: 1.5rem;
}

.letter {
  opacity: 0;
  transform: translateX(-10px);
  display: inline-block;
  transition: all 0.3s ease-out;
}

.letter.active {
  opacity: 1;
  transform: translateX(0);
}
</style>
