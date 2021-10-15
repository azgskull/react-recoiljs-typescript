# Todo list with Recoil state management

## Demo

https://react-recoiljs-typescript.vercel.app/

## Install

npm install<br>
npm run start

## Recoiljs State

We have 3 differents states groups

### 1 - Filter state

```javascript
export const filterState = atom({
  key: "filterState",
  default: [] as string[],
});
```

### 2 - Label state

```javascript
// List of all possible filter labels
export const labelListState = atom({
  key: "labelListState",
  default: [
    { name: "High Priority", color: "red" },
    { name: "Medium Priority", color: "yellow" },
    { name: "Low Priority", color: "blue" },
  ] as ILabel[],
});

// A selector to get a unique filter label by Name
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
```

### 2 - TodoList state

```javascript
// Where all todo are saved
export const todoListState = atom({
  key: "todoListState",
  default: [] as ITodoItem[],
});

// A selector to get filterd todo items
export const todoListStateFiltered = selector({
  key: "todoListStateFiltered",
  get: ({ get }) => {
    const todoListStateValue = get(todoListState);
    const filterStateValue = get(filterState);

    if (filterStateValue.length) {
      return todoListStateValue.filter((todoItem) =>
        filterStateValue.includes(todoItem.label)
      );
    }

    return todoListStateValue;
  },
});
```
