import ProjectItem from "./ProjectItem";

export default function ProjectList({ projects, tasks, onDeleteProject, onAddTask, onToggleTask, onDeleteTask }) {
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
