<template>
  <aside class="sidebar">
    <router-link to="/" class="logo" title="Playland">
      <BIconJoystick />
    </router-link>
    <nav class="links">
      <ul>
        <li>
          <router-link to="/" title="home">
            <BIconHouse />
          </router-link>
        </li>
        <li>
          <router-link to="/games" title="games">
            <BIconController />
          </router-link>
        </li>
        <li v-if="authed">
          <router-link to="/library" title="library">
            <BIconCollection />
          </router-link>
        </li>
        <li v-if="authed">
          <router-link to="/chat" title="chat">
            <BIconPeople />
          </router-link>
        </li>
      </ul>
    </nav>
    <nav class="links">
      <ul>
        <li v-if="authed">
          <a class="logout" title="logout" @click="logout">
            <BIconBoxArrowRight />
          </a>
        </li>
        <li v-if="!authed">
            <router-link to="/login" title="login">
                <BIconBoxArrowInLeft />
            </router-link>
        </li>
        <li v-if="!authed">
            <router-link to="/sign-up" title="sign up">
                <BIconPersonPlus />
            </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import {
  BIconJoystick,
  BIconHouse,
  BIconController,
  BIconPeople,
  BIconCollection,
  BIconBoxArrowRight,
  BIconBoxArrowInLeft,
  BIconPersonPlus
} from "bootstrap-icons-vue";

export default {
  name: "Sidebar",
  components: {
    BIconJoystick,
    BIconHouse,
    BIconController,
    BIconPeople,
    BIconCollection,
    BIconBoxArrowRight,
    BIconBoxArrowInLeft,
    BIconPersonPlus
  },
  data() {
    return {
        authed: true
    }
  },
  methods: {
    logout() {
        this.$swal.fire({
            title: 'Are you sure?',
            text: "You want to logout",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0d81ec',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout',
            showLoaderOnConfirm: true,
            background: '#21232b',
            color: '#f5f5f6'
        }).then((result) => {
            if (result.isConfirmed) {
                this.authed = false
            }
        })
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  box-shadow: rgba(66, 66, 77, 0.2) 0px 5px 20px 0px;
  width: 80px;
  background-color: var(--bg-color);
  border-right: 1px solid var(--border-color);
  position: sticky;
  left: 0;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  .logo {
    color: var(--text-color);
    font-size: 25px;
  }
  .links {
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
      li {
        a {
          font-size: 25px;
          color: var(--sm-color);
          transition: 0.3s all ease-in-out;
          &.active {
            color: var(--text-color);
            background-color: var(--main-color);
            font-size: 20px;
            padding: 10px;
            border-radius: 10px;
          }
          &.logout {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
