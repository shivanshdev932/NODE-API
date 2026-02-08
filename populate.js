import express from 'express'
const app = express()

app.get("/",(req,res)=>{
    res.send("<h1>Populate Data from Mongo</h1>")
    
})
app.listen(5200)
