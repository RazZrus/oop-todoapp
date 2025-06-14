import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </ul>
  );
}
