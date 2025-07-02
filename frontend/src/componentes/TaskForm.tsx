import React from "react";

interface TaskFormProps {
  newTask: string;
  setNewTask: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  newTask,
  setNewTask,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} style={{ marginBottom: 16 }}>
    <input
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder="Nova tarefa"
    />
    <button type="submit">Adicionar</button>
  </form>
);

export default TaskForm;
