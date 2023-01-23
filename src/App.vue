<template>
  <main-layout>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <Component :is="Component" />
      </transition>
    </router-view>
  </main-layout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  name: "App",
  components: {
    MainLayout,
  },
};
</script>

<style lang="scss" scoped>
/* Fade Transition */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.4s opacity ease-out;
}
/* End Fade Transition */
</style>
