<template>
  <section class="contact" id="contact">
    <h2>Contato</h2>
    <p>
      Quer saber mais ou trabalhar comigo? Entre em contato!
    </p>
    <CustomButton label="Enviar Mensagem" />
  </section>
</template>

<script setup>
import CustomButton from "@/components/ui/CustomButton.vue";
</script>

<style scoped>
.contact {
  text-align: center;
  padding: 2rem;
  background-color: var(--primary);
  color: var(--text-primary);
}

.contact h2 {
  font-size: 2rem;
  color: var(--secondary);
}

.contact p {
  margin: 1rem 0;
  font-size: 1.2rem;
}
</style>
