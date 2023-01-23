<template>
  <section class="library">
    <header class="section-header">
      <h2 class="title">Library</h2>
      <router-link to="/library">
        <BIconArrowRightShort />
      </router-link>
    </header>
    <ul class="games">
      <li class="game">
        <div class="details">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskIAwqOKznsz8Fxgq8KirvX7kCAPDD1RNug&usqp=CAU"
            class="game-img"
            alt="game avatar"
          />
          <div>
            <h3 class="name">Pubg</h3>
            <span>40 time</span>
          </div>
        </div>
        <span class="date">12 min ago</span>
        <router-link to="" class="play">Play</router-link>
      </li>
      <li class="game">
        <div class="details">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tm7mVc15XCItlRRJ2LYxQ2raZTJqtiyXnw&usqp=CAU"
            class="game-img"
            alt="game avatar"
          />
          <div>
            <h3 class="name">Fortnite</h3>
            <span>12 time</span>
          </div>
        </div>
        <span class="date">1 day ago</span>
        <router-link to="" class="play">Play</router-link>
      </li>
      <li class="game">
        <div class="details">
          <img
            src="data:image/jpeg;base64,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"
            class="game-img"
            alt="game avatar"
          />
          <div>
            <h3 class="name">Valorant</h3>
            <span>98 time</span>
          </div>
        </div>
        <span class="date">1 week ago</span>
        <router-link to="" class="play">Play</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { BIconArrowRightShort } from "bootstrap-icons-vue";

export default {
  name: "LibrarySection",
  components: {
    BIconArrowRightShort,
  },
};
</script>

<style lang="scss" scoped>
.library {
  width: 100%;
  border-radius: 20px;
  border: 1px solid #2b2b30;
  padding: 25px;
  background-color: var(--card-color);
  margin-bottom: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .section-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    .title {
      font-size: 20px;
      font-weight: 400;
      color: #9c9da6;
    }
    a {
      color: var(--sm-color);
      font-size: 26px;
    }
  }
  .games {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
    .game {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 600px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 10px;
      }
      .details {
        display: flex;
        align-items: center;
        gap: 10px;
        grid-column: span 2;
        .game-img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 40%;
        }
        div {
          display: flex;
          flex-direction: column;
          gap: 3px;
          .name {
            font-size: 17px;
            font-weight: 500;
            color: #9c9da6;
          }
          span {
            color: var(--sm-color);
            font-size: 15px;
          }
        }
      }
      .date {
        font-size: 16px;
        color: var(--sm-color);
      }
      .play {
        padding: 5px 20px;
        font-size: 16px;
        color: var(--main-color);
        border: 1px solid var(--main-color);
        border-radius: 10px;
        line-height: 20px;
        font-weight: 500;
        text-align: center;
      }
    }
  }
}
</style>
