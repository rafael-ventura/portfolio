<template>
  <div id="app">
    <!-- Fundo Animado -->
    <Background />

    <!-- Conteúdo Principal -->
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Background from "@/components/ui/BackgroundParticles.vue";
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative; /* Para que os filhos respeitem a hierarquia do background */
}

main {
  flex: 1;
  position: relative; /* Garante que o conteúdo fique acima do fundo animado */
  z-index: 1;
}

.Background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* O fundo animado deve ficar atrás de tudo */
}
</style>
