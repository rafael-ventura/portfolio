<script setup>
import CustomButton from "@/components/ui/CustomButton.vue";

const email = "raafadev@gmail.com";
const links = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/raf4ael-ventura/",
    icon: "faLinkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/rafael-ventura",
    icon: "faGithub",
  },
  {
    name: "Baixar Currículo",
    url: "/assets/curriculo.pdf", // Coloque o caminho do PDF do currículo aqui
    icon: "faDownload",
  },
];
</script>

<template>
  <section class="contact" id="contact">
    <h2 class="section-title">Contato.</h2>
    <p class="description">
      Quer saber mais ou trabalhar comigo? Fique à vontade para entrar em contato!
    </p>

    <!-- Botão para Enviar E-mail -->
    <CustomButton :label="email" @click="window.location.href = `mailto:${email}`" />

    <!-- Links para Redes Sociais -->
    <div class="social-links">
      <a
          v-for="(link, index) in links"
          :key="index"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
      >
        <i :class="`fab ${link.icon}`"></i> {{ link.name }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact {
  text-align: center;
  padding: 2rem;
  background-color: var(--primary);
  color: var(--text-primary);
}

.section-title {
  font-size: 2rem;
  color: var(--secondary);
  margin-bottom: 1rem;
}

.description {
  margin: 1rem 0;
  font-size: 1.2rem;
  color: var(--text-secondary);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: var(--secondary);
  text-decoration: none;
  transition: all 0.3s;
}

.social-link:hover {
  color: var(--primary);
}
</style>
