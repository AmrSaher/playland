<template>
  <section class="most-played-games">
    <h2 class="title">Most played games</h2>
    <div class="content">
      <ul class="cards">
        <Card />
        <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Rd4Cbh6AHvmFHRAdfkNiIhMmpxABdBCivw&usqp=CAU" />
        <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvm0yQSY2vS3fQ8vZVqwDquduv_EpLXymkQ&usqp=CAU" />
        <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6dQyQllqd99IlOJ5PUWPfXu3I-3nVcX1PA&usqp=CAU" />
      </ul>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "MostPlayedGamesSection",
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.most-played-games {
  margin-bottom: 30px;
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
      @media (max-width: 1300px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 600px) {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
