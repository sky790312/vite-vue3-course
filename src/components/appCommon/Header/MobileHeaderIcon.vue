<script lang="ts">
export default {
  name: "MobileHeaderIcon",
};
</script>

<template>
  <div :class="$style.mobileMenuIconContainer">
    <button :class="$style.menuIcon">
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
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
</template>

<style module>
.mobileMenuIconContainer {
  @apply flex items-center;
  @apply -mr-2 md:hidden;
}

.menuIcon {
  @apply inline-flex items-center justify-center;
  @apply bg-white rounded-md p-2 text-gray-500;
}
</style>