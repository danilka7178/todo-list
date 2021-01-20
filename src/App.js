import React from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      text: 'Попробовать создать ToDo',
      completed: false
    },
    {
      id: 2,
      text: 'Сохранить задачи в массив стейта',
      completed: false
    },
  ]);
  const colors = ['grey', 'red', 'blue', 'orange', 'green'];

  const doSetTasks = (e) => {
    if (e.key === "Enter") {
      if (tasks.length !== 0) {
        setTasks([...tasks, {
          id: tasks[tasks.length - 1].id + 1,
          text: inputValue,
          completed: false
        }])
      } else {
        setTasks([...tasks, {
          id: 1,
          text: inputValue,
          completed: false
        }])
      };
      setInputValue("");
    }
  };

  const someDoWithColors = (e) => {

  }


  return (
    <div className="App">
      <div className="todo">
        <h2>Список задач</h2>
        {tasks ? tasks.map((obj) => (
          <TodoItem key={obj.id} id={obj.id} text={obj.text} tasks={tasks} setTasks={setTasks} />
        )) : <h3>Задач нет</h3>}
        <div className="todo-input">
          <input type="text" placeholder="Текст задачи..."
            value={inputValue} onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={doSetTasks} />
          <ul>
            {colors.map((color) => (
              <li onClick={someDoWithColors} className={`todo-color ${color}`} id={colors.indexOf(color)} key={color.toString()} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
