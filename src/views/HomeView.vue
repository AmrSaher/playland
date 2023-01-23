<template>
  <div class="page home">
    <Header />
    <div class="content">
      <Section1 />
      <Section2 />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Section1 from "@/components/Home/Section1.vue";
import Section2 from "@/components/Home/Section2.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Section1,
    Section2,
  },
};
</script>

<style lang="scss" scoped>
.home {
  .content {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 40px;
    width: 100%;
    @media (max-width: 1100px) {
      grid-template-columns: 1fr;
      padding-right: 20px;
    }
  }
}
</style>
