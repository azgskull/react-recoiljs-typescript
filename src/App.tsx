import { RecoilRoot } from "recoil";
import Filter from "./components/Filter";
import TodoCreator from "./components/TodoCreator";
import TodoList from "./components/TodoList";

function App() {
  return (
    <RecoilRoot>
      <div style={{ maxWidth: 980 }} className="w-full my-10 mx-auto">
        <div className="p-2">
          <TodoCreator />
          <Filter />
          <TodoList />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
