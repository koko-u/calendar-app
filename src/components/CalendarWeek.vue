<template>
  <div id="calendar-week" class="container">
    <div class="columns is-mobile">
      <CalendarDay
        v-for="day in store.state.week"
        :day="day"
        :key="day.id"
        :set-active-day="id => store.setActiveDay(id)"
        :toggle-edit="(id, index) => store.toggleEdit(id, index)"
        :update-event="
          (id, index, details) => store.updateEvent(id, index, details)
        "
        :delete-event="(id, index) => store.deleteEvent(id, index)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CalendarDay from "./CalendarWeek/CalendarDay.vue";
import { Store } from "@/models/Store";

export default defineComponent({
  name: "CalendarWeek",
  components: { CalendarDay },
  props: {
    store: {
      type: Object as PropType<Store>,
      required: true
    }
  },
  methods: {}
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
