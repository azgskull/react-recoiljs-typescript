import { atom, selector } from "recoil";
import { ITodoItem } from "../utils/interfaces";
import { filterState } from "./filterState";

export const todoListState = atom({
  key: "todoListState",
  default: [] as ITodoItem[],
});

export const todoListStateFiltered = selector({
  key: "todoListStateFiltered",
  get: ({ get }) => {
    const todoListStateValue = get(todoListState);
    const filterStateValue = get(filterState);

    if (filterStateValue.length) {
      return todoListStateValue.filter((todoItem) =>
        filterStateValue.includes(todoItem.label)
      );
    }

    return todoListStateValue;
  },
});
