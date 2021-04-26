<script lang="ts">
import { ref, SetupContext } from "vue";
import { headerMenus } from "@/components/Header/constants";

type EmitOption = "onMobileMenuClose";
type Props = { isMobileMenuOpen: boolean };

export default {
  name: "MobileMenus",
  emits: ["onMobileMenuClose"],

  setup(props: Props, { emit }: SetupContext<EmitOption[]>) {
    const isMobileMenuOpen = ref(props.isMobileMenuOpen);

    const onMobileMenuClose = () =>
      emit("onMobileMenuClose", isMobileMenuOpen.value);

    const onMobileMenuClick = (menu) => {
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
            :class="$style.iconInner"
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
        <a
          v-for="headerMenu in headerMenus"
          :class="$style.menuItem"
          :key="headerMenu.name"
          :href="`#${headerMenu.name}`"
          @click="onMobileMenuClick(headerMenu.name)"
          >{{ headerMenu.text }}</a
        >
      </div>
    </div>
  </div>
</template>

<style module>
.mobileMenusContainer {
  @apply absolute;
  @apply top-0;
  @apply inset-x-0;
  @apply p-2;
  @apply transition;
  @apply transform;
  @apply origin-top-right;
  @apply md:hidden;
}

.mobileMenusInnerContainer {
  @apply rounded-lg;
  @apply shadow-md;
  @apply bg-white;
  @apply ring-1;
  @apply ring-black;
  @apply ring-opacity-5;
  @apply overflow-hidden;
}

.iconContainer {
  @apply px-5;
  @apply pt-4;
  @apply flex;
  @apply items-center;
  @apply justify-end;
}

.iconOuter {
  @apply -mr-2;
  @apply p-2;
  @apply bg-white;
  @apply rounded-md;
  @apply inline-flex;
  @apply items-center;
  @apply justify-center;
  @apply text-gray-400;
}

.iconInner {
  @apply h-6;
  @apply w-6;
}

.menuItemContainer {
  @apply px-2;
  @apply pt-2;
  @apply pb-3;
  @apply space-y-1;
}

.menuItem {
  @apply block;
  @apply px-3;
  @apply py-2;
  @apply rounded-md;
  @apply text-base;
  @apply font-medium;
  @apply text-gray-700;
}
</style>
