import classNames from "classnames";
import { ITodoItem } from "../../utils/interfaces";

interface IProps {
  item: ITodoItem;
}

export default function TodoItem({ item }: IProps) {
  return (
    <div
      className={classNames("p-4", item.label.color, {
        border: item.label.name === "No Priority",
      })}
    >
      <p className="text-lg">{item.text}</p>
    </div>
  );
}
