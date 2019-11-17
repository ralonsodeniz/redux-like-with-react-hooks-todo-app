## Introduction

The idea behind this project is to mimic how redux reducer-action patter works using only react hooks.

In order to achive that we are going to use the **userReducer()** hook as provider of the current state and dispatch function to fire the actions.

We will create a context to pass down to the app the access to the state and dispatch.

You can have as many reducers and actions groups as you want since we will create a combineReducers like function as we have in react-redux.

We will also implement two middlewares that are commonly used in redux, thunks for async actions and logger to be able to track what is happening with the actions and the state.

This project follows the example by Pourya Da and that you can find in:

- [Medium](https://medium.com/strands-tech-corner/react-state-management-without-redux-d39c7087039d)
- [GitHub](https://github.com/bexic/react-without-redux)
  The redux pattern is almost the same and the app itself has the same functionality but is styled using styled-components

The purpose of this file is just to give a glance of the workflow that has been followed to achive the purpose of the project. For a more detailed explanation please follow the comments in the code.

Lastly, it uses typescript for type-checking as the original source with some modifications

## Reducers and actions

We begin creating the different _reducers_ and _actions_ for each reducer we want to have. In this particular case we have **store/items** and **store/login** folders. The goal is to have in the end a single reducer that listen to all the different actions to be passed to the **useReducer() hook**.

Inside the reducers folder you can find:

- A _type.ts_ file where the types needed are declared
- A _reducer.ts_ file where a single reducer is coded using the same principles redux has
- An _actions.ts_ file where all the actions for that redure are held. As the reducer, they follow the same pattern that redux actions
- A _index.ts_ file were we import the reducer, the initial state and the actions to later export them as a default object we will use in the main (or root) reducer file

## Middlewares

Next step is to create the _middlewares_ we are going to use in the **store/middlewares.ts**. We have two in this example:

- **asyncer**: This middleware mimics the functionality redux-thunk regarding to async actions. It is a curried function that takes dispatch and state from the useReducer as first set of arguments and an action as second set. If the action passed is an object the asyncer will dispatch it to the reducers. Otherwise, if the action is a function (an async action), it will pass to the async action the dispatch and the state so it can dispatch the actions it has inside of itself on the corresponding order according to the async code.
  -- **logger**: logger mimics the redux-logger giving us the information about the actions and state in the console in a way we can keep track of the changes and which action is making them to happen.

## Creating the rootReducer or mainReducer and the initial state for the useReducer()

Once we have all the single reducers and the middlewares we create the mainReducer in the file **store/reducers.ts**.

Here we import the single reducers object and create a function to combine all of them. Inside this function, **mainReducer** we get both the _previuous state_ and the _current state_. In order to get the current state we create an object where we get the new values of the different reducers state. To get this new value we pass to their reducers the previous state and the action so they can update it in its reducer. For the end step we call the logger middleware with the action that triggered the update, the previous state and the current one.

## Creating the "store" and passing it through the app

The process of creating the **store** and passing it down to the App is done in the **store/index.tsx**. Please be sure to use **.TSX** extension or, **.JSX** if your are not using typescript, for this file since it _renders JSX_ code.

We are going to use some react hooks and methods:

- **createContext** to create the context we will be using tto pass down to the App the state and dispatch through its Provider.
- **useContext** to create a custom hook _useGlobalStoreContext_ that will simplify the job once we create custom hooks to access the different parts of the global state and dispatch function.
- **useReducer** to create the "store" and get the global state and dispatch function. It will take the main reducer and the initial state as params.
- **useCallback** to craete an enhanced version of the dispatch that useReducer returns us back, using the asyncer middleware. useCallback will return a memoized version of the function if there is no update.

The Provider component wraps the App (or the childrens you decide if you do not want to wrap all the app) and passes to it the enhanced dispatch and the global state object.

## bindActions util

bindActions, found in **store/bindActions.ts** is an util that allows us to pass it an object with all the action functions and it will retunr another object with all those actions dispatch ready to use. The shape of the returned object would be similar to the object we pass to mapDispatchToProps. The functions in the returned object are ready to use without the need of dispatching them in the code everytime we want to use them since they have been already dispatch binded.
If we do not want to use this util function we would just need to get dispatch from the _useGlobalStoreContext_ and then get the actions we want from the specific reducer and dispatch them:\
example for an onClick `() => dispatch(action())`

## custom hooks

Besides useGlobalStoreContext we have defined to more custom hooks in the **src/hooks** folder:

- **useItems** hook allows us to directly access an object where we have the items state properties (in this case an array with the items) and items actions already binded with dispatch and ready to use
- **useLogin** hook fulfills the same role as useItems, to give us back an object with the login state properties and login actions already dispatch binded and ready to be used

## From here on

As said in the introduction the purpose of this file was solely to guide through the redux like implementation of the application. The rest of it is a simple react app for creating todo lists that uses styled-component as css styling tool
