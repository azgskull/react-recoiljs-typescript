import { useRecoilValue } from "recoil";
import {
  todoListState,
  todoListStateFiltered,
} from "../../state/todoListState";
import TodoItem from "../TodoItem";

export default function TodoList() {
  const todoListStateFilteredValue = useRecoilValue(todoListStateFiltered);
  const todoListStateValue = useRecoilValue(todoListState);

  return (
    <div className="flex flex-col gap-5 mt-20">
      {todoListStateValue.length > 0 && (
        <p className="text-right text-sm mb-5">
          {`Displaying ${todoListStateFilteredValue.length} of ${todoListStateValue.length}`}
        </p>
      )}

      {todoListStateFilteredValue.map((todoItem, index) => (
        <TodoItem key={todoItem.key} index={index} />
      ))}

      {todoListStateFilteredValue.length === 0 && (
        <>
          <p className="text-center text-4xl text-gray-600">No todo found :/</p>
          <p className="text-center text-lg text-gray-400">
            {todoListStateValue.length
              ? `Change the filter applied to display other todos`
              : "Create your first todo"}
          </p>
        </>
      )}
    </div>
  );
}
