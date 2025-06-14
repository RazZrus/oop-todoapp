import { type FC, type FormEvent, useState } from "react";

interface NewProjectFormProps {
  onAdd: (name: string) => void
}

const NewProjectForm: FC<NewProjectFormProps> = ({ onAdd }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd(name);
    setName("");
  };

  return (
    <form className="new-project-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New project name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default NewProjectForm
