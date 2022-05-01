<script>
export default {
  props: {
    title: String,
    href: String,
    href2: String,
    lang: String,
    front: String,
    back: String,
    img_src: String,
    desc: String,
  },
};
</script>

<template>
  <div id="ins_holder">
    <a :href="href">
      <span id="highlight_txt2"> Click Here to Visit Web Page </span> |
    </a>

    <a :href="href2">
      <span id="highlight_txt3"> Click to View Github Repository </span>
    </a>

    <p id="hover_txt">~Hover below for info~</p>
  </div>

  <div class="skill_desc_holder">
    <div id="skill_desc" class="desc_visibility">
      <h2 class="prj_title">{{ title }}</h2>
      <p>
        {{ desc }}
      </p>
      <br />

      <p><span id="highlight_txt">Languages: </span> {{ lang }}</p>

      <p>
        <span id="highlight_txt"> Front-end Tools/UI:</span>
        {{ front }}
      </p>

      <p>
        <span id="highlight_txt"> Back-end Tools/Database: </span>
        {{ back }}
      </p>
    </div>

    <img v-bind:src="img_src" class="proj_image" />
  </div>
</template>

<style scoped>
a {
  z-index: 1000;
  color: white;
  font-size: 1rem;
  font-family: "Quicksand", sans-serif;
  margin-bottom: 0;
}

#ins_holder {
  border-bottom: 0.5px dashed rgb(54, 54, 54);
}

#hover_txt {
  z-index: 1000;
  color: rgb(255, 255, 255);
  font-size: 0.75rem;
  font-family: "Fredoka", sans-serif;
  display: block;
}

#highlight_txt2:hover {
  color: rgb(247, 14, 14);
  transition: 0.35s all ease;
  text-decoration: underline;
}

#highlight_txt3:hover {
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
  color: #1aa9d7;
  font-weight: bold;
  font-size: 0.8rem;
}

#highlight_txt3 {
  color: rgb(35, 247, 187);
  font-size: 0.8rem;
  font-family: "Saira Semi Condensed", sans-serif;
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
