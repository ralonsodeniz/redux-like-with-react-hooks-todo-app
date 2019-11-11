import React from "react";
import { useItems } from "hooks";
import TodoItem from "./todo";

const TodoList: React.FC = () => {
  // we get items state from useItems custom hook
  const { items } = useItems();

  return (
    <div>
      {items.map((item: any) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TodoList;
