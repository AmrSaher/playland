<template>
  <main>
    <Sidebar />
    <slot></slot>
  </main>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "MainLayout",
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
}
</style>
