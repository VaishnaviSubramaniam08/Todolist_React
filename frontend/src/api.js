import axios from "axios";
const API=axios.create({
    baseURL:"http://localhost:5000"
});
export const fetchTodos=(userId)=>API.get(`/todos?userId=${userId}`);
export const createTodo=(todo)=>API.post("/todos",todo);
export const update=(id,todo)=>API.put(`/todos/${id}`,todo);
export const deleteTodo=(id)=>API.delete(`/todos/${id}`);
