import { AbbrevName, FullName } from "./WeekName";
import { Event } from "./Event";

export type Day = {
  id: number;
  abbvTitle: AbbrevName;
  fullTitle: FullName;
  events: Event[];
  active: boolean;
};
