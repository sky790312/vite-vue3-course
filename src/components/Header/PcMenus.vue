<script lang="ts">
import { headerMenus } from "@/components/Header/constants";

export default {
  name: "PcMenus",
  setup() {
    return { headerMenus };
  },
};
</script>

<template>
  <div :class="$style.pcMenuContainer">
    <a
      v-for="headerMenu in headerMenus"
      :class="$style.pcMenuItem"
      :key="headerMenu.name"
      :href="`#${headerMenu.name}`"
      >{{ headerMenu.text }}</a
    >
  </div>
</template>

<style module>
.pcMenuContainer {
  @apply hidden md:block md:ml-10 md:pr-4 md:space-x-8;
}

.pcMenuItem {
  @apply font-medium text-gray-500;
  @apply hover:text-gray-900;
}
</style>
