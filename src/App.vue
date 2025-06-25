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
import Navbar from "@/components/ui/Navbar.vue";
import Footer from "@/components/ui/Footer.vue";
import Background from "@/components/ui/BackgroundParticles.vue";
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  width: 100%;
}

main {
  flex: 1;
  position: relative;
  z-index: 1;
  width: 100%;
}

.Background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
</style>
