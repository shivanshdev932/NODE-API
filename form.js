const express=require('express')
const path=require('path')
const app=express()
app.get("/",(req,res)=>{
const abspath=path.resolve('view/form.html')

res.sendFile(abspath)
})
app.post("/submit",(req,res)=>{
    res.send("Form Submited")
})
app.listen(5500)