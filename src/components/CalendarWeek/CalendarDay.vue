<template>
  <div class="day column" @click="setActiveDay(day.id)">
    <div class="day-banner has-text-white has-text-centered">
      {{ day.abbvTitle }}
    </div>
    <div class="day-details">
      <div class="day-number">{{ day.id }}</div>
      <CalendarEvent
        v-for="(event, index) in day.events"
        :day-id="day.id"
        :event-index="index"
        :event="event"
        :toggle-edit="toggleEdit"
        :update-event="updateEvent"
        :delete-event="deleteEvent"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CalendarEvent from "./CalendarDay/CalendarEvent.vue";
import { Day } from "@/models/Day";

export default defineComponent({
  name: "CalendarDay",
  components: { CalendarEvent },
  props: {
    day: {
      type: Object as PropType<Day>
    },
    setActiveDay: {
      type: Function as PropType<(id: number) => void>
    },
    toggleEdit: {
      type: Function as PropType<(dayId: number, eventIndex: number) => void>,
      required: true
    },
    updateEvent: {
      type: Function as PropType<(dayId: number, eventIndex: number, eventDetails: string) => void>,
      required: true
    },
    deleteEvent: {
      type: Function as PropType<(dayId: number, eventIndex: number) => void>,
      required: true
    }
  }
});
</script>

<style scoped lang="scss">
.day {
  background-color: #4a4a4a;
  color: #fff;
  border-left: 1px solid #8f8f8f;
  border-bottom: 1px solid #8f8f8f;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: darken(#4a4a4a, 3%);
  }

  .day-banner {
    background-color: #333333;
    color: #fff;
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: 600;
  }

  .day-details {
    padding: 10px;
  }

  &:last-child {
    border-right: 1px solid #8f8f8f;
  }
}
</style>
