<script lang="ts">
export default {
  name: "MobileHeaderIcon",
};
</script>

<template>
  <div :class="$style.mobileMenuIconContainer">
    <button :class="$style.iconOuter">
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
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
</template>

<style module>
.mobileMenuIconContainer {
  @apply -mr-2;
  @apply flex;
  @apply items-center;
  @apply md:hidden;
}

.iconOuter {
  @apply inline-flex items-center justify-center;
  @apply bg-white rounded-md p-2 text-gray-400;
  @apply hover:text-gray-500 hover:bg-gray-100;
  @apply focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500;
}

.iconInner {
  @apply h-6 w-6;
}
</style>