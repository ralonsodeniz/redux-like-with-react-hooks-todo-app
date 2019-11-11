// here we create a root reducer with the state of all reducers
// with the next expression we import the default export of the index.ts file from the selected folder
// remember that the default export is an object with the reducer, the initial state and the actions
import itemsReducer from "./items";
import loginReducer from "./login";
// next we import the types of the initial states
import { IItems } from "./items/types";
import { ILogin } from "./login/types";
// we import the logger middleware we created
import { logger } from "./middlewares";
import { IActionObject } from "common/types";

// we create the interface for the reduced state
interface IState {
  items: IItems[];
  login: ILogin;
}

// we create the initial state for the combined reducer
export const initialState: IState = {
  items: itemsReducer.initialState,
  login: loginReducer.initialState
};

// we create the combined reducer, this mimics the functionality of redux.combineReducers()
const mainReducer = (state: IState, action: IActionObject) => {
  // we get previous state
  const { items, login } = state;
  // we get current state here by passing the items and login reducer the previous state and the incoming action
  const currentState = {
    items: itemsReducer.reducer(items, action),
    login: loginReducer.reducer(login, action)
  };
  // we apply the logger middleware
  logger(action, state, currentState);
  // we return the current state
  return currentState;
};

export default mainReducer;
