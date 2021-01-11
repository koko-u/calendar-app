import { Day } from "./Day";

export type Store = {
  state: {
    week: Day[];
  };
  getActiveDay(): Day | undefined;
  setActiveDay(id: number): void;
  submitEvent(eventDetails: string): "success" | "error";
  toggleEdit(dayId: number, eventIndex: number): void;
  updateEvent(dayId: number, eventIndex: number, eventDetails: string): void;
  deleteEvent(dayId: number, eventIndex: number): void;
};
