<script lang="ts">
import { ref } from "vue";
import emailjs from "emailjs-com";

export default {
  name: "ContactForm",
  setup() {
    const {
      VITE_EMAILJS_USER_ID: emailjsUserId,
      VITE_EMAILJS_SERVICE_ID: emailjsServiceId,
      VITE_EMAILJS_TEMPLATE_ID: emailjsTemplateId,
    } = import.meta.env;

    const hasSend = ref(false);
    const isLoading = ref(false);
    const send = async (e: HTMLFormElement) => {
      if (isLoading.value) {
        return;
      }

      isLoading.value = true;
      try {
        await emailjs.sendForm(
          emailjsServiceId,
          emailjsTemplateId,
          e.target,
          emailjsUserId
        );
        hasSend.value = true;
        isLoading.value = false;
      } catch (err) {
        window.location.reload();
      }
    };

    return {
      isLoading,
      hasSend,
      send,
    };
  },
};
</script>

<template>
  <div v-if="hasSend" :class="$style.successContainer">
    <p>我們都知道坐而言不如起而行，改變從行動開始</p>
    <p>就讓我們一起往更美好的前端之路邁進吧！</p>
  </div>
  <form v-else :class="$style.contactForm" @submit.prevent="send">
    <h1 :class="$style.contactTitle">立即聯絡</h1>
    <div :class="$style.formItem">
      <input
        type="email"
        name="from_email"
        placeholder="* 請輸入 Email"
        required
        :class="$style.formInput"
      />
    </div>
    <div :class="$style.formItem">
      <input
        type="text"
        name="from_contactInfo"
        placeholder="* 請輸入聯絡資訊ex: 手機, lineID..etc."
        required
        :class="$style.formInput"
      />
    </div>
    <div :class="$style.formItem">
      <input
        type="text"
        name="from_title"
        placeholder="* 請大概描述問題"
        required
        :class="$style.formInput"
      />
    </div>
    <div :class="$style.formItem">
      <input
        type="submit"
        value="送出"
        :class="[$style.formBtn, isLoading ? 'disabled' : '']"
      />
    </div>
    <p>世界很大很美好，我會盡快與您聯繫🔥</p>
  </form>
</template>

<style module>
.contactForm {
  @apply flex flex-col mx-auto md:w-2/3;
}

.contactTitle {
  @apply mb-12 text-4xl text-white;
}

.formItem {
  @apply mb-4;
}

.formBtn,
.formInput {
  min-height: 50px;
  @apply w-full rounded;
}

.formInput {
  @apply px-4 text-center;
}

.formBtn {
  @apply bg-indigo-400 text-white;

  &.disabled {
    @apply opacity-30 cursor-wait;
  }
}

.successContainer {
  @apply text-4xl text-white;
  animation: animSuccess 3s forwards;
}

@keyframes animSuccess {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
  }
}
</style>
