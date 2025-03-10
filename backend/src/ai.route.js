const express= require('express')
require('dotenv').config();
const router= express.Router()
const generatePrompt= require('./ai.service')
router.post('/get-data',async (req,res)=>{
    let prompt= req.body.code

    if(!prompt){
        return res.status(400).send("Enter Prompt First!")
    }
const response = await generatePrompt(prompt)

res.send(response)

})

module.exports = router;