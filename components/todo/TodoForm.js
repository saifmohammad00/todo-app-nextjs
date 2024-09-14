import { useRef, useState } from 'react';
import classes from "./TodoForm.module.css";
import { useRouter } from 'next/router';


const TodoForm = (props) => {
  const enteredTask=useRef();
  if(props.editValue){
    const {text}=props.editValue;
    enteredTask.current.value=text;
  }
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
  const handleUpdate=(e)=>{
    e.preventDefault();
    if (enteredTask.current.value === '') return;
    const {id}=props.editValue;
    const newTodoItem = {
      id:id,
      text: enteredTask.current.value,
      completed: false,
    };
    props.handleUpdate(newTodoItem);
    props.updateForm("");
    enteredTask.current.value="";
  }

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Todo Form</h1>
      <form onSubmit={props.editValue?handleUpdate:handleSubmit} className={classes.form}>
        <input
          type="text"
          ref={enteredTask}
          placeholder="Add a new todo"
        />
        <button type="submit">{props.editValue?"Edit Task":"Add Task"}</button>
      </form>
    </div>
  );
};
export default TodoForm;