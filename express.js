import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3200;

// Needed for Render path resolution
const __dirname = path.resolve();

// Function to always read latest db.json
const getUserData = () => {
  const filePath = path.join(__dirname, "db.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
};

// HOME API
app.get("/", (req, res) => {
  const userdata = getUserData();
  res.json(userdata);
});

// USER BY ID API
app.get("/user/:id", (req, res) => {
  const id = Number(req.params.id);
  const userdata = getUserData();

  const filterdata = userdata.filter(user => user.id === id);

  res.json(filterdata);
});

// IMPORTANT: use process.env.PORT
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
