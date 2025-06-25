<script setup>
import TypingAnimation from "@/components/Home/AnimatedTyping.vue";

const subtitle = "Sou o Rafael Siqueira";
const description = "Engenheiro de Software e Desenvolvedor Full Stack Pleno";

const navigateToAbout = () => {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const navbarHeight = 80; // Altura da navbar fixa
    const elementPosition = aboutSection.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};
</script>

<template>
  <div class="hero-section">
    <!-- Camada de fundo com efeito vidro -->
    <div class="glass-background"></div>

    <!-- Conteúdo principal -->
    <div class="content">
      <!-- Texto principal -->
      <div class="text-section">
        <TypingAnimation text="Hello World." :cursorBlink="true" />
        <h2 class="subtitle">{{ subtitle }}</h2>
        <p class="description">{{ description }}</p>

        <!-- Botão para explorar -->
        <button class="cta-button" @click="navigateToAbout">
          Explorar Mais
        </button>
      </div>

      <!-- Foto de perfil -->
      <div class="photo-section">
        <img
            src="@/assets/profile_pic.jpeg"
            alt="Minha Foto"
            class="profile-picture"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 3rem 1rem;
  overflow: hidden;
}

/* Fundo com efeito vidro */
.glass-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.7); /* Fundo escuro com leve transparência */
  backdrop-filter: blur(8px); /* Efeito de vidro */
  z-index: -1; /* Atrás do conteúdo principal */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Borda sutil */
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px; /* Largura consistente */
  margin: 0 auto; /* Centraliza o conteúdo */
  gap: 2rem;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    text-align: center;
  }
}

/* Foto */
.photo-section {
  flex: 1;
  display: flex;
  justify-content: center;
}

.profile-picture {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 4px solid var(--tertiary);
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

/* Texto */
.text-section {
  flex: 1.5;
  text-align: left;
}

.subtitle {
  font-size: 2.5rem;
  font-family: "Lato", sans-serif;
  margin-top: 1.5rem;
  font-weight: 600;
}

.description {
  font-size: 1.5rem;
  margin-top: 1rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

.cta-button {
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: var(--tertiary);
  color: var(--text-primary);
  border: none;
  border-radius: var(--border-radius);
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.cta-button:hover {
  background: var(--primary);
  color: var(--secondary);
  border: 1px solid var(--secondary);
}
</style>
