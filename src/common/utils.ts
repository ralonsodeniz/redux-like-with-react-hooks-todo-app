// util function to emulate a delayed login from an api call
export const fakeLogin = async (
  userName: string,
  listName: string
): Promise<string | object> => {
  return new Promise<string | object>((resolve, reject) => {
    setTimeout(() => {
      if (userName !== "" && listName !== "") {
        resolve("Logged in");
      } else {
        reject({
          response: { data: "Both Username and Listname are required" }
        });
      }
    }, 1000);
  });
};
