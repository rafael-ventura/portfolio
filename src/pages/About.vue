<script setup>
import StackSkills from "@/components/ui/StackSkills.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import { faCode, faGraduationCap, faBriefcase, faLightbulb, faRocket } from "@fortawesome/free-solid-svg-icons";
import { skills, skillCategories } from "@/utils/data.js";
</script>

<template>
  <section id="about" class="about-section">
    <!-- Header Principal -->
    <SectionHeader title="About Me" subtitle="Conheça minha jornada" />

    <!-- Introdução -->
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

    <!-- Experiência Profissional -->
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
              <li>Gerenciamento de sprints, kanbans e backlog utilizando Azure DevOps como Product Owner e Scrum Master
              </li>
              <li>Configuração de pipelines CI/CD em AWS e Azure, otimizando fluxos de entrega contínua</li>
              <li>Suporte a aplicações em produção, otimizando infraestrutura AWS e migrando de Amplify para S3 +
                CloudFront</li>
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

    <!-- Habilidades Técnicas -->
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

      <!-- Linguagens e Ferramentas -->
      <div class="tools-section">
        <StackSkills title="Linguagens & Ferramentas" :list="skills" :icon="faCode" :categories="skillCategories" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 6rem 1rem 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
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

/* Seção de Introdução */
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

/* Seção de Experiência */
.experience-section {
  margin-bottom: 4rem;
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

/* Seção de Educação */
.education-section {
  margin-bottom: 4rem;
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

/* Seção de Habilidades */
.skills-section {
  margin-bottom: 4rem;
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

.tools-section {
  margin-top: 2rem;
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
  .intro-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .intro-text {
    text-align: center;
  }
  
  .education-content {
    grid-template-columns: 1fr;
  }
  
  .languages-content {
    flex-direction: column;
    align-items: center;
  }
  
  .skills-categories {
    grid-template-columns: 1fr;
  }
  
  .skill-category {
    min-height: auto;
  }
}
</style>
