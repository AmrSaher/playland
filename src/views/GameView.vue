<template>
  <div class="page game">
    <Header />
    <div class="content">
      <GameContainer />
      <GameDetailsSection />
      <SimilarGamesSection />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import GameContainer from "@/components/Game/GameContainer.vue";
import GameDetailsSection from "@/components/Game/GameDetailsSection.vue";
import SimilarGamesSection from "@/components/Game/SimilarGamesSection.vue";

export default {
  name: "GamesView",
  components: {
    Header,
    GameDetailsSection,
    GameContainer,
    SimilarGamesSection,
  },
};
</script>

<style lang="scss" scoped>
.game {
  .content {
    width: 100%;
  }
}
</style>
