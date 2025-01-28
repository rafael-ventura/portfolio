<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const socialMediaLinks = [
  {
    url: "https://www.linkedin.com/in/rafael-ventura",
    icon: faLinkedin,
    label: "LinkedIn",
  },
  {
    url: "https://github.com/rafael-ventura",
    icon: faGithub,
    label: "GitHub",
  },
  {
    url: "/assets/rafael-ventura-cv.pdf",
    icon: faFilePdf,
    label: "Currículo",
  },
];
</script>

<template>
  <div class="social-links">
    <a
        v-for="(link, index) in socialMediaLinks"
        :key="index"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="social-icon"
    >
      <FontAwesomeIcon :icon="link.icon" class="icon" />
    </a>
  </div>
</template>

<style scoped>
.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}

.social-icon {
  color: var(--text-primary);
  font-size: 1.5rem;
  transition: transform 0.3s;
}

.social-icon:hover {
  transform: scale(1.1);
  color: var(--secondary);
}
</style>
