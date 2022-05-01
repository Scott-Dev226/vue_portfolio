<script setup>
import SkillsInd from "@/components/Skills_Ind.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
</script>

<script>
export default {
  components: {
    SkillsInd,
  },
  mounted() {
    gsap.from(".skills_container_cls", {
      opacity: 0,
      duration: 2,
      delay: 2,
    });
  },

  data() {
    return {
      skills_info: [
        {
          id: 0,
          title: "React JS",
          src: "fab fa-react fa-8x",
          desc: "A JavaScript library for building user interfaces. Declarative views make your code more predictable and easier to debug.",
        },

        {
          id: 1,
          title: "Node JS",
          src: "fab fa-brands fa-node fa-7x",
          desc: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
        },
        {
          id: 2,
          title: "Vue",
          src: "fab fa-brands fa-vuejs fa-7x",
          desc: "The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.",
        },

        {
          id: 3,
          title: "Javascript",
          src: "fab fa-brands fa-js-square fa-7x",
          desc: "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web. ",
        },

        {
          id: 4,
          title: "PHP",
          src: "fab fa-php fa-7x",
          desc: "PHP is a popular general-purpose scripting language that is especially suited to web development.",
        },

        {
          id: 5,
          title: "HTML",
          src: "fab fa-html5 fa-7x",
          desc: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.",
        },
        {
          id: 6,
          title: "CSS",
          src: "fab fa-css3-alt fa-7x",
          desc: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML",
        },
        {
          id: 7,
          title: "Figma",
          src: "fab fa-figma fa-7x",
          desc: "Figma is a vector graphics editor and prototyping tool which is primarily web-based",
        },

        {
          id: 8,
          title: "SASS",
          src: "fab fa-sass fa-7x",
          desc: "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).",
        },

        {
          id: 9,
          title: "Bootstrap",
          src: "fab fa-brands fa-bootstrap fa-7x",
          desc: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. ",
        },
      ],
    };
  },

  methods: {
    nicksFunction: function (data) {
      alert(data);
    },
  },
};
</script>

<template>
  <h2 class="section_heading">SKILLS</h2>
  <main id="skills_container" class="skills_container_cls">
    <div id="welcome-message-holder">
      <div v-for="skill in skills_info" :key="skill.id">
        <SkillsInd :title="skill.title" :desc="skill.desc" :src="skill.src" />
      </div>
    </div>
  </main>
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
