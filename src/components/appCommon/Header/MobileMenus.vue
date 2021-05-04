<script lang="ts">
import { ref, SetupContext } from "vue";
import { headerMenus } from "@/components/appCommon/Header/constants";

type EmitOption = "onMobileMenuClose";
type Props = { isMobileMenuOpen: boolean };

export default {
  name: "MobileMenus",
  emits: ["onMobileMenuClose"],

  setup(props: Props, { emit }: SetupContext<EmitOption[]>) {
    const isMobileMenuOpen = ref(props.isMobileMenuOpen);

    const onMobileMenuClose = () =>
      emit("onMobileMenuClose", isMobileMenuOpen.value);

    const onMobileMenuClick = (navigate) => {
      navigate();
      onMobileMenuClose();
    };

    return {
      isMobileMenuOpen,
      onMobileMenuClose,
      onMobileMenuClick,
      headerMenus,
    };
  },
};
</script>

<template>
  <div :class="$style.mobileMenusContainer">
    <div :class="$style.mobileMenusInnerContainer">
      <div :class="$style.iconContainer">
        <button :class="$style.iconOuter" @click="onMobileMenuClose()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div :class="$style.menuItemContainer">
        <router-link
          v-for="headerMenu in headerMenus"
          :key="headerMenu.name"
          :to="headerMenu.url"
          v-slot="{ href, navigate, isActive }"
        >
          <a
            :class="[$style.menuItem, isActive && 'router-link-active']"
            :href="href"
            @click="onMobileMenuClick(navigate)"
            >
            {{ headerMenu.text }}
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style module>
.mobileMenusContainer {
  @apply md:hidden z-10;
  @apply absolute top-0 inset-x-0 origin-top-right;
  @apply p-2 transition transform;
}

.mobileMenusInnerContainer {
  @apply overflow-hidden pb-4;
  @apply rounded-lg shadow-md bg-gray-700;
  @apply ring-1 ring-black ring-opacity-5;
}

.iconContainer {
  @apply flex items-center justify-end;
  @apply px-5 pt-4;
}

.iconOuter {
  @apply inline-flex items-center justify-center;
  @apply p-2 -mr-2;
  @apply rounded-md;
}

.menuItemContainer {
  @apply p-2 space-y-1;
}

.menuItem {
  @apply block px-3 py-2;
  @apply rounded-md text-white font-medium;
}
</style>
