<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<script>
export default {
  name: "Akuma",
  strength: "max",

  components: { WelcomeItem },

  props: {
    rep: Object,
    item: String,
    name: String,
  },

  mounted() {},
};
</script>

<template>
  <WelcomeItem>
    <h1>{{ name }}</h1>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a target="_blank" href="https://vuejs.org/">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>
</template>
