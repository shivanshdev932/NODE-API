const express=require('express');
const app = express()
app.get('/',(req,res)=>{
    res.send("Hello Home")
})
app.get('/service',(req,res)=>{
    res.send("Hello Service")
})
app.get('/products',(req,res)=>{
    res.send("Hello Products")
})
app.use((req, res, next) => {
  console.log("Middleware Working")
  next()
})
// app.use((req,res)=>{
// res.status(404).send(" This Page not made yet")
// })
app.listen(4000)