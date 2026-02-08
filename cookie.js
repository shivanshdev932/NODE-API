import express from 'express'
const app = express()
app.get("/API/home",(req,res)=>{
res.send('<h1>WORKING !</h1>')
})
const PORT = process.env.PORT || 2200;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
