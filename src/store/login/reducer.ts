import { ILogin, LOGIN } from "./types";
import { IActionObject } from "common/types";

// we create the initial state for login reducer
export const initialState: ILogin = {
  userName: "",
  listName: "",
  isLoading: false,
  isLoggedIn: false,
  error: ""
};

// we create login reducer
const login = (state = initialState, action: IActionObject) => {
  switch (action.type) {
    case LOGIN.INIT:
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case LOGIN.SUCCESS:
      return {
        ...state,
        userName: action.payload.userName,
        listName: action.payload.listName,
        isLoading: false,
        isLoggedIn: true
      };
    case LOGIN.ERROR:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload
      };
    case LOGIN.TERMINATE:
      return {
        ...state,
        userName: "",
        listName: "",
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default login;
