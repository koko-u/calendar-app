import { seedData } from "../seeds";
import { Store } from "../models/Store";

export const store: Store = {
  state: {
    week: seedData
  }
};
