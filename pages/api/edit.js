import { MongoClient,ObjectId } from "mongodb";
async function handler(req,res){
    if (req.method === "PUT") {
        const data=req.body;
        const {id,text,completed}=data;
        console.log(id);
        const client = await MongoClient.connect(
            "mongodb+srv://saifmohammad:Mongo1234@cluster0.9nfvk.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0"
        );
        const db=client.db('todos');
        const todosCollection = db.collection("todos");
        const result = await todosCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: { completed:completed,text:text } }
        );
        client.close();
        res.status(200).json(result);
      }
}
export default handler;