<script setup>
const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/rafael", icon: "fa-linkedin" },
  { name: "GitHub", url: "https://github.com/rafael", icon: "fa-github" },
  { name: "Twitter", url: "https://twitter.com/rafael", icon: "fa-twitter" },
];
</script>

<template>
  <div class="social-links">
    <a
        v-for="(link, index) in socialLinks"
        :key="index"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
    >
      <i :class="`fab ${link.icon}`"></i>
    </a>
  </div>
</template>

<style scoped>
.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.social-link {
  color: var(--text-primary);
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-link:hover {
  color: var(--secondary);
}
</style>
