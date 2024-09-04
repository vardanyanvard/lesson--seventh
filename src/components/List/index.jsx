import ToDoItem from "../ToDoItem";
import { useContext } from "react";
import { TaskContext } from "../../context";
import "./list.css";

function List() {
  const { tasks, onDelete, onUpdate } = useContext(TaskContext);

  return (
    <div className="listContent">
      {tasks.map((task) => (
        <ToDoItem
          task={task}
          key={task.id}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default List;
