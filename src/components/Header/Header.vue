<script lang="ts">
import PcMenus from "@/components/Header/PcMenus.vue";
import MobileMenus from "@/components/Header/MobileMenus.vue";
import MobileHeaderIcon from "@/components/Header/MobileHeaderIcon.vue";
import { ref } from "vue";

export default {
  name: "Header",
  components: { PcMenus, MobileMenus, MobileHeaderIcon },

  setup() {
    const isMobileMenuOpen = ref(false);

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    return {
      isMobileMenuOpen,
      toggleMobileMenu,
    };
  },
};
</script>

<template>
  <div :class="$style.headerContainer">
    <nav :class="$style.headerInnerContainer">
      <div :class="$style.mainTitleContainer">
        <router-link
          to="/"
          v-slot="{ href, navigate, isActive }"
        >
          <a
            :class="[$style.pcMenuItem, isActive && 'router-link-active']"
            :href="href"
            @click="navigate"
            >
            <h1 :class="$style.mainTitle">KevinHu</h1>
          </a>
        </router-link>
        <MobileHeaderIcon
          v-show="!isMobileMenuOpen"
          @click="toggleMobileMenu()"
        />
      </div>
      <PcMenus />
    </nav>
    <MobileMenus
      v-show="isMobileMenuOpen"
      :isMobileMenuOpen="isMobileMenuOpen"
      @onMobileMenuClose="toggleMobileMenu"
    />
  </div>
</template>
<style module>
.headerContainer {
  @apply relative py-5 text-center;
}

.headerInnerContainer {
  @apply relative flex items-center justify-between;
  @apply px-4 w-full md:w-auto;
}

.mainTitleContainer {
  @apply flex items-center justify-between w-full md:w-auto;
}

.mainTitle {
  @apply text-4xl tracking-tight font-extrabold text-gray-900;
  @apply sm:text-5xl md:text-6xl;
}
</style>