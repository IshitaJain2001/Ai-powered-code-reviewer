const express= require('express')

const router= express.Router()
const generatePrompt= require('./ai.service')
router.get('/get-data',async (req,res)=>{
    let prompt= req.query.prompt

    if(!prompt){
        return res.status(400).send("Enter Prompt First!")
    }
const response = await generatePrompt(prompt)

res.send(response)

})

module.exports = router;