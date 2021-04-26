<script lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer.vue";
import { State } from "@/store";

export default {
  name: "App",
  components: { Header, Footer },
  setup() {
    const { dispatch } = useStore<State>();

    onMounted(() => {
      dispatch("onSetYear", new Date().getFullYear());
    });
  },
};
</script>

<template>
  <div :class="$style.appContainer">
    <Header />
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
    <Footer />
  </div>
</template>

<style module>
.appContainer {
  @apply relative bg-white overflow-hidden;
}
</style>

