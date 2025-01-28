<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  text: { type: String, required: true },
  cursorBlink: { type: Boolean, default: true },
  typingSpeed: { type: Number, default: 150 },
});

const displayedText = ref("");
const typingIndex = ref(0);
const showCursor = ref(false);
const isTyping = ref(true);

let typingInterval = null;

const startTyping = () => {
  displayedText.value = "";
  typingIndex.value = 0;
  isTyping.value = true;
  showCursor.value = true;

  typingInterval = setInterval(() => {
    if (typingIndex.value < props.text.length) {
      displayedText.value += props.text[typingIndex.value];
      typingIndex.value++;
    } else {
      clearInterval(typingInterval);
      isTyping.value = false;
      if (!props.cursorBlink) showCursor.value = false;
    }
  }, props.typingSpeed);
};

watch(() => props.text, () => startTyping());
onMounted(() => startTyping());
onUnmounted(() => clearInterval(typingInterval));
</script>

<template>
  <span class="typing-animation">
    <span>{{ displayedText }}</span>
    <span v-if="showCursor" class="cursor">|</span>
  </span>
</template>

<style scoped>
.typing-animation {
  display: inline-block;
  font-family: "Raleway", sans-serif;
  font-size: 3rem;
  font-weight: bold;
  color: var(--secondary);
}

.cursor {
  display: inline-block;
  width: 10px;
  color: var(--secondary);
  animation: blink 0.6s steps(2, start) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
