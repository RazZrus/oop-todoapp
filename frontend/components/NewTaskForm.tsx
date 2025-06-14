import { type FC, type FormEvent, useState } from "react";

interface NewTaskFormProps {
  projectId: number,
  onAddTask: (title: string, projectId: number) => void,
}

const NewTaskForm: FC<NewTaskFormProps> = ({ projectId, onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask(title, projectId);
    setTitle("");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default NewTaskForm
