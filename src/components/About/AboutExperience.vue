<script setup>
// Props se necessário no futuro
</script>

<template>
  <div class="experience-section">
    <h3 class="section-subtitle">
      <i class="fas fa-briefcase"></i> Experiência Profissional
    </h3>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-content">
          <h4 class="job-title">Desenvolvedor Full Stack</h4>
          <p class="company">iUUL • Setembro 2024 - Presente</p>
          <ul class="job-description">
            <li>Mentoria e Liderança Técnica de 3 turmas (2 backend e 1 frontend) em .NET/C#, Angular e Node.js</li>
            <li>Gerenciamento de sprints, kanbans e backlog utilizando Azure DevOps como Product Owner e Scrum Master</li>
            <li>Configuração de pipelines CI/CD em AWS e Azure, otimizando fluxos de entrega contínua</li>
            <li>Suporte a aplicações em produção, otimizando infraestrutura AWS e migrando de Amplify para S3 + CloudFront</li>
            <li>Implementação de Clean Architecture garantindo manutenibilidade e eficiência das soluções</li>
            <li>Trabalho em equipes multidisciplinares aplicando metodologias ágeis (Scrum)</li>
          </ul>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-content">
          <h4 class="job-title">Desenvolvedor Full Stack Pleno</h4>
          <p class="company">JJ4Tech • Janeiro 2023 - Março 2024</p>
          <ul class="job-description">
            <li>Desenvolvimento de microsserviços para sistemas de pagamentos instantâneos FED Now</li>
            <li>Implementação de mensageria avançada com RabbitMQ e IBM MQ</li>
            <li>Modelagem de sistemas conforme ISO 20022 para transações financeiras globais</li>
            <li>Projeto e implementação de sistemas orientados a eventos com Clean Architecture, SOLID e DDD</li>
            <li>Estruturação e manutenção do ambiente DevOps centralizando gestão de microsserviços</li>
            <li>Deploy e orquestração em AWS (ECS, EC2, S3, CloudFront) garantindo alta disponibilidade</li>
            <li>Implantação de testes unitários e integração, reduzindo falhas entre 62-68%</li>
          </ul>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-content">
          <h4 class="job-title">Desenvolvedor Full Stack</h4>
          <p class="company">SINQIA • Fevereiro 2021 - Outubro 2022</p>
          <ul class="job-description">
            <li>Desenvolvimento fullstack em .NET e JavaScript (Angular e Vue) para sistemas bancários críticos</li>
            <li>Otimização do portal de gestão de carteiras de empréstimos</li>
            <li>Modelagem e administração de bancos de dados relacionais e não relacionais (SQL Server e MongoDB)</li>
            <li>Criação e manutenção de Stored Procedures complexas para transações financeiras</li>
            <li>Atuação como revisor de código (pull requests) promovendo boas práticas</li>
            <li>Suporte contínuo a sistemas críticos do banco, resolvendo incidentes com agilidade</li>
          </ul>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-content">
          <h4 class="job-title">Desenvolvedor Full Stack</h4>
          <p class="company">Itaú • Novembro 2018 - Janeiro 2021</p>
          <ul class="job-description">
            <li>Desenvolvimento de aplicações fullstack com .NET e Angular para sistemas bancários críticos</li>
            <li>Gerenciação e manutenção da estrutura de aplicações bancárias com compliance financeiro</li>
            <li>Otimização de procedures e índices SQL, melhorando desempenho em relatórios financeiros</li>
            <li>Colaboração em times ágeis (Scrum) com plannings, code reviews e entregas contínuas</li>
            <li>Refatoração do sistema de carteiras de investimentos para LGPD, resultando em 20% mais eficiência</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-section {
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

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--secondary);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 2rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -0.5rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
  background: var(--secondary);
  border-radius: 50%;
}

.timeline-content {
  background: rgba(33, 41, 59, 0.5);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.job-title {
  font-size: 1.3rem;
  color: var(--secondary);
  margin-bottom: 0.5rem;
}

.company {
  font-size: 1rem;
  color: var(--tertiary);
  margin-bottom: 1rem;
  font-weight: 500;
}

.job-description {
  list-style: none;
  padding: 0;
}

.job-description li {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.job-description li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--secondary);
}
</style> 