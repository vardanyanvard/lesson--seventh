import "./toDoFilter.css";
function ToDoFilter({ task, onUpdate }) {
  return (
    <div className="ToDoFilterContent">
      <select
        value={task.status}
        onChange={(event) => onUpdate(task.id, event.target.value)}
      >
        <option>unstarted</option>
        <option>in progress</option>
        <option>completed</option>
      </select>
    </div>
  );
}

export default ToDoFilter;
