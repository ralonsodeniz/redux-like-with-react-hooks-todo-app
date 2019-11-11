import React from "react";
import { IButtonProps } from "./types";
import {
  CustomButtonContainer,
  CustomButtonSpinner,
  CustomButtonText
} from "./styles";

// we create the interface for the buttom props. if we were not using ts we do this with PropTypes

const Button: React.FC<IButtonProps> = props => (
  <CustomButtonContainer {...props}>
    <CustomButtonSpinner disabled={props.disabled} />
    <CustomButtonText disabled={props.disabled}>{props.text}</CustomButtonText>
  </CustomButtonContainer>
);

Button.defaultProps = {
  // Button Text
  text: "",
  // Button Theme
  theme: "primary",
  // Button Type
  type: "button",
  // Button Size
  large: false,
  // Button Filled
  fill: false,
  // Button Loading
  disabled: false,
  // Button onClick
  onClick: () => console.log("Hello World!")
};

export default Button;
