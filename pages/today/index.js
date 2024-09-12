import { Fragment } from "react";
import TodoList from "../../components/TodoApp/TodoList";
import Link from "next/link";

function TodoApp(){
    return <Fragment>
        <Link href="/today/completedtasks">Click here to see Completed Tasks</Link>
        <TodoList />
    </Fragment>
}
export default TodoApp;