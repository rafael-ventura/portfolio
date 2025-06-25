<script setup>
// Props se necessário no futuro
</script>

<template>
  <div class="skills-section">
    <h3 class="section-subtitle">
      <i class="fas fa-code"></i> Habilidades Técnicas
    </h3>
    
    <!-- Categorias de Habilidades -->
    <div class="skills-categories">
      <div class="skill-category">
        <h4 class="category-title">Backend</h4>
        <p class="category-description">
          Desenvolvimento de APIs robustas e sistemas escaláveis com arquiteturas limpas. 
          Implementação de padrões SOLID, DDD e Clean Architecture para garantir 
          manutenibilidade e testabilidade. Experiência em sistemas críticos do setor financeiro 
          com alta disponibilidade e performance.
        </p>
      </div>
      
      <div class="skill-category">
        <h4 class="category-title">Frontend</h4>
        <p class="category-description">
          Criação de interfaces responsivas e otimizadas para sistemas críticos. 
          Desenvolvimento de aplicações web com foco em experiência do usuário e performance. 
          Implementação de componentes reutilizáveis e arquiteturas escaláveis para 
          aplicações complexas do setor financeiro.
        </p>
      </div>
      
      <div class="skill-category">
        <h4 class="category-title">Banco de Dados & Mensageria</h4>
        <p class="category-description">
          Modelagem e administração de bancos de dados relacionais e não relacionais. 
          Implementação de sistemas orientados a eventos com mensageria avançada. 
          Otimização de consultas e procedures para sistemas de alta performance. 
          Experiência em transações financeiras críticas e compliance.
        </p>
      </div>
      
      <div class="skill-category">
        <h4 class="category-title">DevOps & Cloud</h4>
        <p class="category-description">
          Configuração e manutenção de pipelines de CI/CD para entrega contínua. 
          Deploy e orquestração de aplicações em ambientes cloud com alta disponibilidade. 
          Implementação de infraestrutura como código e monitoramento de sistemas críticos. 
          Otimização de custos e performance em ambientes de produção.
        </p>
      </div>

      <div class="skill-category">
        <h4 class="category-title">Automação & Análise de Dados</h4>
        <p class="category-description">
          Desenvolvimento de soluções de automação para processos de negócio utilizando 
          plataformas de workflow. Construção de dashboards dinâmicos e análise de dados 
          para tomada de decisões estratégicas. Implementação de crawlers e sistemas de 
          extração de dados da web para coleta e processamento de informações.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-section {
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

.skills-categories {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-bottom: 3rem;
}

.skill-category {
  background: rgba(33, 41, 59, 0.5);
  padding: 1.2rem;
  border-radius: 12px;
  border: 1px solid rgba(99, 102, 241, 0.2);
  min-height: 200px;
  display: flex;
  flex-direction: column;
}

.category-title {
  font-size: 1.1rem;
  color: var(--secondary);
  margin-bottom: 0.8rem;
  text-align: center;
}

.category-description {
  color: var(--text-secondary);
  line-height: 1.5;
  font-size: 0.9rem;
  flex-grow: 1;
}

/* Responsividade */
@media (max-width: 1200px) {
  .skills-categories {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .skills-categories {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .skills-categories {
    grid-template-columns: 1fr;
  }
  
  .skill-category {
    min-height: auto;
  }
}
</style> 