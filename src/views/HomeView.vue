<template>
  <StoryCarousel />
</template>

<script>
import { defineComponent } from "vue";

// Components
import StoryCarousel from "@/components/StoryCarousel.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    StoryCarousel,
  },
});
</script>
