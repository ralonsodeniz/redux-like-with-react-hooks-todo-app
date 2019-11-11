import styled, { css } from "styled-components";
import { ITodoItemLabelProps } from "./types";

const completedTodoStyles = css`
  position: relative;
  color: #807a7a;

  &::before {
    content: "";
    height: 2px;
    position: absolute;
    right: 0;
    top: 50%;
    left: 0;
    background: linear-gradient(to right, #fa9968, #fa4d73);
  }
`;

export const TodoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;
export const TodoItemLabel = styled.label<ITodoItemLabelProps>`
  margin-left: 8px;
  text-overflow: ellipsis;
  overflow: hidden;

  ${({ completed }) => (completed ? completedTodoStyles : "")}
`;
export const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
