<script lang="ts">
import Main from "@/components/Home/Main.vue";
import Brief from "@/components/Home/Brief.vue";
import Schedule from "@/components/Home/Schedule.vue";
import AboutTeacher from "@/components/Home/AboutTeacher.vue";
import Faq from "@/components/Home/Faq.vue";
import Contact from "@/components/Home/Contact.vue";

export default {
  name: "Home",
  components: { Main, Brief, Schedule, AboutTeacher, Faq, Contact },
};
</script>

<template>
  <div :class="$style.homeContainer">
    <Main />
    <Brief />
    <Schedule />
    <AboutTeacher />
    <Faq />
    <Contact />
  </div>
</template>

<style module>
.homeContainer {
  @apply m-10;
}
</style>
