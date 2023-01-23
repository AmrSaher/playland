<template>
  <div class="page games">
    <Header />
    <div class="content">
      <CategoriesSection />
      <GamesSection />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import CategoriesSection from "@/components/Games/CategoriesSection.vue";
import GamesSection from "@/components/Games/GamesSection.vue";

export default {
  name: "GamesView",
  components: {
    Header,
    CategoriesSection,
    GamesSection,
  },
};
</script>

<style lang="scss" scoped>
.games {
  .content {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 40px;
    width: 100%;
  }
}
</style>
