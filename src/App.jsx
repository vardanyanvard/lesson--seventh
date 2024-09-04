import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";
import { useState } from "react";
import { useEffect } from "react";
import { TaskContext } from "./context";
import axios from "axios";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3004/tasks/" + id)
      .then((resp) => setTasks(tasks.filter((item) => item.id !== id)));
  };

  const handleUpdate = (id, status) => {
    axios.patch("http://localhost:3004/tasks/" + id, { status }).then((resp) =>
      setTasks(
        tasks.filter((task) => {
          if (task.id === resp.data.id) {
            task.status = resp.data.status;
          }
          return task;
        })
      )
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:3004/tasks")
      .then((response) => setTasks(response.data));
  }, []);

  return (
    <div className="toDoListContentWrapper">
      <TaskContext.Provider
        value={{
          tasks,
          onDelete: handleDelete,
          onAdd: addTask,
          onUpdate: handleUpdate,
        }}
      >
        <AddToDo />
        <ToDoList />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
