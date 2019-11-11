import React from "react";
import { ITodoItemProps } from "./types";
// we import the useItems custom hook
import { useItems } from "../../hooks/";
import { TodoItemContainer, TodoItemLabel } from "./styles";

const TodoItem: React.FC<ITodoItemProps> = props => {
  // we get the actions we need from the useItems custom hook
  const { completeItem } = useItems();
  const handleComplete = () => {
    completeItem(props.id);
  };

  return (
    <TodoItemContainer>
      <input
        id={props.id.toString()}
        type="checkbox"
        checked={props.completed}
        onChange={handleComplete}
      />
      <TodoItemLabel htmlFor={props.id.toString()} completed={props.completed}>
        {props.text}
      </TodoItemLabel>
    </TodoItemContainer>
  );
};

export default TodoItem;
