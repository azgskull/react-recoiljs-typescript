import { ILabel } from "./interfaces";

export const itemsCounter = {
  count: 0,
};

export function getLabelsAsObject(): ILabel[] {
  return [
    { name: "High Priority", selected: false, color: "bg-red-100" },
    { name: "Medium Priority", selected: false, color: "bg-yellow-100" },
    { name: "Low Priority", selected: false, color: "bg-blue-100" },
  ];
}

export function getSelectedLabelsName(labels: ILabel[]): string[] {
  return labels.reduce((acc: string[], cur) => {
    if (cur.selected) {
      acc.push(cur.name);
    }

    return acc;
  }, []);
}

export function getLabel(name: string): ILabel {
  const label = getLabelsAsObject().filter((label) => label.name === name)?.[0];
  if (!label) {
    return getDefaultNoLabel();
  }

  return label;
}

export function getDefaultNoLabel(): ILabel {
  return { name: "No Priority", selected: false, color: "" };
}
