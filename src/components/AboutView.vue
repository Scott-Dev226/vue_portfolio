<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
</script>

<template>
  <div class="about">
    <h2 class="section_heading">Contact</h2>
    <p>Email: Scottni219@gmail.com</p>
    <div id="cta-holder">
      <a href="https://github.com/Scott-Dev226">
        <i class="fab fa-brands fa-github-square fa-5x" id="contact_logo"></i>
      </a>
    </div>
  </div>
</template>

<style scoped>
.about {
  height: 400px;
  display: flex;
  justify-content: center;
  color: white;
  display: flex;
  flex-direction: column;
  opacity: 0;
  filter: blur(50px);
  transform: translateY(50px);
  margin-bottom: 50px;
}

#cta-holder {
  width: 100%;
  display: flex;
  justify-content: center;
}

#contact_logo {
  color: #1aa9d7;
}

#contact_logo:hover {
  transition: all 0.75s ease;
  opacity: 0.5;
}

p {
  font-size: 1.5rem;
}
@media (min-width: 1024px) {
}
</style>
