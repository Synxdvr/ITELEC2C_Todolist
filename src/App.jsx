// App.js
import React, { useState } from "react";
import "./styles.css";
import Todo from "./component/Todo";
import List from "./component/List";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const handleToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Todo addTask={addTask} />
      <List
        tasks={tasks}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
