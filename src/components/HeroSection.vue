<script setup>
import TypingAnimation from "@/components/ui/AnimatedTyping.vue";
import SocialLinks from "@/components/SocialLinks.vue";

const subtitle = "I'm Rafael";
const description = "Software Engineer and all the cool stuff";
</script>

<template>
  <div class="hero-section">
    <div class="content">
      <!-- Foto de perfil -->
      <div class="photo-section">
        <img
            src="@/assets/profile_pic.jpeg"
            alt="Minha Foto"
            class="profile-picture"
        />
      </div>

      <!-- Texto principal -->
      <div class="text-section">
        <TypingAnimation text="Hello World." :cursorBlink="true" />
        <h2 class="subtitle">{{ subtitle }}</h2>
        <p class="description">{{ description }}</p>

        <!-- Redes Sociais -->
        <SocialLinks />

        <!-- Botão para explorar -->
        <button class="cta-button" @click="$refs.about.scrollIntoView({ behavior: 'smooth' })">
          Explore More
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  padding: 2rem;
  min-height: 100vh;
}

.content {
  display: flex;
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
  border-radius: 50%;
  border: 4px solid #6366f1;
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

/* Texto */
.text-section {
  flex: 2;
  text-align: left;
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
</style>
