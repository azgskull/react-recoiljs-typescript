import { atom, selector } from "recoil";
import { persistState } from "../utils/helpers";
import { ITodoItem } from "../utils/interfaces";
import { filterState } from "./filterState";

export const todoListState = atom({
  key: "todoListState",
  default: [] as ITodoItem[],
  effects_UNSTABLE: [persistState],
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
