import unstarted from "../../assets/images/unstarted.png";
import inprogress from "../../assets/images/inprogress.png";
import completed from "../../assets/images/completed.png";
import "./toDoItem.css";
import ToDoFilter from "../ToDoFilter";

function ToDoItem({ task, onDelete, onUpdate }) {
  return (
    <div className="toDoItemContent">
      <div>
        <p>{task.text}</p>
        <button onClick={() => onDelete(task.id)}>x</button>
      </div>
      <p>status: {task.status}</p>
      <ToDoFilter task={task} onUpdate={onUpdate} />
      {task.status === "unstarted" ? (
        <img src={unstarted}></img>
      ) : task.status === "in progress" ? (
        <img src={inprogress}></img>
      ) : (
        <img src={completed}></img>
      )}
    </div>
  );
}

export default ToDoItem;
