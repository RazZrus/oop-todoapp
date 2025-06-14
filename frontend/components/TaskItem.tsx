import type { FC } from "react";
import type { Task } from "../src/App";

interface TaskItemProps {
  task: Task
  onToggle: (task: Task) => void
  onDelete: (id: number) => void
}

const TaskItem: FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => onToggle(task)}>{task.title}</span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>✖</button>
    </li>
  );
}

export default TaskItem