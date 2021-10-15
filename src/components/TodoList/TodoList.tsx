import React from "react";
import { useRecoilValue } from "recoil";
import { filterState } from "../../state/filterState";
import { todoListState } from "../../state/todoListState";
import { getSelectedLabelsName } from "../../utils/helpers";
import TodoItem from "../TodoItem";

export default function TodoList() {
  const filterStateValue = useRecoilValue(filterState);
  const todoListStateValue = useRecoilValue(todoListState);

  const selectedLabelsName = getSelectedLabelsName(filterStateValue);

  return (
    <div className="flex flex-col gap-5 mt-20">
      {todoListStateValue.reduce((todoItems: any[], todoItem) => {
        if (
          !selectedLabelsName.length ||
          (selectedLabelsName.length &&
            selectedLabelsName.includes(todoItem.label?.name || ""))
        ) {
          todoItems.push(<TodoItem key={todoItem.key} item={todoItem} />);
        }

        return todoItems;
      }, [])}
    </div>
  );
}
