// we create the interface we are going to use as initial state for the login reducer
// in this case is an object with a set of properties
export interface ILogin {
  userName: string;
  listName: string;
  isLoading: boolean;
  isLoggedIn: boolean;
  error: string;
}

// we create the enum for the action types
export enum LOGIN {
  INIT = "LOGIN_INIT",
  SUCCESS = "LOGIN_SUCCESS",
  ERROR = "LOGIN_ERROR",
  TERMINATE = "LOGIN_TERMINATE"
}
