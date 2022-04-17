<script setup></script>

<template>
  <main id="projects_container">
    <h2 class="section_heading">PROJECTS</h2>
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
            <ul id="feature_list">
              <li>Languages: JavaScript / JSX, CSS</li>
              <li>
                Front-end Tools/UI: React JS, Axios, Bootstrap, GSAP, React
                Framer Motion, Redux, JSON Web Token
              </li>
              <li>
                Back-end Tools/Database: Node.js, MySQL, Express JS, Nodemailer,
                Bcrypt JS
              </li>
            </ul>
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
            <ul id="feature_list">
              <li>Languages: HTML, CSS, Javascript, PHP</li>

              <li>Back-end Tools/Database: MySQL</li>
            </ul>
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

  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: center;
  display: flex;
  flex-direction: column;
  background-color: white;
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
  font-size: 1.1rem;
}

a:hover {
  color: rgb(146, 196, 254);
  transition: 0.35s all ease;
}

.ind_prj {
  margin-top: 20px;
  height: 300px;
  width: 532px;
  overflow: hidden;
  object-fit: cover;
  margin-right: 40px;
  border: 0.5px solid rgb(58, 58, 58);
  border-radius: 15px;
  background-color: #000;
}

.section_heading {
  font-family: "Raleway", sans-serif;
  font-size: 2.75rem;
}

#skill_desc {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  color: white;
  opacity: 0;
  width: 90%;
  width: 532px;
  border-radius: 10px;
  z-index: 1000;
  padding-right: 50px;
  padding-left: 50px;
  filter: blur(50px);
  justify-content: center;
  flex-direction: column;
  margin: 0%;
  align-items: center;
  background-color: rgb(49, 49, 49);
  font-style: italic;
  font-size: 1rem;
}

#skill_desc:hover {
  opacity: 0.85;
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
  font-size: 2rem;

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

  height: 270px;
  width: 532px;
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
    font-size: 0.75rem;
    padding-right: 20px;
    padding-left: 20px;
    width: 75%;
  }

  .prj_title {
    font-size: 1.5rem;
  }

  a {
    font-size: 0.75rem;
  }

  .ind_prj {
    height: 230px;
    width: 400px;
    margin-right: 0px;
  }
}
</style>
