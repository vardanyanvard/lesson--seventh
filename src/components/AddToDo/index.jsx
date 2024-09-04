import { useContext, useState } from "react";
import { TaskContext } from "../../context";
import axios from "axios";
import "./addToDo.css";

function AddToDo() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const { onAdd } = useContext(TaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) {
      return setError("Fill the input field");
    }
    setError("");
    axios
      .post("http://localhost:3004/tasks/", { text, status: "unstarted" })
      .then((resp) => onAdd(resp.data));
    setText("");
  };

  return (
    <div className="addToDoContent">
      <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddToDo;
