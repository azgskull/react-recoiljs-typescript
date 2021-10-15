import { atom } from "recoil";
import { ILabel } from "../utils/interfaces";

export const filterState = atom({
  key: "filterState",
  default: [] as ILabel[],
});
