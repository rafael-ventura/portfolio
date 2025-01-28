<script setup>
import StackSkills from "@/components/ui/StackSkills.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCode, faCertificate } from "@fortawesome/free-solid-svg-icons";

// Dados das habilidades e certificados
const skillsWork = [
  "JavaScript", "TypeScript", "Python", "C#", "Vue.js",
  "Angular", "Node.js", ".NET", "PostgreSQL", "Docker"
];
const certificates = ["AWS Certified", "Microsoft Azure", "Clean Architecture"];
</script>

<template>
  <section class="about-section">
    <div class="text-content">
      <h2>Sobre Mim</h2>
      <p>
        Desenvolvedor Full Stack com mais de 5 anos de experiência em tecnologias como .NET,
        JavaScript e Angular. Apaixonado por resolver problemas complexos, liderar equipes
        e criar aplicações escaláveis.
      </p>
      <p>
        Atualmente, busco oportunidades onde eu possa combinar minhas habilidades técnicas
        com minha paixão por aprender e enfrentar desafios inovadores.
      </p>
    </div>

    <div class="skills-content">
      <StackSkills
          title="Programming & Tools"
          :list="skillsWork"
          :icon="faCode"
      />
      <StackSkills
          title="Certificados"
          :list="certificates"
          :icon="faCertificate"
      />
    </div>
  </section>
</template>

<style scoped>
.about-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.text-content {
  text-align: left;
}

.skills-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

h2 {
  font-size: 2rem;
  color: var(--secondary);
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
}
</style>
