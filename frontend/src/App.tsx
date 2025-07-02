import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Task,
  fetchTasks,
  createTask,
  updateTaskStatus,
  deleteTaskById,
} from "./services/taskService";
import TaskForm from "./componentes/TaskForm";
import TaskList from "./componentes/TaskList";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const loadTasks = () => {
    fetchTasks().then(setTasks);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    await createTask(newTask);
    setNewTask("");
    loadTasks();
  };

  const toggleTask = async (task: Task) => {
    await updateTaskStatus(task.id, !task.completed);
    loadTasks();
  };

  const handleDelete = async (id: number) => {
    await deleteTaskById(id);
    loadTasks();
  };

  return (
    <div className="App">
      <h1>Task To Do</h1>
      <TaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        onSubmit={handleSubmit}
      />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={handleDelete} />
    </div>
  );
}

export default App;
