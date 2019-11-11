import { ITEMS, IItems } from "./types";
import { IActionObject } from "common/types";

// we initialize the state of the items reducer, item state is type of IItems array of objects
export const initialState: IItems[] = [];

const items = (state = initialState, action: IActionObject) => {
  switch (action.type) {
    case ITEMS.RESET:
      return [];
    case ITEMS.ADD:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false
        }
      ];
    case ITEMS.COMPLETE:
      return state.map((item: any) => {
        return item.id === action.payload
          ? {
              ...item,
              completed: !item.completed
            }
          : item;
      });
    default:
      return state;
  }
};

export default items;
