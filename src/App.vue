<template>
  <CalendarWeek :store="store" />
  <CalendarEntry :store="store" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CalendarEntry from "./components/CalendarEntry.vue";
import CalendarWeek from "./components/CalendarWeek.vue";
import { store } from "./store";

export default defineComponent({
  name: "App",
  components: { CalendarWeek, CalendarEntry },
  data() {
    return {
      store
    };
  }
});
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

#app {
  height: inherit;
  background: #6e6e6e;
  padding-top: 40px;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}

</style>
