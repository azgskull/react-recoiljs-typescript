import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../state/todoListState";
import { itemsCounter, getDefaultNoLabel } from "../../utils/helpers";
import { ILabel } from "../../utils/interfaces";
import Labels from "../Labels";

export default function TodoCreator() {
  const setTodoListState = useSetRecoilState(todoListState);

  const [text, setText] = useState("");
  const [labelSelected, setLabelSelected] = useState<ILabel>(
    getDefaultNoLabel()
  );

  const submitHandler = () => {
    if (text === "") {
      return;
    }

    setTodoListState((old) => [
      {
        key: itemsCounter.count++,
        text,
        label: labelSelected,
      },
      ...old,
    ]);

    setLabelSelected(getDefaultNoLabel());
    setText("");
  };

  const onSelectLabel = (selected: ILabel[]) => {
    const label = selected.filter((label) => label.selected)[0];
    if (label) {
      setLabelSelected(label);
    } else {
      setLabelSelected(getDefaultNoLabel());
    }
  };

  return (
    <div className="p-4 bg-gray-100">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border border-gray-300 p-4 text-xl outline-none"
        placeholder="Type something here ..."
      />
      <div className="flex justify-between gap-3 items-center mt-5">
        <Labels
          multiselect={false}
          selectedLabels={[labelSelected]}
          onUpdate={onSelectLabel}
        />
        <button
          type="submit"
          className="bg-black text-white text-xl border-2 border-black px-6 py-2"
          onClick={submitHandler}
        >
          Create
        </button>
      </div>
    </div>
  );
}
