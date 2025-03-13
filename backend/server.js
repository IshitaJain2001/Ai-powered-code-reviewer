// require('dotenv').config();
const cors = require("cors");
const express= require('express')

const app= express()
// app.use(cors());
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//     next();
// });

app.use(cors({ origin: "*" }));
const aiRoutes= require('./src/ai.route')
app.use(express.json())
app.get('/',(req,res)=>{
res.send("welcom to ai")
})

app.use('/ai', aiRoutes)
const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Server started on port ${port}`)})