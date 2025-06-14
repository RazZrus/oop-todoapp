import './app.css'
import { useEffect, useState } from "react";
import NewProjectForm from '../components/NewProjectForm'
import ProjectList from '../components/ProjectList'

type Project = {
  id: number
  name: string
  userId: number
}

type Task = {
  id: number
  title: string
  completed: boolean
  projectId: number
}

type User = {
  id: number
  name: string
  email: string
}


const API = "https://oop-todoapp-backend.vercel.app";

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [projects, setProjects] = useState<Array<Project>>([]);
  const [tasks, setTasks] = useState<Array<Task>>([]);

  useEffect(() => {
    const initUser = async () => {
      let res = await fetch(`${API}/user`);
      const users = await res.json();
      if (users.length > 0) {
        setUser(users[0]);
      } else {
        res = await fetch(`${API}/user`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: 'User', email: "user@example.com" })
        });
        const newUser = await res.json();
        setUser(newUser);
      }
    };
    initUser();
  }, []);

  useEffect(() => {
    if (user) {
      fetch(`${API}/project`)
        .then(res => res.json())
        .then(data => setProjects(data.filter((p: Project) => p.userId === user.id)));

      fetch(`${API}/task`)
        .then(res => res.json())
        .then(setTasks);
    }
  }, [user]);

  const handleAddProject = async (name: string) => {
    if (!user) return
    const res = await fetch(`${API}/project`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, userId: user.id }),
    });
    const project = await res.json();
    setProjects(prev => [...prev, project]);
  };

  const handleDeleteProject = async (projectId: number) => {
    await fetch(`${API}/project/${projectId}`, { method: "DELETE" });
    setProjects(prev => prev.filter(p => p.id !== projectId));
    setTasks(prev => prev.filter(t => t.projectId !== projectId));
  };

  const handleAddTask = async (title: string, projectId: number) => {
    const res = await fetch(`${API}/task`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, projectId })
    });
    const task = await res.json();
    setTasks(prev => [...prev, task]);
  };

  const handleToggleTask = async (task: Task) => {
    const res = await fetch(`${API}/task/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed }),
    });
    const updated = await res.json();
    setTasks(prev => prev.map(t => t.id === updated.id ? updated : t));
  };

  const handleDeleteTask = async (id: number) => {
    await fetch(`${API}/task/${id}`, { method: "DELETE" });
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  if (!user) return <div className="loading">Loading user...</div>;

  return (
    <div className="app">
      <h1>Welcome, {user.name}</h1>
      <NewProjectForm onAdd={handleAddProject} />
      <ProjectList
        projects={projects}
        tasks={tasks}
        onDeleteProject={handleDeleteProject}
        onAddTask={handleAddTask}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
