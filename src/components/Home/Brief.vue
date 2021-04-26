<script lang="ts">
import IHeadBoy from "@/components/Vue2/IHeadBoy.vue";
export default {
  name: "Brief",
  components: { IHeadBoy },
};
</script>

<template>
  <div id="brief" :class="$style.briefContainer">
    <IHeadBoy />
    <div>
      <p>
        代表公司前往巴賽隆納 MWC 過. 另外在練習寫英文文章的狀態下,
        被收錄了一篇2017 vue top 50 post. 畢業當完兵後一直以來都專注在前端領域
        (過程也碰了許多後端 knowledge) 工作經驗約8年,
        一直都有持續關注這個領域的狀況 (不論是技術, 薪資還是公司)
        因緣巧合下也接過一些案 (佛系接案), 甚至有機會當知名程式補習班老師
        (當時覺得一個禮拜要被綁住三天太不自由了). 目前前端發展已經趨於穩定,
        以前各種 framework, library
        現在都消失的差不多了.大多數好的公司也不用去管什麼 ie 瀏覽器, ie 幾之類.
        乖乖把底子打好學好一套 framework 基本上就能順利轉職! 認識更多的我
      </p>
      <ul>
        <li>7.8年專注於前端的工作經驗.</li>
        <li>2017 JSDC 的講者.</li>
        <li>one of 2017 vue top 50 post.</li>
        <li>代表公司 RD 前往巴賽隆納 MWC.</li>
      </ul>
    </div>
  </div>
</template>

<style module>
.briefContainer {
  @apply flex;
}
</style>
