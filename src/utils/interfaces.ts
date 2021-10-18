export interface ILabel {
  name: string;
  selected: boolean;
  color: string;
}

export interface ITodoItem {
  key: number;
  text: string;
  label: string;
  isCompleted: boolean;
}
