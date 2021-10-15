import { useState } from "react";
import classNames from "classnames";

import { getLabelsAsObject, getSelectedLabelsName } from "../../utils/helpers";
import { ILabel } from "../../utils/interfaces";

interface IProps {
  multiselect?: boolean;
  selectedLabels: ILabel[];
  onUpdate: (selectedLabels: ILabel[]) => void;
}

export default function Labels({
  multiselect = true,
  selectedLabels,
  onUpdate,
}: IProps) {
  const [labelList, setLabelList] = useState(getLabelsAsObject());
  const selectedLabelsName = getSelectedLabelsName(selectedLabels);

  const toggleLabel = (name: string) => {
    const newLabelList = labelList.map((label) => {
      if (label.name === name) {
        return {
          ...label,
          selected: !label.selected,
        };
      }

      return {
        ...label,
        selected: multiselect ? label.selected : false,
      };
    });

    setLabelList(newLabelList);
    onUpdate(newLabelList);
  };

  return (
    <div className="flex gap-2">
      {labelList.map((label) => (
        <span
          key={label.name}
          className={classNames(
            "p-1 text-sm rounded-md cursor-pointer hover:border-black border-2 border-transparent",
            {
              [label.color]:
                selectedLabelsName.includes(label.name) && label.selected,
              "bg-white":
                selectedLabelsName.includes(label.name) ?? label.selected,
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
