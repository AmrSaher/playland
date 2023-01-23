<template>
  <div class="section-1">
    <LandSection />
    <MostPlayedGamesSection />
    <LibrarySection />
  </div>
</template>

<script>
import LandSection from "./LandSection.vue";
import MostPlayedGamesSection from "./MostPlayedGamesSection.vue";
import LibrarySection from "./LibrarySection.vue";

export default {
  name: "Section1",
  components: {
    LandSection,
    MostPlayedGamesSection,
    LibrarySection,
  },
};
</script>
