// we create the interface for the initial state of items reducer, is an array of objects
export interface IItems {
  [index: number]: {
    id: number;
    text?: string;
    completed?: boolean;
  };
}

// ITEMS is an enum of constant values with they references used for the action types
export enum ITEMS {
  ADD = "ITEMS_ADD",
  RESET = "ITEMS_RESET",
  COMPLETE = "ITEMS_COMPLETE"
}
