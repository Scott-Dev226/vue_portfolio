<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
</script>

<script>
export default {
  props: {
    title: String,
    desc: String,
    src: String,
  },
};
</script>

<template>
  <div class="skill_desc_holder">
    <div id="skill_holder">
      <div id="skill_desc" class="desc_visibility">
        <h2 id="desc_title">{{ title }}</h2>
        <p>{{ desc }}</p>
      </div>
      <i v-bind:class="src" id="skill_logo_img" class="img_scroll"></i>
    </div>
  </div>
</template>

<style scoped>
#skills_container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: center;
  background-color: black;
  overflow: hidden;
  background-image: url("../assets/pen-gffef9ab40_1920.jpg");
}

.section_heading {
  font-family: "Quicksand", sans-serif;
  font-size: 2.5rem;
  background-color: rgb(22, 22, 22);
  color: white;
}

#git_logo:hover {
  border: 2px solid grey;
  border-radius: 20px;
  border-color: brown;
}

.slide_msg {
  display: flex;
  flex-direction: row;
  margin-left: 20px;
}

.slide_msg2 {
  display: flex;
  flex-direction: row;
  margin-right: 20px;
}

#git_logo {
  width: 100px;
}

.slide_msg:hover {
  color: blue;
}

.img_scroll {
  transform: translateX(150px);
  opacity: 0;
  filter: blur(50px);
  padding-top: 25px;
}

#welcome-message-holder {
  margin-bottom: 150px;
  margin-top: 100px;
  justify-content: center;
  border-radius: 15px;
  width: 900px;
  display: flex;
  opacity: 0.9;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: rgb(4, 0, 16);
}

#skill_logo_img {
  border-radius: 20px;

  color: rgb(172, 223, 250);
  width: 300px;
  height: 150px;
}

#skill_desc {
  position: absolute;
  top: 5px;
  bottom: 5px;
  left: 5px;
  right: 5px;
  color: white;
  opacity: 0;
  width: 90%;
  height: 150px;
  border-radius: 10px;
  z-index: 1000;
  transform: translateX(20px);
  justify-content: center;
  flex-direction: column;
  margin: 0%;
  align-items: center;
  background-color: rgb(49, 49, 49);
  font-style: italic;
  font-size: 1rem;
  filter: blur(50px);
  border-top: 2px solid white;
}

#desc_title {
  color: darkorange;
}

#skill_desc_holder {
  width: 320px;
  height: 500px;
  margin-bottom: 30px;
  border-radius: 10px;
  margin-right: 20px;
  border: 1px groove white;
}

#skill_desc:hover {
  opacity: 1;
  transition: all 0.45s ease-in-out;
  display: block;
  filter: blur(0px);
}

#skill_holder {
  position: relative;

  display: flex;
  justify-content: flex;
  text-align: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

#skill_holder:hover {
  opacity: 0.9;
}

@media screen and (max-width: 600px) {
  .section_heading {
    font-family: "Raleway", sans-serif;
    font-size: 2em;
  }
}
</style>
