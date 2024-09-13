import { useState } from 'react';
import classes from "./TodoList.module.css";
import TodoList from './TodoList';


const TodoForm = () => {
  const [todos,setTodos]=useState([]);
  const [newTodo,setNewTodo]=useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodoItem]);
    setNewTodo('');
  };

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={classes.todolist}>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <TodoList data={todos} hToggle={handleToggle} hDelete={handleDelete}/>
    </div>
  );
};
export default TodoForm;