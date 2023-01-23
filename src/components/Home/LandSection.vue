<template>
  <section class="land">
    <span>New</span>
    <h2 class="name">Spider man</h2>
    <router-link to="" class="play">Play</router-link>
    <img src="../../assets/spider.png" alt="spider man" class="spider">
  </section>
</template>

<script>
export default {
  name: "LandSection",
};
</script>

<style lang="scss" scoped>
.land {
  position: relative;
  width: 100%;
  border-radius: 20px;
  border: 1px solid #2b2b30;
  padding: 25px;
  background-color: var(--card-color);
  background: url(../../assets/test2.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  span {
    font-size: 14px;
    border-radius: 10px;
    background-color: #fa5353;
    padding: 5px;
    font-weight: 400;
  }
  .name {
    font-size: 30px;
    font-weight: 500;
  }
  .play {
    color: var(--text-color);
    background-color: var(--main-color);
    padding: 10px 15px;
    border-radius: 10px;
    letter-spacing: 3px;
  }
  .spider {
    position: absolute;
    right: 50px;
    width: 350px;
    top: -50px;
    @media (max-width: 800px) {
      width: 300px;
      top: -30px;
    }
    @media (max-width: 700px) {
      display: none;
    }
  }
}
</style>
