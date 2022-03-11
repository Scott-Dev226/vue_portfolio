<script setup></script>

<script>
import TheWelcome from "@/components/TheWelcome.vue";
import gsap from "gsap";

export default {
  name: "RosettaView",
  components: { TheWelcome },
  methods: {
    changeState: function () {
      const myString = "yep";
      return myString;
    },
    whatsmyState: function () {
      const myResults = this.changeState();
      this.rep.number++;
    },
  },

  data() {
    return {
      rep: {
        number: 177,
        ability: "low",
        rich: false,
        myArray: [1, 2, 3],
      },

      api_output: "",
    };
  },

  mounted() {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((payload) => (this.api_output = payload.results));
  },
};
</script>

<template>
  <div v-for="(person, index) in this.api_output" :key="index">
    <TheWelcome v-bind:name="person.name" />
  </div>
</template>

<style scoped>
p {
  margin-top: 100px;
  font-size: 7rem;
}
#home_container {
  height: 950px;
  width: 100%;

  background-image: url("../assets/photo-1576831371356-d6e9411ae501.jfif");
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: center;
  background-color: #000;
  overflow: hidden;
}
</style>
