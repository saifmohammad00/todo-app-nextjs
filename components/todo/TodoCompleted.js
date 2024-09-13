import classes from "./TodoForm.module.css";

function TodoCompleted(props) {
  function handleToggle(todo){
    props.handleToggle(todo);
  }

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  return (
    <ul style={{ listStyle: "none" }} className={classes.todolist}>
      {props.todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggle(todo)}
          />
          {todo.text}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
export default TodoCompleted;