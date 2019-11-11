import React, { useRef } from "react";
import { useLogin } from "hooks";
import Button from "components/custom-button";
import { LoginContainer, LoginFormContainer } from "./styles";

const Login: React.FC = () => {
  const userNameInput = useRef<HTMLInputElement>(null);
  const listNameInput = useRef<HTMLInputElement>(null);
  const { isLoading, error, handleLogin } = useLogin();

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    if (userNameInput.current && listNameInput.current)
      handleLogin(userNameInput.current.value, listNameInput.current.value);
  };

  return (
    <LoginContainer>
      <h1>Simple Todo</h1>
      <LoginFormContainer onSubmit={handleSubmit}>
        <input type="text" ref={userNameInput} placeholder="Your Name" />
        <input type="text" ref={listNameInput} placeholder="List Name" />
        <Button fill large type="submit" text="Let's Go" disabled={isLoading} />
        {error && <div>{error}</div>}
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default Login;
