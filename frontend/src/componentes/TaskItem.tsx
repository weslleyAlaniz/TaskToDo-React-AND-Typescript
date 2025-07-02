import React from "react";
import { Task } from "../services/taskService";

interface TaskItemProps {
  task: Task;
  onToggle: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => (
  <li
    onClick={() => onToggle(task)}
    className={`task-item${task.completed ? " completed" : ""}`}
    title="Clique para alternar o status"
  >
    <span className="task-title">
      {task.title} {task.completed ? "✅" : ""}
    </span>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onDelete(task.id);
      }}
      className="delete-btn"
    >
      Excluir
    </button>
  </li>
);

export default TaskItem;
