import { RecoilState } from "recoil";

type Callback<T> = (p: T) => void;
type OnSet<T> = (callb: Callback<T>) => void;

export function persistState<T>({
  onSet,
  setSelf,
  node,
}: {
  onSet: OnSet<T>;
  setSelf: (p: T) => void;
  node: RecoilState<T>;
}) {
  const items = localStorage.getItem(node.key);
  if (items !== null) {
    setSelf(JSON.parse(items));
  }

  onSet((newValue) => {
    localStorage.setItem(node.key, JSON.stringify(newValue));
  });
}
