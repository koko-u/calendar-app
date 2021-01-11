<template>
  <div class="day-event" :style="backgroundColor">
    <div v-if="!event.edit">
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons">
        <span class="operation">
          <font-awesome-icon
            icon="pen-square"
            class="edit-icon"
            @click="toggle"
          />
        </span>
        <span class="operation">
          <font-awesome-icon
            icon="trash-alt"
            class="delete-icon"
            @click="del"
          />
        </span>
      </div>
    </div>
    <div v-else>
      <input
        type="text"
        :placeholder="event.details"
        v-model="inputDetails"
        ref="inputRef"
        @keyup.enter="update"
      />
      <div class="has-text-centered icons">
        <font-awesome-icon icon="check" @click="update" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed, nextTick } from "vue";
import { Event } from "@/models/Event";

export default defineComponent({
  name: "CalendarEvent",
  props: {
    dayId: {
      type: Number as PropType<number>,
      required: true
    },
    eventIndex: {
      type: Number as PropType<number>,
      required: true
    },
    event: {
      type: Object as PropType<Event>,
      required: true
    },
    toggleEdit: {
      type: Function as PropType<(dayId: number, eventIndex: number) => void>,
      required: true
    },
    updateEvent: {
      type: Function as PropType<
        (dayId: number, eventIndex: number, eventDetails: string) => void
      >,
      required: true
    },
    deleteEvent: {
      type: Function as PropType<(dayId: number, eventIndex: number) => void>,
      required: true
    }
  },
  setup(props, context) {
    const inputDetails = ref("");
    const inputRef = ref<HTMLInputElement>();

    const toggle = () => {
      props.toggleEdit(props.dayId, props.eventIndex);
      nextTick(() => {
        inputRef.value?.focus();
      });
    };
    const update = () => {
      props.updateEvent(props.dayId, props.eventIndex, inputDetails.value);
      toggle();
    };
    const del = () => {
      props.deleteEvent(props.dayId, props.eventIndex);
    };

    const backgroundColor = computed(() => {
      const colors = ["#ff9999", "#85d6ff", "#99ff99"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `background-color: ${randomColor}`;
    });

    return {
      inputDetails,
      inputRef,
      toggle,
      update,
      del,
      backgroundColor
    };
  }
});
</script>

<style scoped lang="scss">
.day-event {
  margin-top: 6px;
  margin-bottom: 6px;
  display: block;
  color: #4c4c4c;
  padding: 5px;

  .details {
    display: block;
  }

  .icons .fa {
    padding: 0 2px;
  }
  .icons span.operation {
    padding: 0 2px;
  }

  input {
    background: none;
    border: 0;
    border-bottom: 1px solid #fff;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
}
</style>
