import express from 'express'
import { MongoClient, ObjectId } from 'mongodb'

const URL = 'mongodb://localhost:27017'
const db = 'myDatabase'
const client = new MongoClient(URL)

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {


    res.send("GOAT")
})

app.post('/API/createuser', async (req, res) => {
    console.log(req.body)

    // FIX 1: Destructure name and role from req.body
    const { name, role } = req.body

    // Now these variables actually exist to be checked
    if (!name || !role) {
        res.send({ message: "field missing", success: false })
        return // Just return to stop execution
    }

    const collection = client.db(db).collection("employees")

    // FIX 2: Add 'await' so the database actually saves the data
    const result = await collection.insertOne(req.body)

    res.send({ message: "success", result })
})


app.put('/API/updatedata/:id', async (req,res)=>{
     const collection = client.db(db).collection("employees")
    const result = await collection.updateOne({_id :new ObjectId(req.params.id) })
    if(result){
  res.send({message:"Data Updated",success:true})
}else{
    res.send("Data not updated")
}
})


app.delete("/API/delete/:id", async (req,res)=>{
console.log(req.params.id);
 const collection = client.db(db).collection("employees")
const result = await collection.deleteOne({_id :new ObjectId(req.params.id) })
if(result){
  res.send({message:"Data Deleted",success:true})
}else{
    res.send("Data not deleted")
}

})



app.listen(3300);
