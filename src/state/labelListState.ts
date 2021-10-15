import { atom, selectorFamily } from "recoil";
import { ILabel } from "../utils/interfaces";

export const labelListState = atom({
  key: "labelListState",
  default: [
    { name: "High Priority", color: "red" },
    { name: "Medium Priority", color: "yellow" },
    { name: "Low Priority", color: "blue" },
  ] as ILabel[],
});

export const getLabelStateByName = selectorFamily({
  key: "getLabelState",
  get:
    (labelName: string) =>
    ({ get }) => {
      const labels = get(labelListState);

      const foundLabel = labels.filter((label) => label.name === labelName);
      return foundLabel[0]; // label or undefined
    },
});
