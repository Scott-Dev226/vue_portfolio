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
          src: "../src/assets/react-skillLogo.png",
          desc: "",
        },
        {
          id: 1,
          src: "../src/assets/vuejs-logo.jpg",
          desc: "",
        },
        {
          id: 2,
          src: "../src/assets/nodejs_logo-1024x640.jpg",
          desc: "",
        },
        {
          id: 3,
          src: "../src/assets/trinity-skillLogo.png",
          desc: "",
        },
        {
          id: 4,
          src: "../src/assets/php-skillLogo.jpg",
          desc: "",
        },

        {
          id: 5,
          src: "../src/assets/sass-logo.png",
          desc: "",
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
      gsap.to(".slide_msg", {
        x: -200,
        stagger: 0.2,
        duration: 0.7,
        delay: 3,
        opacity: 0,
      });

      gsap.to(".slide_msg_name", {
        color: "blue",
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

      gsap.to(".slide_msg2", {
        x: -200,
        stagger: 0.2,
        duration: 0.7,
        delay: 5,
        opacity: 0,
      });

      gsap.from(".slide_msg3", {
        x: 200,
        duration: 0.7,
        opacity: 0,
        delay: 5,
      });

      gsap.to(".slide_msg3", {
        color: "orange",
        fontWeight: "bold",
        delay: 6.5,
      });

      gsap.to(".slide_msg3", {
        opacity: 0,
        delay: 7,
      });

      gsap.to(".slide_msg3", {
        opacity: 0,
        delay: 7,
      });

      gsap.to(".intro_msg_cls", {
        display: "none",
        delay: 7.5,
      });

      gsap.to(".skill_logo_img", {
        y: -50,
        delay: 8,
      });

      gsap.from(".skill_logo_img", {
        x: 200,
        duration: 0.7,
        opacity: 0,
        stagger: 0.3,
        delay: 8,
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
    <div id="welcome-message-holder">
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

      <div v-for="skill in this.skills_info" :key="skill.id">
        <img
          v-bind:src="skill.src"
          class="skill_logo_img"
          @click="nicksFunction(skill.id)"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
#home_container {
  height: 950px;
  width: 100%;
  display: flex;
  background-image: url("../assets/pen-gffef9ab40_1920.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: center;
  background-color: #000;
  overflow: hidden;
}

#home-intro-msg {
  font-family: "Urbanist", sans-serif;
  font-size: 2.5rem;
  color: white;
  display: flex;
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
  margin-top: 150px;
  margin-left: 60%;
  width: 900px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.skill_logo_img {
  width: 170px;
  height: 110px;
  margin-bottom: 30px;
  border-radius: 20px;
  margin-right: 20px;
  border: 1px groove white;
}

.skill_logo_img:hover {
  border: 3px solid red;
}

@media screen and (max-width: 500px) {
  #welcome-message-holder {
    margin-left: 15%;
    width: 100%;
  }
  .skill_logo_img {
    width: 150px;
    height: 100px;
    margin-bottom: 30px;
    border-radius: 20px;

    border: 1px groove white;
  }
}
</style>
