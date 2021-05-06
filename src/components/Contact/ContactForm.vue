<script lang="ts">
import emailjs from "emailjs-com";

export default {
  name: "ContactForm",
  setup() {
    const send = async (e: HTMLFormElement) => {
      try {
        await emailjs.sendForm(
          "default_service",
          "template_8peaq8r",
          e.target,
          "user_nt22Xr6rfk0pLVV2aEiKc"
        );
      } catch (err) {
        window.location.reload();
      }
    };

    return {
      send,
    };
  },
};
</script>

<template>
  <form :class="$style.contactForm" @submit.prevent="send">
    <h1 :class="$style.contactTitle">- 凱文前端諮詢工作坊 -</h1>
    <div :class="$style.formItem">
      <input
        type="email"
        id="contact-email"
        name="from_email"
        placeholder="請輸入 Email"
        :class="$style.formInput"
      />
    </div>
    <div :class="$style.formItem">
      <input type="submit" value="送出" :class="$style.formBtn" />
    </div>
    <p>
      我們都知道坐而言不如起而行，改變從行動開始，就讓我們一起往前端之路邁進吧！
    </p>
  </form>
</template>

<style module>
.contactForm {
  @apply flex flex-col mx-auto my-32 md:w-2/3;
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

.formBtn {
  @apply bg-indigo-400 text-white;
}
</style>
