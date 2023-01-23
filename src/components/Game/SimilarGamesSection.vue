<template>
  <section class="similar-games">
    <h2 class="title">Similar games</h2>
    <div class="content">
      <ul class="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "SimilarGamesSection",
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.similar-games {
  margin-bottom: 30px;
  padding-right: 20px;
  .title {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 15px;
    color: #9c9da6;
  }
  .content {
    width: 100%;
    .cards {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
    }
  }
}
</style>
