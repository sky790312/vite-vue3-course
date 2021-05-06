<script lang="ts">
import { headerMenus } from "@/components/appCommon/Header/constants";

export default {
  name: "PcMenus",
  setup() {
    return { headerMenus };
  },
};
</script>

<template>
  <div :class="$style.pcMenuContainer">
    <router-link
      v-for="headerMenu in headerMenus"
      :key="headerMenu.name"
      :to="headerMenu.url"
      v-slot="{ href, navigate, isActive }"
    >
      <a
        :class="[$style.pcMenuItem, isActive && 'router-link-active']"
        :href="href"
        @click="navigate"
      >
        {{ headerMenu.text }}
      </a>
    </router-link>
  </div>
</template>

<style module>
.pcMenuContainer {
  @apply hidden md:block md:ml-10 md:pr-4 md:space-x-8;
}

.pcMenuItem {
  @apply font-medium text-white;
  @apply hover:text-gray-300;
}
</style>
