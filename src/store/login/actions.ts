import { LOGIN } from "./types";
import { fakeLogin } from "../../common/utils";

const login = () => ({
  type: LOGIN.INIT
});

const success = (userName: string, listName: string) => ({
  type: LOGIN.SUCCESS,
  payload: { userName, listName }
});

const failed = (error: string) => ({
  type: LOGIN.ERROR,
  payload: error
});

export const handleLogin = (userName: string, listName: string) => async (
  disptch: any
) => {
  disptch(login());
  try {
    await fakeLogin(userName, listName);
    disptch(success(userName, listName));
  } catch (error) {
    // remember that the error we return from the fakeLogin Promise reject is an object with the structure error = {response: data:"string"}
    disptch(failed(error.response.data));
  }
};

export const handleLogout = () => ({
  type: LOGIN.TERMINATE
});
