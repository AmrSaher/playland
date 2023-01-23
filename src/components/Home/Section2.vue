<template>
  <div class="section-2">
    <header class="section-header">
      <h2 class="title">Social</h2>
      <router-link to="/chat">
        <BIconArrowRightShort />
      </router-link>
    </header>
    <ul class="friends">
      <li class="friend">
        <router-link to="">
          <img
            src="data:image/jpeg;base64,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"
            class="friend-img"
            alt="friend avatar"
          />
          <div>
            <h3 class="name">John doe</h3>
            <span>welcome !!</span>
          </div>
        </router-link>
      </li>
      <li class="friend">
        <router-link to="">
          <img
            src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/19/UP2538-CUSA05620_00-AV00000000000197/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000"
            class="friend-img"
            alt="friend avatar"
          />
          <div>
            <h3 class="name">Amr saher</h3>
            <span>hello world</span>
          </div>
        </router-link>
      </li>
      <li class="friend">
        <router-link to="">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisnqJNH948sgZSieDsECWqyV31lHjlCUCVA&usqp=CAU"
            class="friend-img"
            alt="friend avatar"
          />
          <div>
            <h3 class="name">Sara mohamed</h3>
            <span>can you play with me</span>
          </div>
        </router-link>
      </li>
      <li class="friend">
        <router-link to="">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIX8Dqv7NPE6wyoGK5jq6g65IOFnbFBCLXkA&usqp=CAU"
            class="friend-img"
            alt="friend avatar"
          />
          <div>
            <h3 class="name">Abdo saher</h3>
            <span>come on</span>
          </div>
        </router-link>
      </li>
      <li class="friend">
        <router-link to="">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfpvGWUZhToOMvR7TEv3RmuhRj60Y7v5jKQ&usqp=CAU"
            class="friend-img"
            alt="friend avatar"
          />
          <div>
            <h3 class="name">Fares walid</h3>
            <span>open valorant</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { BIconArrowRightShort } from "bootstrap-icons-vue";

export default {
  name: "Section2",
  components: {
    BIconArrowRightShort,
  },
};
</script>

<style lang="scss" scoped>
.section-2 {
  width: 100%;
  border-top-left-radius: 20px;
  border: 1px solid #2b2b30;
  padding: 25px;
  background-color: var(--card-color);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (max-width: 1100px) {
    display: none;
  }
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
  .friends {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
    .friend {
      width: 100%;
      a {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        .friend-img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 50%;
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
    }
  }
}
</style>
