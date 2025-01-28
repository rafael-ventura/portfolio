<template>
  <nav class="navbar">
    <div class="container">
      <h1 class="logo">Rafael Ventura</h1>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">Sobre</router-link></li>
        <li><router-link to="/projects">Projetos</router-link></li>
        <li><router-link to="/contact">Contato</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
  padding: 1rem 2rem;
  color: var(--text-primary);
}

.navbar .logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--secondary);
}

.navbar .nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
}

.navbar .nav-links li {
  font-size: 1rem;
}

.navbar .nav-links a {
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.navbar .nav-links a:hover {
  color: var(--secondary);
}
</style>
