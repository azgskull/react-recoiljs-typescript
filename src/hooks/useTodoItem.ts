import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../state/todoListState";

export default function useTodoItem(index: number) {
  const [todoItems, setTodoItems] = useRecoilState(todoListState);
  const item = todoItems[index];

  const toggleCompleted = useCallback(() => {
    setTodoItems((old) => {
      const newState = [...old];
      newState.splice(index, 1, {
        ...item,
        isCompleted: !item.isCompleted,
      });

      return newState;
    });
  }, [index, item, setTodoItems]);

  const deleteItem = useCallback(() => {
    setTodoItems((old) => {
      const newState = [...old];
      newState.splice(index, 1);

      return newState;
    });
  }, [index, setTodoItems]);

  /////////////////
  const r = useMemo(
    () => ({
      item,
      deleteItem,
      toggleCompleted,
    }),
    [item, deleteItem, toggleCompleted]
  );

  return r;
}
