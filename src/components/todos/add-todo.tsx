import React, { useRef } from "react";
import { useItems } from "hooks";

const AddTodo: React.FC = () => {
  // we use useRef hook to be able to modify an html element outside the react rerender tree
  // we need it because we want to empty the text type input value after adding the todo
  // userRef() accepts a initial value as parameter if you want to pass it, if not pass null as argument
  const todoInput = useRef<HTMLInputElement>(null);
  const { addItem } = useItems();

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    if (todoInput.current) {
      addItem(todoInput.current.value);
      todoInput.current.value = "";
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={todoInput} placeholder="e.g. Buy Tickets" />
      </form>
    </div>
  );
};

export default AddTodo;
