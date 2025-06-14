import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import { type FC } from "react";
import type { Project, Task } from "../src/App";

interface ProjectItemProps {
  project: Project
  tasks: Array<Task>
  onDeleteProject: (id: number) => void
  onToggleTask: (task: Task) => void
  onDeleteTask: (id: number) => void
  onAddTask: (title: string, projectId: number) => void,
}

const ProjectItem: FC<ProjectItemProps> = ({ project, tasks, onDeleteProject, ...taskHandlers }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{project.name}</h3>
        <button className="delete-btn" onClick={() => onDeleteProject(project.id)}>🗑</button>
      </div>
      <NewTaskForm projectId={project.id} onAddTask={taskHandlers.onAddTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={taskHandlers.onToggleTask}
        onDeleteTask={taskHandlers.onDeleteTask}
      />
    </div>
  );
}

export default ProjectItem