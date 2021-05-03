<script lang="ts">
export default {
  name: "Brief"
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
      <div :class="$style.flowItem">
        事前的背景了解與確認問題
      </div>
      <p>↓</p>
      <div :class="$style.flowItem">
        第一次半小時的免費試課
      </div>
      <p>↓</p>
      <div :class="$style.flowItem">
        實體面對面開始
      </div>
      <p>↓</p>
      <div :class="$style.flowItem">
        結束與雙方反饋
      </div>
      <p>↓</p>
      <div :class="$style.flowItem">
        未來的再次服務
      </div>
    </div>
    <p>
      從第一份工作開始變開啟前端之路，目前已經是約 8 年多的前端工作經驗老骨頭。一直以來對於教學相長充滿熱情，擔任過家教接過案，不論是 vue 還是 react 都用的得心應手。若問題超出範圍或者實在沒有時間為彼此安排也不用擔心，我將會聯繫周遭的各方前端好手來為大家服務與解惑，簡言之，希望能打造一個生生不息循環的生態系，未來的你也能將其經驗傳承下去。
    </p>
    <p>其實最主要還是希望能將自身所學與經驗回饋給前端領域的大家們，另外則是交個朋友吧！🔥</p>
  </div>
</template>

<style module>
.highlightContainer {
  @apply my-4;
}
.highlight {
  @apply py-2 text-2xl text-indigo-600 font-bold;
}
.flowContainer {
  @apply my-8;
}
.flowItem {
  @apply md:w-1/3 mx-auto my-2 p-4 border rounded;
  @apply transition border-indigo-600 text-gray-500;
}
</style>
