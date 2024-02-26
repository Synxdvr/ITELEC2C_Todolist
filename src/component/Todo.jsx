// Todo.js
import React, { useState } from "react";
import "../Todo.css";

const Todo = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  };
  return (
    <div className="center">
      <div className="form-control">
        <input
          className="input input-alt"
          placeholder="Add a task..."
          required
          type="text"
          value={task}
          onChange={handleChange}
        />
        <span className="input-border input-border-alt"></span>
      </div>
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default Todo;
