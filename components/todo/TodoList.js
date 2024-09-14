import classes from "./TodoForm.module.css";

function TodoList(props) {
  const handleToggle = (todo) => {
    props.handleToggle(todo);
  };

  const handleDelete = (id) => {
    props.handleDelete(id);
  };
  const handleEdit=(todo)=>{
        props.edit(todo);
  }
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
          <div>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={()=>handleEdit(todo)}>Edit</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default TodoList;
