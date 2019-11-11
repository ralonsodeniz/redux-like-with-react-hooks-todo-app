import styled, { css } from "styled-components";
import { IButtonContainerProps, IButtonDisabled } from "./types";

const largeButtonStyles = css`
  min-width: 100px;
  height: 50px;
  font-weight: 300;
  font-size: inherit;
`;

const spinnerStyles = css`
display: block;
width: 20px;
height: 20px;
border: 2px solid #f3f3f3;
border-radius: 50%;
border-top: 2px solid #FA9968;
animation: spin 2s linear infinite;
}

@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;

export const CustomButtonContainer = styled.button<IButtonContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  background-color: white;
  color: #807a7a;
  font-weight: 500;
  box-shadow: 1px 2px 4px 0 rgba($black, 0.15);
  border: none;
  border-radius: 4px;
  outline: none;

  &:active {
    box-shadow: 1px 1px 2px 0 rgba($black, 0.15);
  }

  &[type="button"]:not(:disabled),
  &[type="reset"]:not(:disabled),
  &[type="submit"]:not(:disabled),
  &:not(:disabled) {
    cursor: pointer;
  }

  ${({ large }) => (large ? largeButtonStyles : "")}
  ${({ fill }) => (fill ? `min-width: 100%` : "")}
  ${({ disabled }) => (disabled ? `cursor: not-allowed` : "")}
`;

export const CustomButtonSpinner = styled.span<IButtonDisabled>`
  ${({ disabled }) => (disabled ? spinnerStyles : "")}
`;

export const CustomButtonText = styled.span<IButtonDisabled>`
  ${({ disabled }) => (disabled ? `display: none` : "")}
`;
