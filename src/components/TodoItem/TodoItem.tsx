import classNames from "classnames";
import { useRecoilValue } from "recoil";
import { getLabelStateByName } from "../../state/labelListState";
import { ITodoItem } from "../../utils/interfaces";

interface IProps {
  item: ITodoItem;
}

export default function TodoItem({ item }: IProps) {
  const labelStateValue = useRecoilValue(getLabelStateByName(item.label));

  return (
    <div
      className={classNames("p-4 border-l-8 border-r-2 shadow-lg", {
        [`border-${labelStateValue?.color}-400`]: labelStateValue,
        // [`bg-${labelStateValue?.color}-100`]: labelStateValue,
        // [`border-gray-200`]: !labelStateValue,
      })}
    >
      <p className="text-lg">{item.text}</p>
    </div>
  );
}
