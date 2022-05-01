<script>
import anime from "animejs";
import gsap from "gsap";
import ProjectsInd from "@/components/Projects_Ind.vue";

export default {
  components: {
    ProjectsInd,
  },

  mounted() {
    gsap.from(".section_heading", { opacity: 0, duration: 2, delay: 2 });
    gsap.from(".ind_prj", { opacity: 0, duration: 2, y: 100, delay: 1 });
  },

  data() {
    return {
      ind_projects: [
        {
          id: 0,
          title: "Nick's Guitar Shop",
          href: "https://scott-dev226.github.io/Nicks_Guitar_Shop/",
          href2: "https://github.com/Scott-Dev226/Nicks_Guitar_Shop",
          desc: " A full-stack React / Node JS online shopping application with a theme based around guitar and bass instruments.",
          lang: "JavaScript / JSX, CSS",
          front:
            "React JS, Axios, Bootstrap, GSAP, React Framer Motion, Redux, JSON Web",
          back: "  Node.js, MySQL, Express, Nodemailer, Bcrypt JS",
          img_src: "/assets/Nicks_Guitar_Shop.gif",
        },

        {
          id: 1,
          title: "Reeler's Choice",
          href: "https://nicsco22.dreamhosters.com/login.php",
          href2: "https://github.com/Scott-Dev226/Reelers_Choice",
          desc: "A full-stack media application created with Javascript and PHP - allowing users to look up trailers, release information, and comment/rate their films of choice.",
          lang: "HTML, CSS, Javascript,PHP",
          front: "GreenSock Animation Platform (GSAP), JQuery",
          back: " MySQL, Filezilla",
          img_src: "/assets/Reelers_Choice.gif",
        },
      ],
    };
  },
};
</script>

<template>
  <main id="projects_container">
    <h2 class="section_heading">PROJECTS</h2>
    <div class="proj_holder">
      <div v-for="project in ind_projects" :key="project.id">
        <div class="ind_prj">
          <ProjectsInd
            :title="project.title"
            :href="project.href"
            :href2="project.href2"
            :desc="project.desc"
            :lang="project.lang"
            :front="project.front"
            :back="project.back"
            :img_src="project.img_src"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
#projects_container {
  height: 100%;
  width: 100%;
  margin-bottom: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: center;
  display: flex;

  flex-direction: column;
  background-color: rgb(4, 0, 16);
  background-position: 0%20.5%;
  background-image: url("../assets/pexels-eberhard-grossgasteiger-691668.jpg");
}

.proj_holder {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 50px;
}

a {
  z-index: 1000;
  color: white;
  font-size: 1rem;
  font-family: "Quicksand", sans-serif;
}

#highlight_txt2:hover {
  color: rgb(247, 14, 14);
  transition: 0.35s all ease;
}

.ind_prj {
  margin-top: 20px;
  height: 235px;
  width: 480px;
  overflow: hidden;
  object-fit: cover;
  margin-right: 40px;
  border-radius: 15px;
  background-color: black;
}

.ind_prj:before {
  position: absolute;
  content: "";
  height: 0;
  width: 0;
  border: 3px solid transparent;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  border-radius: 15px;
}

.ind_prj:after {
  position: absolute;
  content: "";
  height: 0;
  width: 0;
  border: 2.5px dotted red;
  top: 0;
  right: 0;
  box-sizing: border-box;
  border-radius: 15px;
}

.ind_prj:hover:before {
  height: 235px;
  width: 480px;
  border: 2.5px dotted red;
  border-right: none;
  border-bottom: none;
  transition: 0.3s linear, width 0.3s linear 0.3s;
}

.ind_prj:hover:after {
  height: 235px;
  width: 480px;
  border: 2.5px dotted red;
  border-left: none;
  border-top: none;
  transition: height 0.3s linear, width 0.3s linear 0.3s;
}

.section_heading {
  font-family: "Quicksand", sans-serif;
  font-size: 2.25rem;
  color: white;
}

#skill_desc {
  position: absolute;

  left: 2px;
  right: 2px;
  border-radius: 15px;
  color: white;
  opacity: 0;

  height: 180px;
  width: 470px;

  z-index: 1000;
  padding-right: 20px;
  padding-left: 20px;
  filter: blur(50px);
  justify-content: center;
  flex-direction: column;
  margin: 0%;
  align-items: center;
  background-color: rgb(16, 16, 16);
  font-family: "Raleway", sans-serif;
  font-size: 0.75rem;
}

#highlight_txt {
  color: rgb(169, 169, 245);
  font-weight: bold;
  font-size: 0.8rem;
}

#highlight_txt2 {
  color: rgb(169, 169, 245);
  font-weight: bold;
  font-size: 0.8rem;
}

#skill_desc:hover {
  opacity: 0.925;
  transition: 0.5s all ease;
  filter: blur(0px);
}

.skill_desc_holder {
  height: 280px;
  width: 532px;
  opacity: 1;
  z-index: 1000;

  top: 5px;
  bottom: 5px;
  left: 5px;
  right: 5px;
}

.prj_title {
  color: rgb(78, 160, 227);
  font-size: 1.4rem;

  font-family: "Fredoka", sans-serif;
}

#feature_list {
  margin-top: 20px;
}

.proj_image {
  opacity: 0.85;
  height: 180px;
  border-radius: 15px;
  width: 380px;
  background-color: transparent;
  outline: none;
  margin-right: 65px;
  position: relative;
}

@media (max-width: 600px) {
  .proj_holder {
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }

  .section_heading {
    font-family: "Raleway", sans-serif;
    font-size: 1.7em;
  }

  .proj_image {
    height: 180px;
    width: 505px;
    padding-right: 210px;
    object-fit: cover;
  }
  #skill_desc {
    font-size: 0.675rem;
    padding-right: 15px;
    padding-left: 15px;
    width: 59%;
    height: 187.5px;
  }

  .prj_title {
    font-size: 1.1rem;
  }

  a {
    font-size: 0.75rem;
  }

  .ind_prj {
    height: 220px;
    width: 330px;
    margin-right: 0px;
    margin-bottom: 30px;
  }

  #highlight_txt {
    font-size: 0.65rem;
  }

  #highlight_txt2 {
    font-size: 0.65rem;
  }
}
</style>
