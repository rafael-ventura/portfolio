<script setup>
// Props se necessário no futuro
</script>

<template>
  <!-- Formação Acadêmica -->
  <div class="education-section">
    <h3 class="section-subtitle">
      <i class="fas fa-graduation-cap"></i> Formação Acadêmica
    </h3>
    <div class="education-content">
      <div class="education-item">
        <h4 class="degree">Bacharelado em Sistemas de Informação</h4>
        <p class="institution">UNIRIO</p>
        <p class="period">Abril 2025</p>
        <p class="description">
          Formação sólida em fundamentos da computação, desenvolvimento de software e gestão de sistemas de
          informação.
        </p>
      </div>
    </div>
  </div>

  <div class="education-section">
    <h3 class="section-subtitle">
      <i class="fas fa-graduation-cap"></i> Formação Extracurricular
    </h3>
    <div class="education-content">
      <div class="education-item">
        <h4 class="degree">Cambridge Assessment English Level 1 Certificate</h4>
        <p class="institution">Cambridge</p>
        <p class="period">Janeiro 2018</p>
        <p class="description">
          Certificação de proficiência em inglês, demonstrando habilidades avançadas no idioma.
        </p>
      </div>
    </div>
  </div>

  <!-- Idiomas -->
  <div class="languages-section">
    <h3 class="section-subtitle">
      <i class="fas fa-language"></i> Idiomas
    </h3>
    <div class="languages-content">
      <div class="language-item">
        <span class="language-name">Português</span>
        <span class="language-level">Fluente</span>
      </div>
      <div class="language-item">
        <span class="language-name">Inglês</span>
        <span class="language-level">Avançado</span>
      </div>
      <div class="language-item">
        <span class="language-name">Espanhol</span>
        <span class="language-level">Iniciante</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.education-section {
  margin-bottom: 4rem;
}

.section-subtitle {
  font-size: 1.8rem;
  color: var(--secondary);
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.education-content {
  background: rgba(33, 41, 59, 0.5);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(99, 102, 241, 0.2);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.education-item {
  text-align: center;
}

.degree {
  font-size: 1.3rem;
  color: var(--secondary);
  margin-bottom: 0.5rem;
}

.institution {
  font-size: 1.1rem;
  color: var(--tertiary);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.period {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.description {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Seção de Idiomas */
.languages-section {
  margin-bottom: 4rem;
}

.languages-content {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.language-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
  background: rgba(33, 41, 59, 0.5);
  border-radius: 12px;
  border: 1px solid rgba(99, 102, 241, 0.2);
  min-width: 150px;
}

.language-name {
  font-size: 1.2rem;
  color: var(--secondary);
  font-weight: 500;
}

.language-level {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* Responsividade */
@media (max-width: 768px) {
  .education-content {
    grid-template-columns: 1fr;
  }
  
  .languages-content {
    flex-direction: column;
    align-items: center;
  }
}
</style> 