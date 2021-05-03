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
    <div :class="$style.contentContainer">
      <router-view v-slot="{ Component }">
        <Suspense>
          <component :is="Component" />
        </Suspense>
      </router-view>
    </div>
    <Footer />
  </div>
</template>

<style module>
.appContainer {
  @apply flex flex-col;
  @apply h-full bg-gray-100;
}
.contentContainer {
  @apply flex-grow overflow-y-auto;
  @apply text-center text-lg;
  @apply mt-16 md:mt-32 mb-12 px-2;
}
</style>

