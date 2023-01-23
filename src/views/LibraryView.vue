<template>
  <div class="page library-section">
    <Header />
    <div class="content">
      <section class="library">
        <h2 class="title">Library</h2>
        <div class="content">
          <ul class="cards">
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";

export default {
  name: "LibraryView",
  components: {
    Header,
    Card,
  },
};
</script>

<style lang="scss" scoped>
.library-section {
  .content {
    width: 100%;
    .library {
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
  }
}
</style>
