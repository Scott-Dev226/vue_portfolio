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
  height: 300px;
  display: flex;
  justify-content: center;
  color: white;
  display: flex;
  flex-direction: column;
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
