import { useState } from "react";
import { createTodo } from "../api";

function TodoForm({ userId, onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTodo({ userId, title, description });
    setTitle("");
    setDescription("");
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
      />
      <button type="submit">Add todo</button>
    </form>
  );
}

export default TodoForm;
