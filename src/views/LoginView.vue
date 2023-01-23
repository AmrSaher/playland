<template>
  <div class="page login">
    <Header />
    <div class="content">
      <div class="auth-card">
        <h2 class="title">Login</h2>
        <form @submit.prevent="">
          <div class="field">
            <label for="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              class="inp"
              autofocus
              required
              autocomplete="email"
            />
          </div>
          <div class="field">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              class="inp"
              required
            />
          </div>
          <input type="submit" value="Login" class="btn">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "LoginView",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.login {
    .content {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 30px 0;
        padding-right: 20px;
    }
}
</style>
