<template>
  <header class="navbar">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <a href="#home">RV</a>
      </div>

      <!-- Links -->
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
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
  color: #fff;
  text-decoration: none;
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
}

nav ul li a:hover {
  color: #6366f1;
}
</style>
