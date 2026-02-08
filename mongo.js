import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const url = 'mongodb://localhost:27017'; // Change this to your MongoDB URI if different
const client = new MongoClient(url);
const dbName = 'myDatabase'; // Name of your database

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
     <form action="/submit" method="post">
        <h1>Login Form</h1>
        <input type="text" placeholder="Enter Name" name="name">
        <br>
        <input type="password" placeholder="Enter Password" name="password">
        <br>
        <button type="submit">Login</button>
    </form>
    `);
});

// Use async/await to handle the database operation
app.post('/submit', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('employees');

    // Use insertOne (and notice the 'await' here)
    const result = await collection.insertOne(req.body);
    
    console.log("Inserted ID:", result.insertedId);
    res.send("Data submitted and saved to Database!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving to database");
  }
});

app.listen(2200, () => {
  console.log("Server is running on http://localhost:2200");
});