import classNames from "classnames";
import { useRecoilValue } from "recoil";
import useTodoItem from "../../hooks/useTodoItem";
import { getLabelStateByName } from "../../state/labelListState";

interface IProps {
  index: number;
}

export default function TodoItem({ index }: IProps) {
  const { item, toggleCompleted, deleteItem } = useTodoItem(index);
  const labelStateValue = useRecoilValue(getLabelStateByName(item.label));

  return (
    <div
      className={classNames("relative p-4 border-l-8 border-r-2 shadow-lg", {
        [`border-${labelStateValue?.color}-400`]: labelStateValue,
        // [`bg-${labelStateValue?.color}-100`]: labelStateValue,
        // [`border-gray-200`]: !labelStateValue,
        "line-through": item.isCompleted,
        [`bg-${labelStateValue?.color ?? "gray"}-100`]: item.isCompleted,
      })}
    >
      <p className="text-lg">{item.text}</p>
      <div className="flex gap-2 absolute top-0 right-0 p-1 text-xs">
        <button
          className={classNames("border  px-2 rounded", {
            "border-green-400 bg-green-200": item.isCompleted,
            "border-gray-400 bg-gray-200": !item.isCompleted,
          })}
          onClick={toggleCompleted}
        >
          {item.isCompleted ? "Done" : "Pending"}
        </button>

        <button
          className="bg-black text-white px-2 rounded"
          onClick={deleteItem}
        >
          X
        </button>
      </div>
    </div>
  );
}
