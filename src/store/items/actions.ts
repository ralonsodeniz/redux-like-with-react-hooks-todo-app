import { ITEMS } from "./types";
// we declare the actions for the items reducer
export const addItem = (text: string) => ({
  type: ITEMS.ADD,
  payload: text
});

export const resetItems = () => ({
  type: ITEMS.RESET
});

export const completeItem = (id: number) => ({
  type: ITEMS.COMPLETE,
  payload: id
});
