<script setup></script>

<template>
  <main id="projects_container">
    <h2 class="section_heading">WEB PROJECTS</h2>
    <div class="proj_holder">
      <div class="ind_prj">
        <a href="https://scott-dev226.github.io/Nicks_Guitar_Shop/"
          >Click Here to Visit Page
        </a>
        <div class="skill_desc_holder">
          <div id="skill_desc" class="desc_visibility">
            <h2 class="prj_title">Nick's Guitar Shop</h2>
            <p>
              A full-stack React / Node JS online shopping application with a
              theme based around guitar and bass instruments.
            </p>
            <br />

            <p>
              <span id="highlight_txt">Languages: </span> JavaScript / JSX, CSS
            </p>

            <p>
              <span id="highlight_txt"> Front-end Tools/UI:</span> React JS,
              Axios, Bootstrap, GSAP, React Framer Motion, Redux, JSON Web
            </p>

            <p>
              <span id="highlight_txt"> Back-end Tools/Database: </span>
              Node.js, MySQL, Express, Nodemailer, Bcrypt JS
            </p>
          </div>

          <img src="/assets/Nicks_Guitar_Shop.gif" class="proj_image" />
        </div>
      </div>
      <div class="ind_prj">
        <a href="https://nicsco22.dreamhosters.com/login.php">
          Click Here to Visit Page
        </a>
        <div class="skill_desc_holder">
          <div id="skill_desc" class="desc_visibility">
            <h2 class="prj_title">Reeler's Choice</h2>
            <p>
              A full-stack media application allowing users to look up trailers,
              release information, and comment/rate their films of choice.
            </p>
            <br />
            <p>
              <span id="highlight_txt">Languages:</span> HTML, CSS, Javascript,
              PHP
            </p>

            <p>
              <span id="highlight_txt">Back-end Tools/Database: </span> MySQL
            </p>
          </div>
          <img src="/assets/Reelers_Choice.gif" class="proj_image" />
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

a:hover {
  color: rgb(146, 196, 254);
  transition: 0.35s all ease;
}

.ind_prj {
  margin-top: 20px;
  height: 220px;
  width: 480px;
  overflow: hidden;
  object-fit: cover;
  margin-right: 40px;
  border: 0.5px solid rgb(58, 58, 58);
  border-radius: 15px;
  background-color: #000;
  border: 2.5px solid #002a44;
}

.section_heading {
  font-family: "Quicksand", sans-serif;
  font-size: 2.25rem;
  color: white;
}

#skill_desc {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  color: white;
  opacity: 0;

  width: 480px;
  border-radius: 10px;
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
  font-size: 0.85rem;
}

#skill_desc:hover {
  opacity: 0.925;
  transition: 0.5s all ease;
  filter: blur(0px);
}

.skill_desc_holder {
  height: 300px;
  width: 532px;
  opacity: 1;
  z-index: 1000;
  background-color: #000;
  border-top: 0.5px solid rgb(109, 109, 109);
}

.prj_title {
  color: rgb(78, 160, 227);
  font-size: 1.4rem;

  font-family: "Fredoka", sans-serif;
}

#feature_list {
  margin-top: 20px;
}

.ind_prj:hover {
  border: 2px solid red;
  transition: all 0.5s ease;
}

.proj_image {
  border-radius: 15px;
  opacity: 0.85;
  height: 220px;
  width: 480px;
}

@media (max-width: 600px) {
  .proj_holder {
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }

  .section_heading {
    font-family: "Raleway", sans-serif;
    font-size: 2em;
  }

  .proj_image {
    height: 230px;
    padding-right: 120px;
    object-fit: cover;
  }
  #skill_desc {
    font-size: 0.7rem;
    padding-right: 25px;
    padding-left: 25px;
    width: 62.5%;
  }

  .prj_title {
    font-size: 1.5rem;
  }

  a {
    font-size: 0.75rem;
  }

  .ind_prj {
    height: 230px;
    width: 330px;
    margin-right: 0px;
    margin-bottom: 30px;
  }

  #highlight_txt {
    font-size: 0.65rem;
  }
}
</style>
