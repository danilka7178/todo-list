import React from "react";
import Actions from "./Actions";

function TodoItem({ text, tasks, setTasks, id }) {

  const [checked, setChecked] = React.useState("")

  function toggleChecked(e) {
    console.log("click", e.target.id, id);
    const newTasks = tasks.map((arg) => console.log(arg.completed))
  }

  return (
    <div className="todo-item">
      <div className="todo-checkbox">
        <label htmlFor={`todo-${id}`}>
          <input type="checkbox" checked={checked} id={`todo-${id}`}
            onClick={toggleChecked} />
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M505 75a26 26 0 00-37 0L162 382 44 264a26 26 0 00-37 37l136 136c10 10 27 9 37 0l325-325c10-10 9-27 0-37z"></path>
            </svg>
          </div>
        </label>
      </div>
      <div className="todo-delimiter"></div>
      <p className="todo-text">{text}</p>
      <Actions tasks={tasks} setTasks={setTasks} id={id} />
    </div>
  );
}

export default TodoItem;
