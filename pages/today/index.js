import { Fragment, useRef, useState } from "react";
import { MongoClient } from "mongodb";
import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import { useRouter } from "next/router";
import Head from "next/head";

function TodoApp(props) {
  const [value,setValue]=useState();
  const router = useRouter();
  async function addTaskHandler(enteredtaskData) {
    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(enteredtaskData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.replace(router.asPath);
  }
  async function handleToggle(todo) {
    const response = await fetch("/api/todos", {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.replace(router.asPath);
  }
  async function handleUpdate(todo) {
    const response = await fetch("/api/edit", {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.replace(router.asPath);
  }
  const edit=(todo)=>{
      setValue(todo);
      router.replace(router.asPath);
  }
  return (
    <Fragment>
      <Head>
        <title>Todays Tasks</title>
        <meta
          name="description"
          content="todays pending tasks"
        />
      </Head>
      <TodoForm onAddTask={addTaskHandler} editValue={value} handleUpdate={handleUpdate} updateForm={()=>setValue("")}/>
      <h1 style={{marginLeft:"25rem"}}>Pending Tasks</h1>
      <TodoList todos={props.todos} handleToggle={handleToggle} edit={edit}/>
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect("mongodb+srv://saifmohammad:Mongo1234@cluster0.9nfvk.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0");
  const db = client.db();
  const todoscollection = db.collection("todos");
  const todos = await todoscollection.find().toArray();
  client.close();
  return {
    props: {
      todos: todos
        .filter((task) => task.completed === false)
        .map((task) => ({
          text: task.text,
          completed: task.completed,
          id: task._id.toString(),
        })),
    },
    revalidate: 1,
  };
}
export default TodoApp;
