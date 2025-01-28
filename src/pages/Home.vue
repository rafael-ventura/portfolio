<script setup>
import {ref, onMounted, onUnmounted} from "vue";
import SocialLinks from "@/components/SocialLinks.vue";
import About from "@/pages/About.vue";
import Projects from "@/pages/Projects.vue";
import Contact from "@/pages/Contact.vue";

// Animação de digitação e piscar
const typingText = "Hello World.";
const subtitle = "I'm Rafael";
const description = "Software Engineer and all the cool stuff";

const typingIndex = ref(0);
const displayedText = ref("");
const isBlinking = ref(false);
const showCursor = ref(false);

let typingInterval = null;
let blinkInterval = null;

const startTypingAnimation = () => {
  typingIndex.value = 0;
  displayedText.value = "";
  isBlinking.value = false;

  // Animação de digitação
  typingInterval = setInterval(() => {
    if (typingIndex.value < typingText.length) {
      displayedText.value += typingText[typingIndex.value];
      typingIndex.value++;
    } else {
      clearInterval(typingInterval);

      // Animação de piscar com cursor
      let blinkCount = 0;
      blinkInterval = setInterval(() => {
        showCursor.value = !showCursor.value;
        blinkCount++;
        if (blinkCount >= 6) {
          clearInterval(blinkInterval);
          showCursor.value = false;
        }
      }, 300);
    }
  }, 150);
};

onMounted(() => {
  startTypingAnimation();

  // Reseta a animação ao rolar de volta para a seção
  const handleScroll = () => {
    const homeSection = document.querySelector(".home");
    if (
        homeSection &&
        homeSection.getBoundingClientRect().top < window.innerHeight / 2
    ) {
      startTypingAnimation();
    }
  };

  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  clearInterval(typingInterval);
  clearInterval(blinkInterval);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="home">
    <div class="content">
      <!-- Seção da Foto -->
      <div class="photo-section">
        <img
            src="../assets/profile_pic.jpeg"
            alt="Minha Foto"
            class="profile-picture"
        />
      </div>

      <!-- Seção de Texto -->
      <div class="text-section">
        <h1 class="typing-title">
          <span v-for="(char, index) in displayedText" :key="index">
            <span
                v-if="char === 'W' && typingIndex >= typingText.indexOf('World')"
                class="highlight"
            >
              {{ typingText.slice(6, 11) }}
            </span>
            <span v-else-if="!typingText.slice(6, 11).includes(char)">
              {{ char }}
            </span>
          </span>
          <span v-if="showCursor" class="cursor">|</span>
        </h1>
        <h2 class="subtitle">{{ subtitle }}</h2>
        <p class="description">{{ description }}</p>

        <!-- Redes Sociais -->
        <SocialLinks/>

        <!-- Rolagem para próximas seções -->
        <button class="cta-button" @click="$refs.about.scrollIntoView({ behavior: 'smooth' })">
          Explore More
        </button>
      </div>
    </div>

    <!-- Próximas Seções -->
    <div ref="about" class="sections">
      <About/>
      <Projects/>
      <Contact/>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  min-height: 100vh;
  padding: 2rem;
  color: var(--text-primary);
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
}

/* Foto */
.photo-section {
  flex: 1;
  display: flex;
  justify-content: center;
}

.profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%; /* Bordas arredondadas */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Efeito moderno */
  object-fit: cover;
}

/* Texto */
.text-section {
  flex: 2;
  text-align: left;
}

.typing-title {
  font-size: 3rem;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  color: var(--secondary);
  display: flex;
  gap: 0.2rem;
}

.subtitle {
  font-size: 2rem;
  font-family: "Lato", sans-serif;
  margin-top: 1rem;
}

.description {
  font-size: 1.25rem;
  margin-top: 0.5rem;
  color: var(--text-secondary);
}

/* Destaque e Animações */
.highlight {
  font-family: "Lato", sans-serif;
  color: #ff66cc; /* Rosa neon */
  font-weight: bold;
}

.cursor {
  display: inline-block;
  width: 10px;
  background-color: var(--secondary);
  animation: blink 0.6s steps(2, start) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

/* Botão de Chamada */
.cta-button {
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--secondary);
  color: var(--text-primary);
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.cta-button:hover {
  background: var(--primary);
  color: var(--secondary);
}

/* Seções */
.sections {
  margin-top: 2rem;
}
</style>
