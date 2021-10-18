import { atom } from "recoil";
import { persistState } from "../utils/helpers";

export const filterState = atom({
  key: "filterState",
  default: [] as string[],
  effects_UNSTABLE: [persistState],
});
