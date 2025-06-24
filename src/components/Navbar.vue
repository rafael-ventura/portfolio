<template>
  <header class="navbar">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <router-link to="/">RV</router-link>
      </div>

      <!-- Links -->
      <nav>
        <ul>
          <li>
            <router-link 
              to="/" 
              :class="{ 'active': $route.path === '/' }"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link 
              to="/about" 
              :class="{ 'active': $route.path === '/about' }"
            >
              About
            </router-link>
          </li>
          <li>
            <router-link 
              to="/projects" 
              :class="{ 'active': $route.path === '/projects' }"
            >
              Projects
            </router-link>
          </li>
          <li>
            <router-link 
              to="/contact" 
              :class="{ 'active': $route.path === '/contact' }"
            >
              Contact
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
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
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--tertiary);
  text-decoration: none;
  transition: color 0.3s;
}

.logo a:hover {
  color: var(--tertiary);
}

nav ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
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
