import { MongoClient } from "mongodb";
import TodoCompleted from "../../components/todo/TodoCompleted";
import { useRouter } from "next/router";

function CompletedTasks(props) {
  const router=useRouter();
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
  return (
    <div>
      <h1>Completed Tasks</h1>
      <TodoCompleted todos={props.todos} handleToggle={handleToggle} />
    </div>
  );
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
      todos: todos
        .filter((task) => task.completed === true)
        .map((task) => ({
          text: task.text,
          completed: task.completed,
          id: task._id.toString(),
        })),
    },
    revalidate: 1,
  };
}
export default CompletedTasks;
