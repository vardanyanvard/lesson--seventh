import List from "../List";
import { useContext } from "react";
import { TaskContext } from "../../context";
import "./toDoList.css";

function ToDoList() {
  const { onDelete, onUpdate } = useContext(TaskContext);
  return (
    <div className="toDoListContent">
      <List onDelete={onDelete} onUpdate={onUpdate} />
    </div>
  );
}

export default ToDoList;
