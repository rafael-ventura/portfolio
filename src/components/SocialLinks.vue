<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"; // Ícones de redes sociais
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"; // Ícone para o currículo

const socialMediaLinks = [
  {
    url: "https://www.linkedin.com/in/rafael-ventura", // Altere para seu LinkedIn
    icon: faLinkedin,
    label: "LinkedIn",
  },
  {
    url: "https://github.com/rafael-ventura", // Altere para seu GitHub
    icon: faGithub,
    label: "GitHub",
  },
  {
    url: "../assets/rafael-ventura-cv.pdf", // Altere para o link do seu currículo
    icon: faFilePdf,
    label: "Currículo",
  },
];
</script>

<template>
  <div class="social-links">
    <div
        v-for="(link, index) in socialMediaLinks"
        :key="index"
        class="social-link"
    >
      <a
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="icon-wrapper"
          :aria-label="link.label"
      >
        <FontAwesomeIcon :icon="link.icon" class="icon" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.social-links {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.social-link .icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: transform 0.2s, background-color 0.3s;
  color: white;
}

.social-link .icon-wrapper:hover {
  transform: scale(1.1);
  background-color: var(--primary);
}

.icon {
  font-size: 1.5rem;
}
</style>
