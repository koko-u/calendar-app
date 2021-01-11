import { seedData } from "@/seeds";
import { Store } from "@/models/Store";
import { Day } from "@/models/Day";

export const store: Store = {
  state: {
    week: seedData
  },
  getActiveDay(): Day | undefined {
    return this.state.week.find(day => day.active);
  },
  setActiveDay(id: number) {
    for (const day of this.state.week) {
      day.active = day.id === id;
    }
  },
  submitEvent(eventDetails: string): "success" | "error" {
    if (!eventDetails) {
      return "error";
    }

    const day = this.getActiveDay();
    if (day) {
      day.events.push({
        details: eventDetails,
        edit: false
      });
      return "success";
    } else {
      return "error";
    }
  },
  toggleEdit(dayId: number, eventIndex: number) {
    for (const day of this.state.week) {
      for (let index = 0; index < day.events.length; index++) {
        if (day.id === dayId && index === eventIndex) {
          day.events[index].edit = !day.events[index].edit;
        } else {
          day.events[index].edit = false;
        }
      }
    }

    // const day = this.state.week.find(day => day.id === dayId);
    // if (day && eventIndex >= 0 && eventIndex < day.events.length) {
    //   day.events[eventIndex].edit = !day.events[eventIndex].edit;
    // }
  },
  updateEvent(dayId: number, eventIndex: number, eventDetails: string) {
    const day = this.state.week.find(day => day.id === dayId);
    if (day && eventIndex >= 0 && eventIndex < day.events.length) {
      if (eventDetails && eventDetails !== day.events[eventIndex].details) {
        day.events[eventIndex].details = eventDetails;
      }
    }
  },
  deleteEvent(dayId: number, eventIndex: number) {
    const day = this.state.week.find(day => day.id === dayId);
    if (day) {
      if (eventIndex >= 0 && eventIndex < day.events.length) {
        day.events.splice(eventIndex, 1);
      }
    }
  }
};
