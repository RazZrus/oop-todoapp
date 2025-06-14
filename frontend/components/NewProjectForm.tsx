import React, { useState } from "react";

export default function NewProjectForm({ onAdd }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
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
