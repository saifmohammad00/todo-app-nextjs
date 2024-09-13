import { useRef } from 'react';
import classes from "./TodoForm.module.css";


const TodoForm = (props) => {
  const enteredTask=useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredTask.current.value === '') return;

    const newTodoItem = {
      text: enteredTask.current.value,
      completed: false,
    };
    props.onAddTask(newTodoItem);
    enteredTask.current.value="";
  };

  return (
    <div className={classes.todolist}>
      <h1>Todo Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={enteredTask}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};
export default TodoForm;