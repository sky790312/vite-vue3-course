<script lang="ts">
import IHeadBoy from "@/components/Vue2/IHeadBoy.vue";
import { plans } from "@/components/Home/constants";

export default {
  name: "Main",
  components: { IHeadBoy },
  setup() {
    return { plans };
  },
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
    <p :class="$style.mainDesc">
      常常對於前端開發相關問題查找時似懂非懂嗎找不到人問嗎？一直想精進自己卻又覺得自己總是在卡關嗎？不如來凱文這試試看！
    </p>
    <div :class="$style.planContainer">
      <div v-for="plan in plans" :class="$style.planItem" :key="plan.id">
        {{ plan.desc }}
      </div>
    </div>
    <p :class="$style.planCustomDesc">
      對前端有興趣卻苦無好的管道開啟前端之路嗎？量身打造最合適的前端之路<a
        href=""
        >客製化洽詢</a
      >！
    </p>
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

.mainDesc {
  @apply mb-4;
  @apply text-base text-gray-300;
}

.planContainer {
  @apply flex justify-center items-center my-12;
}

.planItem {
  @apply mx-2 mb-4 p-4 border rounded cursor-pointer;
  @apply transition border-indigo-600 text-white;
  @apply hover:bg-indigo-600;
}

.planCustomDesc {
  @apply mb-8 text-base;
}
</style>
