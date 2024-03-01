import React from "react";
import { MdDelete } from "react-icons/md";

const Task = ({ checked, onCheckBoxClick, task, onDelete }) => {
  return (
    <div className="m-4 flex items-center justify-between border-2 p-2 rounded-sm">
      <div className="flex items-center ">
        <input
          type="checkbox"
          className={`mr-2`}
          value={checked}
          onClick={onCheckBoxClick}
        />
        <p className={`${task.isChecked && "line-through"}`}>{task.text}</p>
      </div>
      <MdDelete className="mr-4 hover:text-red-600" onClick={onDelete} />
    </div>
  );
};

export default Task;
