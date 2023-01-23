<template>
  <div class="games-section">
    <ul class="cards">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ul>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "GamesSection",
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.games-section {
  width: 100%;
  padding-right: 20px;
  margin-bottom: 30px;
  .cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    .card {
      width: 100%;
      a {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .card-img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 30px;
        }
        .name {
          font-size: 16px;
          font-size: 500;
          color: #9c9da6;
        }
        span {
          font-size: 15px;
          font-weight: 400;
          color: var(--sm-color);
          margin-top: -5px;
        }
      }
    }
  }
}
</style>
