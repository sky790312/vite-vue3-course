<script lang="ts">
import { questionsAndAnswers } from "@/components/Faq/constants";

export default {
  name: "QnA",
  setup() {
    return { questionsAndAnswers };
  },
};
</script>

<template>
  <div>
    <p>
      本人行事比較低調，主要擅長 vue / react + typescript，幸運的擔任過 2017
      JSDC 的講者與代表公司前往巴賽隆納 MWC
      。另外在練習寫英文文章的情況下，也曾被收錄了一篇 2017 vue top 50
      post。畢業當完兵後一直以來都專注在前端領域（過程也碰了許多後端 knowledge
      knowhow）工作經驗已 8 年多，一直都持續關注 web
      領域的狀況（不論是技術薪資還是公司）因緣巧合下也接過一些案（佛系接案）與家教甚至原本能當知名程式補習班老師（當時覺得一個禮拜要被綁住三天太不自由了）。目前前端發展已經趨於穩定，以前各種
      framework, library 現在都消失的差不多了。大多數好的公司也不用再去管些 ie
      瀏覽器，支援 ie 幾之類得問題。乖乖把底子打好學好一套 framework
      基本上就能走好你的前端之路！
    </p>
    <p>
      footer 是我個人的一些 online 資訊..
      <a
        href="https://sky790312-v2.web.app"
        target="_blank"
        ref="noreferrer noopener"
        :class="$style.highlightLink"
        >認識我更多</a
      >
    </p>
    <div :class="$style.qnaContainer">
      <div
        v-for="questionsAndAnswer in questionsAndAnswers"
        :key="questionsAndAnswer.id"
        :class="$style.qnaItem"
      >
        <h3 :class="$style.qnaTitle">Q: {{ questionsAndAnswer.title }}</h3>
        <p :class="$style.qnaDesc">
          {{ questionsAndAnswer.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<style module>
.highlightLink {
  @apply text-3xl font-bold underline;
}

.qnaContainer {
  @apply my-12;
}

.qnaItem {
  @apply mb-4 mx-auto md:w-2/3;
  @apply md:text-left;
}

.qnaTitle {
  @apply mb-4 pb-2 px-8 border-b;
  @apply text-2xl font-bold text-indigo-400;
}

.qnaDesc {
  @apply px-8 py-4;
}
</style>
