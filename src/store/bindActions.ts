// this is a util function that packages all the actions that are passed to it into an object with dispatched actions packed ready to use
// the returned object is similar to the object we pass to mapDispatchToProps in react-redux
// doing this allows us to create custom hooks that deliver to the user actions ready to use without needing to dispatch them in every call
import { INameToValueMap } from "common/types";

const bindActions = (actions: any, dispatch: any) => {
  // we create the function that binds the action with the dispatch and its arguments
  const bindAction = (action: any, dispatch: any) => {
    // we cannot use arrow functions in this part since we want to use arguments object
    return function() {
      // apply() calls the function with the specified object as the this value and the elements of specified array as the arguments.
      return dispatch(action.apply(null, arguments));
    };
  };

  // if only one action is passed we return the single action binded
  if (typeof actions === "function") return bindAction(actions, dispatch);
  // if the actions passed are not a object (remember we pass to this function either a single action or a object of actions to batch dispatched) or is null we throw an error
  if (typeof actions !== "object" || actions === null) {
    throw new Error(
      `bindActions expected an object or a function, instead received ${
        actions === null ? "null" : typeof actions
      }`
    );
  }
  // we initialize the boundActions object that will be returned
  const boundActions: INameToValueMap = {};
  // we loop throuhg the actions object inserting all the dispatch read actions into the boundActions property
  for (const key in actions) {
    // we select the action of the specific key
    const action: any = actions[key];
    // if it is a function (remember we create the actions as functions that returns objects, once they are dispatched they are the objects the reduers receive, unless they are async actions that are treated different by the asyncer)
    // we insert it into the boundActions object dispatch ready | actionName: (args) => dispatch(actionName(args))
    if (typeof action === "function") {
      boundActions[key] = bindAction(action, dispatch);
    }
  }
  // we return the object with all the ready to dispatch functions
  return boundActions;
};

export default bindActions;
