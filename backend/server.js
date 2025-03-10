const express= require('express')
require('dotenv').config();
const app= express()
const aiRoutes= require('./src/ai.route')
app.use(express.json())
app.get('/',(req,res)=>{
res.send("welcom to ai")
})

app.use('/ai', aiRoutes)
const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Server started on port ${port}`)})