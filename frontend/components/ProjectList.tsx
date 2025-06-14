import type { FC } from "react";
import ProjectItem from "./ProjectItem";
import type { Project, Task } from "../src/App";

interface ProjectListProps {
  projects: Array<Project>
  tasks: Array<Task>
  onDeleteProject: (id: number) => void
  onToggleTask: (task: Task) => void
  onDeleteTask: (id: number) => void
  onAddTask: (title: string, projectId: number) => void,
}

const ProjectList: FC<ProjectListProps> = ({ projects, tasks, onDeleteProject, onAddTask, onToggleTask, onDeleteTask }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          project={project}
          tasks={tasks.filter(t => t.projectId === project.id)}
          onDeleteProject={onDeleteProject}
          onAddTask={onAddTask}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default ProjectList