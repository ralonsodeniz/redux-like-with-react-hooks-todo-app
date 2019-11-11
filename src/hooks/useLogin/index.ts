// the idea of useLogin is the same behind useItems so follow the coments in hooks/useItems/index.ts
import { useGlobalStoreContext } from "../../store/";
import bindingActions from "../../store/bindActions";
import loginReducer from "../../store/login";

// getting actions from login reducer object
const { actions } = loginReducer;

const useLogin: any = () => {
  // getting state and dispatch from global store provider
  const { state, dispatch } = useGlobalStoreContext();
  // login props from global state
  const { login } = state;
  // login actions
  const { handleLogin, handleLogout } = actions;
  // binding dispatch to actions
  const loginActions = bindingActions({ handleLogin, handleLogout }, dispatch);
  // in this case as login is an object with login state properties we also spread it.
  // we did not spreaded items since it is an array and we want it to stay as an array in the returned object
  return { ...login, ...loginActions };
};

export default useLogin;
