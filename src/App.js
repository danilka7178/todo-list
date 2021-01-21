import React from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      text: 'Попробовать создать ToDo',
      completed: false,
      color: ""
    },
    {
      id: 2,
      text: 'Сохранить задачи в массив стейта',
      completed: false,
      color: ""
    },
  ]);
  const colors = ['grey', 'red', 'blue', 'orange', 'green'];
  const [activeColor, setActiveColor] = React.useState("");
  const [completed, setCompleted] = React.useState(false);

  const doSetTasks = (e) => {
    if (e.key === "Enter") {
      if (tasks.length !== 0) {
        setTasks([...tasks, {
          id: tasks[tasks.length - 1].id + 1,
          text: inputValue,
          color: activeColor,
          completed,
        }])
      } else {
        setTasks([...tasks, {
          id: 1,
          text: inputValue,
          color: activeColor,
          completed,
        }])
      };
      setInputValue("");
    }
  };

  console.log(tasks);

  return (
    <div className="App">
      <div className="todo">
        <h2>Список задач</h2>
        {tasks ? tasks.map((obj) => (
          <TodoItem key={obj.id}
            id={obj.id}
            text={obj.text}
            tasks={tasks}
            setTasks={setTasks}
            color={obj.color}
            setCompleted={setCompleted} />
        )) : <h3>Задач нет</h3>}
        <div className="todo-input">
          <input type="text"
            placeholder="Текст задачи..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={doSetTasks} />
          <ul>
            {colors.map((color) => (
              <li onClick={(e) => {
                colors.map(color => color)
                setActiveColor(color);
              }}
                className={`todo-color ${color} ${activeColor === color ? "active" : ""}`}
                id={colors.indexOf(color)}
                key={color.toString()} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
