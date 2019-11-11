// we import both custom hooks and export them as an object together
// this is completly optional and the purpose is just to be able to import {useItems, useLogin} from "../hooks" from the root folder of hooks since they are exported in the index.ts and not having to go deep into the folder of each hook
import useItems from "./useItems";
import useLogin from "./useLogin";

export { useItems, useLogin };
