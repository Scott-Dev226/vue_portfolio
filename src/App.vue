<script>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav id="Nav-Bar">
        <RouterLink to="/" id="Nav-Item" class="nav_hover">HOME</RouterLink>
        <RouterLink to="/skills" id="Nav-Item" class="nav_hover"
          >SKILLS</RouterLink
        >
        <RouterLink to="/projects" id="Nav-Item" class="nav_hover"
          >PROJECTS</RouterLink
        >

        <RouterLink to="/about" id="Nav-Item" class="nav_hover"
          >ABOUT</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

#Nav-Bar {
  width: 100%;
  display: flex;
  height: 25px;
  top: 0;
  left: 0;
  position: fixed;
  height: 40px;
  background-color: black;
  z-index: 1000;
  justify-content: flex-end;
  margin-top: 0px;
  align-items: center;
}

#Nav-List {
  list-style: none;
  display: flex;
  width: 100%;
  text-decoration: none;
  background-color: #000;
}

#Nav-Item {
  font-family: "Teko", sans-serif;
  color: white;
  font-size: 1.5rem;
  margin-right: 2.5em;
}

.nav_hover:hover {
  color: rgb(40, 120, 196);
  text-decoration-color: white;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
  text-decoration: underline;
  cursor: pointer;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
