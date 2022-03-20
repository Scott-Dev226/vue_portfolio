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
          src: "../assets/react-skillLogo.png",
          desc: "A JavaScript library for building user interfaces. Declarative views make your code more predictable and easier to debug.",
        },
        {
          id: 1,
          title: "Vue JS",
          src: "../assets/vuejs-logo.jpg",
          desc: "The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.",
        },
        {
          id: 2,
          title: "Vue JS",
          src: "../assets/nodejs_logo-1024x640.jpg",
          desc: "hmm",
        },
        {
          id: 3,
          title: "Trinity",
          src: "../assets/trinity-skillLogo.png",
          desc: "hmm",
        },
        {
          id: 4,
          title: "PHP",
          src: "../assets/php-skillLogo.jpg",
          desc: "hmm",
        },

        {
          id: 5,
          title: "SASS",
          src: "../assets/sass-logo.png",
          desc: "hmm",
        },
      ],
    };
  },

  methods: {
    nicksFunction: function (data) {
      alert(data);
    },
    fireGSAP: function () {
      gsap.from(".slide_msg", {
        x: 200,
        stagger: 0.2,
        duration: 0.7,
        opacity: 0,
      });

      gsap.to(".slide_msg_name", {
        color: "tan",
        fontWeight: "bold",
        delay: 2.5,
      });

      gsap.from(".slide_msg2", {
        x: 200,
        stagger: 0.2,
        duration: 0.7,
        opacity: 0,
        delay: 3.5,
      });

      gsap.from(".slide_msg3", {
        x: 200,
        duration: 0.7,
        opacity: 0,
        delay: 4,
      });

      gsap.to(".slide_msg3", {
        color: "aqua",
        fontWeight: "bold",
        delay: 5,
      });

      gsap.from(".skill_logo_img", {
        x: 200,
        duration: 0.7,
        opacity: 0,
        stagger: 0.3,
      });

      gsap.to(".desc_visibility", {
        display: "flex",
        delay: 8.5,
      });
    },
  },

  mounted() {
    this.fireGSAP();
  },
};
</script>

<template>
  <main id="home_container">
    <div id="hello-world">
      <p id="home-intro-msg" class="intro_msg_cls">
        <span className="slide_msg">Welcome! </span>
        <span className="slide_msg">My </span>
        <span className="slide_msg">name </span>
        <span className="slide_msg">is </span>
        <span className="slide_msg">
          <span className="slide_msg_name"> Nick Scott. </span>
        </span>
      </p>
      <p id="home-intro-msg" class="intro_msg_cls">
        <span className="slide_msg2"> I am </span>
        <span className="slide_msg2"> a </span>

        <span className="slide_msg3">Front-End Web Developer </span>
      </p>
    </div>
    <div id="welcome-message-holder">
      <div v-for="(skill, index) in skills_info" :key="skill.id">
        <div class="skill_desc_holder">
          <div id="skill_holder">
            <div id="skill_desc" class="desc_visibility">
              <h2 id="desc_title">{{ skill.title }}</h2>
              <p>{{ skill.desc }}</p>
            </div>
            <img v-bind:src="skill.src" class="skill_logo_img" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
#home_container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url("../assets/pen-gffef9ab40_1920.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: center;
  background-color: #000;
  overflow: hidden;
}

#hello-world {
  margin-top: 100px;
  display: flex;
  width: 100%;
  padding-left: 20%;
  padding-right: 20%;
  flex-wrap: wrap;
  background-color: black;
  justify-content: center;
}

#home-intro-msg {
  font-family: "Ramaraja", serif;
  font-size: 4rem;
  color: white;
  display: flex;
  flex-wrap: wrap;
}

.slide_msg {
  display: flex;
  flex-direction: row;
  margin-right: 20px;
}

.slide_msg2 {
  display: flex;
  flex-direction: row;
  margin-right: 20px;
}

#welcome-message-holder {
  margin-bottom: 350px;
  margin-top: 50px;
  margin-left: 35%;
  margin-right: 35%;
  width: 900px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.skill_logo_img {
  width: 300px;
  height: 200px;
  margin-bottom: 30px;
  border-radius: 20px;
  margin-right: 20px;
}

.skill_logo_img:hover {
  border: 3px solid red;
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
  height: 190px;
  border-radius: 10px;
  z-index: 1000;
  display: none;
  justify-content: center;
  flex-direction: column;
  margin: 0%;
  align-items: center;
  background-color: rgba(31, 31, 31, 0.897);
  font-style: italic;
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
  transition: all 0.5s ease-in-out;
}

#skill_holder {
  position: relative;

  display: flex;
  justify-content: flex;
  text-align: center;
  align-items: center;
}

#skill_holder:hover {
  opacity: 0.9;
}

@media screen and (max-width: 500px) {
  #welcome-message-holder {
    margin-left: 15%;
    width: 100%;
  }
}
</style>
