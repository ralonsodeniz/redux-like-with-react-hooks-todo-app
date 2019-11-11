import React from "react";
import Todos from "components/todos";
import Login from "components/login";
import { useLogin } from "hooks";
import { AppContainer } from "./styles";

const App: React.FC = () => {
  const { isLoggedIn } = useLogin();

  return <AppContainer>{isLoggedIn ? <Todos /> : <Login />}</AppContainer>;
};

export default App;
