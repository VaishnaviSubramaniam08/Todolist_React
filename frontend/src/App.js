import { useEffect, useState } from "react";
import { fetchTodos } from "./api";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const userId = "1"; // simple fixed user for now

  const loadTodos = async () => {
    const res = await fetchTodos(userId);
    setTodos(res.data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div>
      <h2>Todo App</h2>
      <TodoForm userId={userId} onAdd={loadTodos} />
      <TodoList todos={todos} refresh={loadTodos} />
    </div>
  );
}

export default App;
