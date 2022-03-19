<script>
import { RouterLink, RouterView } from "vue-router";
import HomeView from "@/components/HomeView.vue";
import AboutView from "@/components/AboutView.vue";
import ProjectsView from "@/components/ProjectsView.vue";
import SkillsView from "@/components/SkillsView.vue";

export default {
  components: {
    HomeView,
    AboutView,
    ProjectsView,
    SkillsView,
  },

  data() {
    return {
      currentPage: "Home",
    };
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <nav id="Nav-Bar">
        <li @click="this.currentPage = 'Home'" id="Nav-Item" class="nav_hover">
          HOME
        </li>
        <li
          @click="this.currentPage = 'Skills'"
          id="Nav-Item"
          class="nav_hover"
        >
          SKILLS
        </li>
        <li
          @click="this.currentPage = 'Projects'"
          id="Nav-Item"
          class="nav_hover"
        >
          PROJECTS
        </li>

        <li @click="this.currentPage = 'About'" id="Nav-Item" class="nav_hover">
          ABOUT
        </li>
      </nav>
    </div>
  </header>

  <div>
    <transition name="fade">
      <HomeView v-if="this.currentPage === 'Home'" />
    </transition>
    <transition name="fade">
      <SkillsView v-if="this.currentPage === 'Skills'" />
    </transition>
    <transition name="fade">
      <ProjectsView v-if="this.currentPage === 'Projects'" />
    </transition>
    <transition name="fade">
      <AboutView v-if="this.currentPage === 'About'" />
    </transition>
  </div>
</template>

<style>
@import "@/assets/base.css";

.fade-enter-active {
  transition: all 1s ease, transform 1s ease;
  transition-delay: 1s;
}

.fade-enter-from {
  filter: blur(100px);
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-active {
  transition: all 1s ease, transform 1s ease;
}

.fade-leave-to {
  opacity: 0;
  filter: blur(100px);
}

.fade-leave-from {
  opacity: 1;
}

#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #000;
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
  list-style: none;
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
