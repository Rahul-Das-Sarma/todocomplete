import { useState } from "react";
import Task from "./component/task";

function App() {
  const [checked, setChecked] = useState(false);
  const [taskArr, setTaskArr] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const onCheckBoxClick = (e, id) => {
    setChecked(e.target.checked);
    setTaskArr((prev) => {
      return prev.map((ele) => {
        if (ele.id === id) {
          return { ...ele, isChecked: e.target.checked };
        } else {
          return ele;
        }
      });
    });
  };

  const onInputChange = (e) => setInputVal(e.target.value);

  const addTask = () => {
    setTaskArr((prev) => [
      ...prev,
      { id: Date.now(), text: inputVal, isChecked: false },
    ]);
    setInputVal("");
  };
  const onDelete = (element) => {
    setTaskArr((prev) => prev.filter((obj) => obj.id !== element.id));
  };
  return (
    <div className="bg-gradient-to-r from-indigo-500 min-h-screen flex justify-center font-mono ">
      <div className="w-1/2 min-h-10 bg-white my-10 rounded-sm">
        <div className="text-center">
          <h1 className="text-lg">To Do</h1>
        </div>
        {/* Input Container */}
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="border-2 m-4 w-1/2 p-2 rounded-sm align-middle outline-none"
            value={inputVal}
            onChange={onInputChange}
          />
          <button
            onClick={addTask}
            className="p-4 bg-yellow-500 hover:bg-yellow-300 rounded-full w-10 h-10 flex justify-center items-center text-white"
          >
            +
          </button>
        </div>
        {/* Task List container */}
        {taskArr.length > 0 &&
          taskArr.map((ele) => (
            <Task
              checked={checked}
              onCheckBoxClick={(e) => onCheckBoxClick(e, ele.id)}
              key={ele.id}
              task={ele}
              onDelete={() => onDelete(ele)}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
