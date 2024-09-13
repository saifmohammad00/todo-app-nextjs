import TodoList from "../../components/todo/TodoList";
import { MongoClient } from "mongodb";

function CompletedTasks(props){
    return <div>
        <h1>Completed Tasks</h1>
        <TodoList todos={props.todos}/>
    </div>
}
export async function getStaticProps() {
    const client = await MongoClient.connect(
      "mongodb+srv://saifmohammad:Mongo1234@cluster0.9nfvk.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();
    const todoscollection = db.collection("todos");
    const todos = await todoscollection.find().toArray();
    client.close();
    return {
      props: {
        todos: todos.filter(task=>task.completed===false)
        .map(task=>({
          text:task.text,
          completed:task.completed,
          id:task._id.toString(),
        })),
      },
      revalidate: 1,
    };
  }
export default CompletedTasks;