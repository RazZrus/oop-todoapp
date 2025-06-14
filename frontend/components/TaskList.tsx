import type { FC } from "react";
import TaskItem from "./TaskItem";
import type { Task } from "../src/App";

interface TaskListProps {
  tasks: Array<Task>
  onToggleTask: (task: Task) => void
  onDeleteTask: (id: number) => void
}

const TaskList: FC<TaskListProps> = ({ tasks, onToggleTask, onDeleteTask }) => {
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

export default TaskList