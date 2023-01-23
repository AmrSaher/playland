<template>
  <li class="card">
    <router-link to="/game/bob1">
      <img
        :src="img"
        class="card-img"
        alt="game-avatar"
      />
      <h3 class="name">Krunker.io</h3>
      <span>392 time</span>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "Card",
  props: {
    img: {
      required: false,
      default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoHzmitclvNTj-ySirUPiph8NLHlziFsPVA&usqp=CAU'
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>
