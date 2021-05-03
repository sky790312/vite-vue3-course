<script lang="ts">
import Main from "@/components/Home/Main.vue";
import Plan from "@/components/Home/Plan.vue";
// import AboutTeacher from "@/components/Home/AboutTeacher.vue";
// import Faq from "@/components/Home/Faq.vue";
// import Contact from "@/components/Home/Contact.vue";

export default {
  name: "Home",
  components: { Main, Plan },
};
</script>

<template>
  <Main />
  <Plan />
</template>
