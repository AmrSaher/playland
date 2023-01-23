<template>
  <section class="game-details">
    <h2 class="title">Game details</h2>
    <div class="content">
      <ul>
        <li>
          <span>Description: </span>
          Krunker is a free online action and fighting game similar to Counter
          Strike, but here it is possible to play with real players online from
          all over the world.
        </li>
        <li>
          <span>Name: </span>
          Krunker.io
        </li>
        <li>
          <span>Category: </span>
          Action game
        </li>
        <li>
          <span>Date: </span>
          2019-08-04
        </li>
        <li>
          <span>Developer: </span>
          Krunker.io
        </li>
        <li>
          <span>Rank: </span>
          4.5/5
        </li>
      </ul>
      <img
        src="https://cdn.ttt4.com/maher/images/thumbnail/krunker-io.jpg"
        class="game-img"
        alt="game avatar"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "GameDetailsSection",
};
</script>

<style lang="scss" scoped>
.game-details {
  margin-bottom: 30px;
  .title {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 15px;
    color: #9c9da6;
  }
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    gap: 20px;
    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      li {
        font-size: 16px;
        color: var(--sm-color);
        span {
          color: var(--text-color);
        }
      }
    }
    .game-img {
      width: 300px;
    }
  }
}
</style>
