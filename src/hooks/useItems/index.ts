// we create a custom hook to easily access the items state and items actions anywhere
// here we use the useGlobalStoreContext custom hook we created at store/index.ts that gives us access to global state and dispatch (the enhanced version we created in the same file)
import { useGlobalStoreContext } from "../../store";
// in the custom hooks is where we are going to use the util function bindActions to create an object with the actions ready to be dispatched
import bindActions from "../../store/bindActions";
// we need to import the itemsReducer object to extract the actions from it
import itemReducer from "../../store/items";

const { actions } = itemReducer;

// now we create the useItems custom hook

const useItems: any = () => {
  // first we get the global state and enhanced dispatch from the global context hook
  const { state, dispatch } = useGlobalStoreContext();
  // we extract items props from the global state
  const { items } = state;
  // next we get the items actions from the itemReducer object
  const { addItem, resetItems, completeItem } = actions;
  // we take the actions and we bind dispatch to them using the enhanced dispatch so it treats both sync and async actions correctly
  const itemsActions = bindActions(
    { addItem, resetItems, completeItem },
    dispatch
  );
  // finally we return an object with the items state and all the binded actions
  return { items, ...itemsActions };
};
export default useItems;
