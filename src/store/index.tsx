// REMEMBNER FILES THAT USES JSX NEEDS TO HAVE JSX EXTENSION IF NOT USING TS OR TSX IF USING TS IN ORDER TO JSX TO WORK
// here we are going to creaete the redux functionality using useReducer()
// we will give all the App access to the reducer state and dispatch through a context usin create and use context
import React, {
  createContext,
  useCallback,
  useContext,
  useReducer
} from "react";
// we import the context props type interface we defined in common types
// remember is an object with state and dispatch properties
import { IContextProps } from "common/types";
// we import our "thunky" middleware to create an enhanced dispatch to it checks if the action is a function or an object
// if it is an object it will dispatch it, otherwise it will pass to the function the dispatch and the state
import { asyncer } from "./middlewares";
// we import the mainReducer and the initialState that we will pass as the reducer to useReducer()
import mainReducer, { initialState } from "./reducers";

// we create the GlobalStore context that is going to be used to pass down to the app the access to the state and dispatch
// we pass an empty object of the interface IContextProps type as initial value of the context
// since we are assigning the type in the argument declaration of the function we have to use as instead of the : we use when we are declaring the type of the param while declaring the function
const GlobalStoreContext = createContext({} as IContextProps);
// we create and export a useGlobalStoreContext custom hook so it can be used in other custom hooks to access the GlobalStore context
export const useGlobalStoreContext = () => useContext(GlobalStoreContext);
// next we create the Provider component that will pass down the global state and dispatch to the app
const Provider = ({ children }: { children: React.ReactNode }) => {
  // declaration of the useReducer() it takes the mainReducer (root reducer) and the initial state
  // we get from it the actual state and the dispatch function
  // since we are going to enhance the dispatch we call this one dispatchBase
  const [state, dispatchBase] = useReducer(mainReducer, initialState);
  // we create the enhanced version of the dispatch that gives us back the useReducer (dispatchBase in our case) using the asyncer
  // we use the react hook useCallback
  // it will return a memoized version of the callback that will only change if one of the dependencies changes
  // it will receive two parameters — one callback function and an array of dependencies
  // by passing an empty array as the second parameter, the callback will be returned after each change, which makes it suitable for our dispatch function to be updated on every state change
  const dispatch = useCallback(asyncer(dispatchBase, state), []);
  // lastly we return the GlobalStoreContext.Provider wrapping the childrens rendered inside it
  return (
    <GlobalStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStoreContext.Provider>
  );
};

export default Provider;
