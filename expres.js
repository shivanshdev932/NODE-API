const express=require('express')
const { about } = require('./about')
const app = express()
app.get("/about",(req,res)=>{res.send(about())})
app.get("/",(req,res)=>{
res.send("Namaste Express <a href='about' >Go to About</a>")

})
app.listen(2200)
