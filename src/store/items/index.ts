// we import the item reducer as reducer and the initialState
import reducer, { initialState } from "./reducer";
// we import all item actions as actions
import * as actions from "./actions";
// we export default as an object what we imported
export default { reducer, initialState, actions };
