<script lang="ts">
export default {
  name: "Main",
};
</script>

<template>
  <main :class="$style.container">
    <h1 :class="$style.titleWrapper">
      <span :class="$style.title">main title</span>
      <span :class="$style.titleHighlight">highlight</span>
    </h1>
    <p :class="$style.desc">main desc</p>
    <div :class="$style.infoContainer">
      <div :class="$style.infoInnerContainer">
        <a href="#" :class="$style.ctaButton">我有興趣</a>
      </div>
    </div>
  </main>
</template>

<style module>
.container {
  @apply mt-10;
  @apply mx-auto;
  @apply max-w-7xl;
  @apply px-4;
  @apply sm:mt-12;
  @apply sm:px-6;
  @apply md:mt-16;
  @apply lg:mt-20;
  @apply lg:px-8;
  @apply xl:mt-28;
  @apply text-center;
}

.titleWrapper {
  @apply text-4xl;
  @apply tracking-tight;
  @apply font-extrabold;
  @apply text-gray-900;
  @apply sm:text-5xl;
  @apply md:text-6xl;
}

.title {
  @apply block;
  @apply xl:inline;
}

.titleHighlight {
  @apply block;
  @apply text-indigo-600;
  @apply xl:inline;
}

.desc {
  @apply mt-3;
  @apply text-base;
  @apply text-gray-500;
  @apply sm:mt-5;
  @apply sm:text-lg;
  @apply md:mt-5;
  @apply md:text-xl;
}

.infoContainer {
  @apply mt-5;
  @apply sm:mt-8;
}

.infoInnerContainer {
  @apply rounded-md;
  @apply shadow;
}

.ctaButton {
  @apply w-full;
  @apply flex;
  @apply items-center;
  @apply justify-center;
  @apply px-8;
  @apply py-3;
  @apply border;
  @apply border-transparent;
  @apply text-base;
  @apply font-medium;
  @apply rounded-md;
  @apply bg-indigo-600;
  @apply hover:bg-indigo-700;
  @apply md:py-4;
  @apply md:px-10;
}
</style>
