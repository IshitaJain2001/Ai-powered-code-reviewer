const express= require('express')
require('dotenv').config();
const app= express()

app.get('/',(req,res)=>{
res.send("welcom to ai")
})
const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Server started on port ${port}`)})