<script setup>
// Props se necessário no futuro
</script>

<template>
  <div class="intro-section">
    <div class="intro-content">
      <div class="intro-text">
        <p class="intro-description">
          Desenvolvedor Full Stack com 7 anos de experiência no setor financeiro, especializado em .NET,
          JavaScript e arquitetura escalável. Atuei no desenvolvimento de sistemas críticos de previdência,
          investimentos e pagamentos, desde aplicações monolíticas até microsserviços e sistemas orientados a eventos.
        </p>
        <p class="intro-description">
          Atualmente, sou Engenheiro de Software e mentor na iuUL, liderando equipes e desafios técnicos
          em um programa de residência. Possuo forte atuação na gestão de sprints, melhoria de processos
          e suporte estratégico ao desenvolvimento, sempre promovendo um ambiente colaborativo e de crescimento
          contínuo.
        </p>
      </div>
      <div class="intro-stats">
        <div class="stat-item">
          <span class="stat-number">7+</span>
          <span class="stat-label">Anos de Experiência</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro-section {
  margin-bottom: 4rem;
}

.intro-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.intro-text {
  text-align: left;
}

.intro-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.intro-stats {
  display: flex;
  flex-direction: column;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--secondary);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* Responsividade */
@media (max-width: 768px) {
  .intro-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .intro-text {
    text-align: center;
  }
}
</style> 