import { deleteTodo, update } from "../api";

function TodoList({ todos, refresh }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <b>{todo.title}</b> - {todo.description}

          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() =>
              update(todo._id, {
                ...todo,
                completed: !todo.completed,
              }).then(refresh)
            }
          />

          <button onClick={() => deleteTodo(todo._id).then(refresh)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
