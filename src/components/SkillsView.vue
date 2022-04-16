<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import gsap from "gsap";
</script>

<script>
export default {
  data() {
    return {
      skills_info: [
        {
          id: 0,
          title: "React JS",
          src: "fab fa-react fa-10x",
          desc: "A JavaScript library for building user interfaces. Declarative views make your code more predictable and easier to debug.",
        },

        {
          id: 1,
          title: "Node JS",
          src: "fab fa-brands fa-node fa-10x",
          desc: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
        },
        {
          id: 2,
          title: "Vue",
          src: "fab fa-brands fa-vuejs fa-10x",
          desc: "The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.",
        },

        {
          id: 3,
          title: "Javascript",
          src: "fab fa-brands fa-js-square fa-10x",
          desc: "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web. ",
        },

        {
          id: 4,
          title: "PHP",
          src: "fab fa-php fa-10x",
          desc: "PHP is a popular general-purpose scripting language that is especially suited to web development.",
        },

        {
          id: 5,
          title: "HTML",
          src: "fab fa-html5 fa-10x",
          desc: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.",
        },
        {
          id: 6,
          title: "CSS",
          src: "fab fa-css3-alt fa-10x",
          desc: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML",
        },
        {
          id: 7,
          title: "Figma",
          src: "fab fa-figma fa-10x",
          desc: "Figma is a vector graphics editor and prototyping tool which is primarily web-based",
        },

        {
          id: 8,
          title: "SASS",
          src: "fab fa-sass fa-10x",
          desc: "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).",
        },

        {
          id: 9,
          title: "Bootstrap",
          src: "fab fa-brands fa-bootstrap fa-10x",
          desc: "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).",
        },
      ],
    };
  },

  mounted() {
    this.scrollTriggerFire();
  },

  methods: {
    nicksFunction: function (data) {
      alert(data);
    },

    scrollTriggerFire: function () {
      gsap.registerPlugin(ScrollTrigger);

      const boxes = gsap.utils.toArray(".img_scroll");
      boxes.forEach((box) => {
        gsap.from(box, {
          filter: "blur(50px)",
          x: 100,

          scrollTrigger: {
            start: "top 99%",
            end: "bottom 75%",
            trigger: box,
            scrub: true,
          },
        });
      });
    },
  },
};
</script>

<template>
  <h2 class="section_heading">Skills</h2>
  <main id="skills_container">
    <div id="welcome-message-holder">
      <div v-for="skill in skills_info" :key="skill.id">
        <div class="skill_desc_holder">
          <div id="skill_holder">
            <div id="skill_desc" class="desc_visibility">
              <h2 id="desc_title">{{ skill.title }}</h2>
              <p>{{ skill.desc }}</p>
            </div>
            <i
              v-bind:class="skill.src"
              id="skill_logo_img"
              class="img_scroll"
            ></i>
          </div>
        </div>
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
  background-color: white;
  overflow: hidden;
  background-image: url("../assets/pen-gffef9ab40_1920.jpg");
}

.section_heading {
  font-family: "Raleway", sans-serif;
  font-size: 3rem;
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

#welcome-message-holder {
  margin-bottom: 150px;
  margin-top: 100px;
  justify-content: center;
  border-radius: 15px;
  width: 650px;
  display: flex;

  flex-wrap: wrap;
  flex-direction: row;
  background-color: black;
}

#skill_logo_img {
  margin-bottom: 30px;
  border-radius: 20px;
  margin-right: 5px;
  color: rgb(172, 223, 250);
  width: 300px;
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

@media screen and (max-width: 500px) {
}
</style>
