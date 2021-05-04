<script lang="ts">
export default {
  name: "Plan",
  setup() {
    const plans = [{
      id: 1,
      title: '方案一',
      desc: '對於前端一些環節想解惑？一次搞定！'
    }, {
      id: 2,
      title: '方案二',
      desc: '不知道該怎麼精進自己？立即了解！'
    }]

    return { plans };
  },
};
</script>

<template>
  <div id="plan">
    <div :class="$style.planContainer">
      <div
        v-for="plan in plans"
        :class="$style.planItem"
        :key="plan.id"
        >{{ plan.desc }}
      </div>
    </div>
    <p :class="$style.planCustomDesc">對前端有興趣卻苦無好的管道開啟前端之路嗎？量身打造最合適的前端之路<a href="">客製化洽詢</a>！</p>
  </div>
</template>

<style module>
.planContainer {
  @apply flex justify-center items-center;
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

