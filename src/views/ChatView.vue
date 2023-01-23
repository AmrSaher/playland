<template>
  <div class="page chat">
    <Header />
    Chat Page
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "ChatView",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.chat {
}
</style>
