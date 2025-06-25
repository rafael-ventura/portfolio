<template>
  <header class="navbar">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <a href="#home" @click.prevent="scrollToSection('home')">RS</a>
      </div>

      <!-- Links -->
      <nav>
        <ul>
          <li>
            <a 
              href="#home" 
              @click.prevent="scrollToSection('home')"
              :class="{ 'active': activeSection === 'home' }"
            >
              Início
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              @click.prevent="scrollToSection('about')"
              :class="{ 'active': activeSection === 'about' }"
            >
              Sobre
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              @click.prevent="scrollToSection('experience')"
              :class="{ 'active': activeSection === 'experience' }"
            >
              Experiência
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              @click.prevent="scrollToSection('projects')"
              :class="{ 'active': activeSection === 'projects' }"
            >
              Projetos
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              @click.prevent="scrollToSection('contact')"
              :class="{ 'active': activeSection === 'contact' }"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const activeSection = ref('home');

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 80; // Altura da navbar fixa
    const elementPosition = element.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

const updateActiveSection = () => {
  const sections = ['home', 'about', 'experience', 'projects', 'contact'];
  const scrollPosition = window.scrollY + 100; // Offset para considerar a navbar

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const elementTop = element.offsetTop;
      const elementBottom = elementTop + element.offsetHeight;
      
      if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
        activeSection.value = section;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection);
  updateActiveSection(); // Verificar seção inicial
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection);
});
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #0f172a;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.logo {
  display: flex;
  align-items: center;
  height: 100%;
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--tertiary);
  text-decoration: none;
  transition: color 0.3s;
  line-height: 1;
}

.logo a:hover {
  color: var(--tertiary);
}

nav ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  align-items: center;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

nav ul li a:hover {
  color: var(--secondary);
}

/* Estilo para o link ativo */
nav ul li a.active {
  color: var(--secondary);
}

nav ul li a.active:hover {
  color: #6366f1;
  background-color: rgba(255, 102, 204, 0.2);
}
</style>
