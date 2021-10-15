import { useRecoilState, useRecoilValue } from "recoil";
import { filterState } from "../../state/filterState";
import { todoListState } from "../../state/todoListState";

import Labels from "../Labels";

export default function Filter() {
  const [filterStateValue, setFilterState] = useRecoilState(filterState);
  const todoListStateValue = useRecoilValue(todoListState);

  return (
    todoListStateValue.length > 0 && (
      <div className="my-5 p-4 bg-gray-100">
        <p className="text-xl pl-1 mb-4">Filter items by :</p>
        <Labels selectedLabels={filterStateValue} onUpdate={setFilterState} />
      </div>
    )
  );
}
