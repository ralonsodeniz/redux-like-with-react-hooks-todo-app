export interface IButtonProps {
  // icon name from an icon pack
  icon?: string;
  // button text
  text?: string;
  // button theme
  theme?: "primary" | "secondary";
  // button type
  type?: "submit" | "reset" | "button";
  // is button large
  large?: boolean;
  // should button fill the available width
  fill?: boolean;
  // is button state set to loading so it is disabled
  disabled?: boolean;
  // button onClick callback
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  // button children
  children?: React.ReactNode;
}

export interface IButtonContainerProps {
  // is button large
  large?: boolean;
  // should button fill the available width
  fill?: boolean;
  // is button state set to loading so it is disabled
  disabled?: boolean;
}

export interface IButtonDisabled {
  // is button state set to loading so it is disabled
  disabled?: boolean;
}
