// interface used when mapping names to object keys values
export interface INameToValueMap {
  [key: string]: any;
}
// interface used when declaring contexts props
export interface IContextProps {
  state: any;
  dispatch: any;
}

// type for action objects
export interface IActionObject {
  type: string;
  payload: any;
}
