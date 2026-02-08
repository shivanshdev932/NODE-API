import express from 'express';
import userdata from './db.json' with { type: 'json' };
const app = express()
app.get("/",(req,res)=>{
  console.log(userdata);
  
res.send(userdata)
})
// Added the leading slash /
app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  
  // This works perfectly now (using implicit return)
  const filterdata = userdata.filter((user) => user.id == id);
  
  console.log(filterdata);
  res.send(filterdata);
});
app.listen(3200);
