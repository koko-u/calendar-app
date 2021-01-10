<template>
  <div id="calendar-week" class="container">
    <div class="columns is-mobile">
      <CalendarDay v-for="day in week" :day="day" :key="day.id" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CalendarDay from "./CalendarWeek/CalendarDay.vue";
import { Day } from "../models/Day";

export default defineComponent({
  name: "CalendarWeek",
  components: { CalendarDay },
  props: {
    week: {
      type: Array as PropType<Day[]>
    }
  }
});
</script>

<style scoped lang="scss">
#calendar-week {
  margin-bottom: 50px;

  .column {
    padding: 0 0 0 0;
  }
}
</style>
