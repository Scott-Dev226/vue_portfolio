<script>
import { RouterLink, RouterView } from "vue-router";
import HomeView from "@/components/HomeView.vue";
import AboutView from "@/components/AboutView.vue";
import ProjectsView from "@/components/ProjectsView.vue";
import SkillsView from "@/components/SkillsView.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    this.scrollTriggerFire();
    gsap.from(".main_container_cls", {
      duration: 1,
      opacity: 0,
      filter: "blur(80px)",
    });

    gsap.from(".nav_hover", {
      duration: 1,
      opacity: 0,
      x: 300,
      delay: 1,
      stagger: 0.2,
    });
  },

  methods: {
    scrollTriggerFire: function () {
      const boxes = gsap.utils.toArray(".img_scroll");
      const anim = gsap.to(".img_scroll", {
        filter: "blur(0px)",
        opacity: 1,
        x: 0,
        paused: true,
        stagger: 0.2,
      });

      ScrollTrigger.create({
        trigger: ".img_scroll",
        start: "top 70%",
        onEnter: () => anim.play(),
      });

      ScrollTrigger.create({
        trigger: ".img_scroll",
        start: "top 90%",
        onLeaveBack: () => anim.pause(0),
      });
    },
    myGoto: function (refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    },
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <nav id="Nav-Bar">
        <li v-on:click="this.myGoto('home')" id="Nav-Item" class="nav_hover">
          PROJECTS
        </li>

        <li v-on:click="this.myGoto('skills')" id="Nav-Item" class="nav_hover">
          SKILLS
        </li>

        <li v-on:click="this.myGoto('about')" id="Nav-Item" class="nav_hover">
          CONTACT
        </li>
      </nav>
    </div>
  </header>

  <div id="main_container" class="main_container_cls">
    <div ref="home">
      <HomeView ref="home" />
    </div>
    <div ref="projects">
      <ProjectsView ref="projects" />
    </div>

    <div ref="skills">
      <SkillsView ref="skills" />
    </div>

    <div ref="about">
      <AboutView />
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

.fade-enter-active {
  transition: all 0.75s ease-in-out, transform 0.75s ease-in-out;
  transition-delay: 0.5s;
}

.fade-enter-from {
  filter: blur(100px);
  opacity: 0;
  filter: blur(100px);
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-active {
  transition: all 0.75s ease-in-out, transform 0.75s ease-in-out;
}

.fade-leave-to {
  opacity: 0;
  filter: blur(100px);
}

.fade-leave-from {
  opacity: 1;
}

.section_heading {
  font-family: "Playfair Display", serif;
  color: white;
  background-color: #000;
  font-size: 5rem;
}

#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #000;
  font-weight: normal;
}

#main_container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #000;
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
  width: 100vw;
  display: flex;
  height: 60px;
  top: 0;
  left: 0;
  position: fixed;

  background-color: black;
  z-index: 2000;
  justify-content: flex-end;
  margin-top: 0px;
  align-items: center;
  margin-bottom: 2px solid black;
}

#Nav-List {
  list-style: none;
  display: flex;
  width: 100%;
  text-decoration: none;
  background-color: #000;
}

#Nav-Item {
  font-family: "Saira Condensed", sans-serif;
  color: white;
  font-size: 1.35rem;
  margin-right: 2em;
  list-style: none;
  display: flex;
  position: relative;

  padding-bottom: 3px;
}

#Nav-Item::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background-color: rgb(12, 144, 151);

  transform: scaleX(0);
  transition: 0.25s ease-in-out;
}

#Nav-Item:hover::before {
  width: 100%;

  transform: scaleX(1);
}

#Nav-Item:hover {
  color: rgb(22, 189, 240);
  text-decoration-color: rgb(136, 42, 5);
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;

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

@media (max-width: 750px) {
  #Nav-Bar {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  #Nav-Item {
    font-size: 1rem;
  }
}
</style>
