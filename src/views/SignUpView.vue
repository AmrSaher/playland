<template>
  <div class="page sign-up">
    <Header />
    <div class="content">
      <div class="auth-card">
        <h2 class="title">Sign up</h2>
        <form @submit.prevent="">
          <div class="field">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              class="inp"
              autofocus
              required
              autocomplete="username"
            />
          </div>
          <div class="field">
            <label for="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              class="inp"
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
          <div class="field">
            <label for="cpassword">Confirm password</label>
            <input
              type="password"
              id="cpassword"
              placeholder="Confirm password"
              class="inp"
              required
            />
          </div>
          <input type="submit" value="Sign up" class="btn" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "SignUpView",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.sign-up {
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 30px 0;
    padding-right: 20px;
  }
}
</style>
