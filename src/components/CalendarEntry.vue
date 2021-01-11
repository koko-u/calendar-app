<template>
  <div id="calendar-entry">
    <div class="calendar-entry-note">
      <input type="text" placeholder="New Event" v-model="eventDetails" />
      <p class="calendar-entry-day">
        Day of event: <span class="bold">{{ titleOfActiveDay }}</span>
      </p>
      <a class="button is-primary is-small is-outlined" @click="submitEvent">Submit</a>
    </div>
    <p class="error" v-if="hasError">
      You must type something first.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Store } from "@/models/Store";

export default defineComponent({
  name: "CalendarEntry",
  props: {
    store: {
      type: Object as PropType<Store>,
      required: true
    }
  },
  data() {
    return {
      eventDetails: "",
      hasError: false
    };
  },
  computed: {
    titleOfActiveDay(): string | undefined {
      const activeDay = this.store.getActiveDay();
      return activeDay?.fullTitle;
    }
  },
  methods: {
    submitEvent() {
      const result = this.store.submitEvent(this.eventDetails);
      switch (result) {
        case "success":
          this.hasError = false;
          this.eventDetails = "";
          break;
        case "error":
          this.hasError = true;
          break;
      }
    }
  }
});
</script>

<style scoped lang="scss">

#calendar-entry {
  background: #fff;
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;

  .calendar-entry-note {
    input {
      width: 200px;
      font-weight: 600;
      border: 0;
      border-bottom: 1px solid #ccc;
      font-size: 15px;
      height: 30px;
      margin-bottom: 10px;

      &:focus {
        outline: none;
      }
    }

    .calendar-entry-day {
      color: #42b883;
      font-size: 12px;
      margin-bottom: 10px;
      padding-bottom: 5px;

      .bold {
        font-weight: 600;
      }
    }

    .submit {
      display: block;
      margin: 0 auto;
    }
  }

  .error {
    color: red;
    font-size: 13px;
  }
}

</style>
