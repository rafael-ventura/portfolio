<template>
  <h4>
    <motion.span
        v-for="(letter, idx) in letters"
        :key="idx"
        :variants="spanVariants"
        initial="visible"
        whileHover="hover"
        style="display: inline-block;"
        :class="className"
    >
      <template v-if="letter === ' '">
        &nbsp;
      </template>
      <template v-else-if="letter === '.'">
        <span class="text-secondary text-6xl">.</span>
      </template>
      <template v-else>
        {{ letter }}
      </template>
    </motion.span>
  </h4>
</template>

<script setup>
import { motion } from "@vueuse/motion";
import { computed } from "vue";

defineProps({
  text: String,
  className: String,
});

const letters = computed(() => text.split(""));

const spanVariants = {
  visible: { y: 0, scaleY: 1 },
  hover: {
    y: [-1, -2, -2.8, 0.9, 0],
    scaleY: [1, 1.3, 0.8, 1, 1.2],
    color: "#6366f1",
  },
};
</script>
