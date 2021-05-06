<script lang="ts">
import { flows } from "@/components/About/constants";

export default {
  name: "Brief",
  setup() {
    return { flows };
  },
};
</script>

<template>
  <div id="brief">
    <p>
      你是否曾在前端開發中遭遇總總困難，即使解決了卻又一知半解？是否曾在前端之路上時時懷疑自己的前端之路？凱文諮詢工作坊主要提供
    </p>
    <div :class="$style.highlightContainer">
      <span :class="$style.highlight">前端實際開發中的問題排解與講解</span>
      與
      <span :class="$style.highlight">前端職涯方向分析與建議</span>
    </div>
    <div :class="$style.flowContainer">
      <template v-for="(flow, index) in flows" :key="flow.id">
        <div :class="$style.flowItem">
          {{ flow.text }}
        </div>
        <p v-if="index !== flows.length - 1">↓</p>
      </template>
    </div>
    <p>
      從第一份工作開始變開啟前端之路，目前已經是約 8
      年多的前端工作經驗老骨頭。一直以來對於教學相長充滿熱情，擔任過家教接過案，不論是
      vue 還是 react 都用的得心應手。
    </p>
    <p>
      但這裡不是救火營，勿以解決當下思維，若問題超出範圍或者實在沒有時間安排也不用擔心，這兒也有許多前端好手能一起來為大家服務與解惑。
    </p>
    <p>
      簡言之，希望能打造一個生生不息循環的生態系，能將自身所學與經驗回饋給前端領域的大家們，未來的你也能將其經驗傳承下去。
    </p>
    <p>最後有機會的話來交個朋友吧！🔥</p>
  </div>
</template>

<style module>
.highlightContainer {
  @apply my-4;
}

.highlight {
  @apply py-2 text-2xl text-indigo-400 font-bold;
}

.flowContainer {
  @apply my-12;
}

.flowItem {
  @apply md:w-1/3 mx-auto my-2 p-4 border rounded;
  @apply transition border-indigo-600 text-white;
  @apply hover:bg-indigo-600;
}
</style>
