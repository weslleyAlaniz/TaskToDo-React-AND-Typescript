import React, { useEffect, useState } from "react";
import "./App.css";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/listar")
      .then((res) => res.json())
      .then((data) => {
        // O backend retorna { message, tarefas }
        setTasks(
          data.tarefas.map((t: any) => ({
            id: t.id,
            title: t.titulo,
            completed: t.concluida,
          }))
        );
      });
  }, []);

  return (
    <div className="App">
      <h1>Task To Do</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.completed ? "✅" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
