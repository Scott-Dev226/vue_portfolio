<script setup></script>

<template>
  <main id="projects_container">
    <h2 class="section_heading">Projects</h2>
    <div class="proj_holder">
      <div class="ind_prj">
        <h2 class="prj_title">Nick's Guitar Shop</h2>

        <img src="/assets/Nicks_Guitar_Shop.gif" class="proj_image" />
      </div>
      <div class="ind_prj">
        <h2 class="prj_title">Reeler's Choice</h2>

        <img src="/assets/Reelers_Choice.gif" class="proj_image" />
      </div>
    </div>
  </main>
</template>

<style scoped>
#projects_container {
  height: 100%;
  width: 100%;
  background-image: url("../assets/pen-gffef9ab40_1920.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: center;
  display: flex;
  flex-direction: column;
  background-color: #000;
}

.proj_holder {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.ind_prj {
  margin-top: 100px;
  height: 300px;
  width: 532px;
  overflow: hidden;
  object-fit: cover;
  margin-right: 40px;
  border: 0.5px solid rgb(58, 58, 58);
  border-radius: 15px;
  background-color: #000;
}

.prj_title {
  color: white;
  font-size: 2rem;
  background-color: rgba(33, 33, 33);
  border-radius: 15px 15px 0px 0px;
  font-family: "Fredoka", sans-serif;
  border: 2px solid black;
}

.ind_prj:hover {
  border: 2px solid red;
  transition: all 0.5s ease;
}

.proj_image {
  border-radius: 15px;

  height: 280px;
  width: 532px;
}

@media (max-width: 600px) {
  .proj_holder {
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }

  .proj_image {
    height: 230px;
    width: 400px;
  }

  .ind_prj {
    height: 230px;
    width: 400px;
    margin-right: 0px;
  }
}
</style>
