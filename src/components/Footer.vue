<script lang="ts">
import { useStore } from "vuex";
import { State } from "@/store";

export default {
  name: "Footer",

  setup() {
    const { state } = useStore<State>();

    return {
      state,
    };
  },
};
</script>

<template>
  <div class="py-5 text-center">{{ state.year }}</div>
</template>
