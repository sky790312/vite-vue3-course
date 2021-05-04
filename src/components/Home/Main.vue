<script lang="ts">
import IHeadBoy from "@/components/Vue2/IHeadBoy.vue";
export default {
  name: "Main",
  components: { IHeadBoy },
};
</script>

<template>
  <main>
    <IHeadBoy :class="$style.headBoyWrapper" />
    <h1 :class="$style.titleWrapper">
      <span>凱文</span>
      <span :class="$style.titleHighlight">前端</span>
      <span>諮詢工作坊</span>
    </h1>
    <p :class="$style.desc">常常對於前端開發相關問題查找時似懂非懂嗎找不到人問嗎？一直想精進自己卻又覺得自己總是在卡關嗎？不如來凱文這試試看！</p>
    <!-- <a href="#" :class="$style.ctaButton">我有興趣</a> -->
  </main>
</template>

<style module>
.headBoyWrapper {
  @apply mx-auto mb-2;
}
.titleWrapper {
  @apply font-extrabold text-white tracking-tight text-4xl;
  @apply my-8;
}

.titleHighlight {
  @apply block xl:inline text-indigo-400;
}

.desc {
  @apply mb-4;
  @apply text-base text-gray-300;
}
</style>
