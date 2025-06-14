import React from "react";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => onToggle(task)}>{task.title}</span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>✖</button>
    </li>
  );
}
