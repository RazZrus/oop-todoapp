import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";

export default function ProjectItem({ project, tasks, onDeleteProject, ...taskHandlers }) {
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
