import classNames from "classnames";

import { useRecoilValue } from "recoil";
import { labelListState } from "../../state/labelListState";

interface IProps {
  multiselect?: boolean;
  selectedLabels: string[];
  onUpdate: (selectedLabels: string[]) => void;
}

export default function Labels({
  multiselect = true,
  selectedLabels,
  onUpdate,
}: IProps) {
  const labelListStateValue = useRecoilValue(labelListState);

  const toggleLabel = (name: string) => {
    if (multiselect) {
      onUpdate(
        selectedLabels.includes(name)
          ? selectedLabels.filter((labelName) => labelName !== name)
          : [...selectedLabels, name]
      );
    } else {
      onUpdate(selectedLabels.includes(name) ? [] : [name]);
    }
  };

  return (
    <div className="flex gap-2">
      {labelListStateValue.map((label) => (
        <span
          key={label.name}
          className={classNames(
            "p-1 text-sm rounded-md cursor-pointer border-2 border-transparent",
            {
              [`bg-${label.color}-100`]: selectedLabels.includes(label.name),
              [`border-${label.color}-300`]: selectedLabels.includes(
                label.name
              ),
              [`hover:border-${label.color}-300`]: !selectedLabels.includes(
                label.name
              ),
              "bg-white": !selectedLabels.includes(label.name),
            }
          )}
          onClick={() => toggleLabel(label.name)}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
}
