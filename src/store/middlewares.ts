// this middleware mocks the functionallity of redux-thunk
// it's a curried function that first takes dispatch and state and returns a function with this parameters that waits to get the action
// after it takes the action it executes the function code
// in this case if the action is type of function, in this case it will be an async action, it passes the dispatch and state to the action for it to manage the dispatching of the actions inside of it to the reducer in the proper time
// if it is not a function it dispatches the action to the reducer inmediatly
export const asyncer = (dispatch: any, state: any) => (action: any) =>
  typeof action === "function" ? action(dispatch, state) : dispatch(action);

// we create the logger middleware to check actions and state progression in the console
export const logger = (
  action: object,
  prevState: object,
  currentState: object
) => {
  // console.groupCollapsed() creates a group to show multiple console.logs at as a block
  console.groupCollapsed("Logger");
  console.log("%c Action:", "color:blue", action);
  console.log("%c Previous State:", "color:red", prevState);
  console.log("%c Current State", "color:green", currentState);
  // groupEnd() terminates the console.log() block
  console.groupEnd();
};
