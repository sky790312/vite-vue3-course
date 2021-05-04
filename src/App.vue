<script lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
import Header from "@/components/appCommon/Header/Header.vue";
import Footer from "@/components/appCommon/Footer.vue";
import AppBackground from "@/components/appCommon/AppBackground.vue";
import { State } from "@/store";

export default {
  name: "App",
  components: { Header, Footer, AppBackground },
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
    <AppBackground />
  </div>
</template>

<style module>
.appContainer {
  @apply flex flex-col h-full;
  @apply text-gray-300;
}
.contentContainer {
  @apply flex-grow overflow-y-auto container mx-auto;
  @apply text-center text-lg;
  @apply px-2 py-16 md:py-32;
}
</style>