<template>
  <header class="header">
    <form @submit.prevent="search" class="search-box">
      <button type="submit"><BIconSearch /></button>
      <input
        type="text"
        placeholder="Search..."
        :class="searching ? 'inp active' : 'inp'"
        autocomplete="on"
        v-model="searchText"
      />
    </form>
    <ul>
      <li class="notifi-btn">
        <BIconBell />
      </li>
      <li>
        <router-link to="/">
          <img
            src="data:image/jpeg;base64,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"
            alt="profile"
          />
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import { BIconSearch, BIconBell } from "bootstrap-icons-vue";

export default {
  name: "Header",
  components: {
    BIconSearch,
    BIconBell,
  },
  data() {
    return {
      searching: false,
      searchText: ''
    }
  },
  methods: {
    search() {
      if (this.searching && this.searchText) {
        // Search
      }
      this.searching = !this.searching;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  padding: 15px 20px 15px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search-box {
    position: relative;
    .inp {
      width: 50px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      padding: 15px;
      border-radius: 50px;
      border: none;
      outline: none;
      background-color: var(--card-color);
      color: var(--card-color);
      transition: 0.3s all ease-in-out;
      cursor: pointer;
      &::placeholder {
        visibility: hidden;
      }
      &.active {
        width: 300px;
        @media (max-width: 600px) {
          width: 200px;
        }
        padding-left: 50px;
        color: var(--text-color);
        cursor: text;
        &::placeholder {
          visibility: visible;
        }
      }
    }
    button {
      position: absolute;
      top: calc(50% + 2px);
      left: 16px;
      transform: translateY(-50%);
      z-index: 99;
      font-size: 20px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: var(--sm-color);
    }
  }
  ul {
    display: flex;
    align-items: center;
    gap: 20px;
    .notifi-btn {
      background-color: var(--card-color);
      color: #9c9da6;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 40%;
      cursor: pointer;
    }
    a {
      img {
        width: 50px;
        height: 50px;
        border-radius: 40%;
        object-fit: cover;
      }
    }
  }
}
</style>
