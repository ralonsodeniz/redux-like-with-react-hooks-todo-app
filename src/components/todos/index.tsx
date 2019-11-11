import React from "react";
import { useItems, useLogin } from "hooks";
import Button from "components/custom-button";
import AddTodo from "./add-todo";
import TodoList from "./todolist";
import { TodoListContainer } from "./styles";

const Todos: React.FC = () => {
  const { resetItems } = useItems();
  const { userName, handleLogout } = useLogin();

  const handleBack = () => {
    handleLogout();
    resetItems();
  };

  return (
    <TodoListContainer>
      <div>
        <Button text="Back" onClick={handleBack} />
      </div>
      <h1>Hi, {userName}</h1>
      <AddTodo />
      <TodoList />
    </TodoListContainer>
  );
};

export default Todos;
