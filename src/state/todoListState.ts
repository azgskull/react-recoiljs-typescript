import { atom } from "recoil";
import { ITodoItem } from "../utils/interfaces";

export const todoListState = atom({
  key: "todoListState",
  default: [] as ITodoItem[],
});
