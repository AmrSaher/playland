<template>
  <div class="categories-section">
    <header class="section-header">
      <h2 class="title">Categories</h2>
    </header>
    <ul class="categories">
      <li><a href="#">All</a></li>
      <li><a href="#">Car games</a></li>
      <li><a href="#">Sports games</a></li>
      <li><a href="#">Action games</a></li>
      <li><a href="#">War games</a></li>
      <li><a href="#">Smart games</a></li>
      <li><a href="#">Skill games</a></li>
      <li><a href="#">Puzzle games</a></li>
      <li><a href="#">Children games</a></li>
      <li><a href="#">Girls games</a></li>
      <li><a href="#">Luagh games</a></li>
      <li><a href="#">Racing games</a></li>
      <li><a href="#">Paper games</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CategoriesSection",
};
</script>

<style lang="scss" scoped>
.categories-section {
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  border: 1px solid #2b2b30;
  padding: 25px;
  background-color: var(--card-color);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .section-header {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .title {
      font-size: 20px;
      font-weight: 400;
      color: #9c9da6;
    }
  }
  .categories {
    display: flex;
    flex-direction: column;
    gap: 10px;
    a {
      color: var(--main-color);
      font-size: 16px;
      text-decoration: underline;
    }
  }
}
</style>
