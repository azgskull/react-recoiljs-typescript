import { useRecoilState } from "recoil";
import { filterState } from "../../state/filterState";

import Labels from "../Labels";

export default function Filter() {
  const [filterStateValue, setFilterState] = useRecoilState(filterState);

  return (
    <div className="my-5 p-4 bg-gray-100">
      <p className="text-xl pl-1 mb-4">Filter items by :</p>
      <Labels selectedLabels={filterStateValue} onUpdate={setFilterState} />
    </div>
  );
}
