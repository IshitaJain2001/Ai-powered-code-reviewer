const express= require('express')
require('dotenv').config();
const router= express.Router()
const generatePrompt= require('./ai.service')
// router.post('/get-data',async (req,res)=>{
//     let prompt= req.body.code

//     if(!prompt){
//         return res.status(400).send("Enter Prompt First!")
//     }
// const response = await generatePrompt(prompt)

// res.send(response)

// })

router.post('/get-data', async (req, res) => {
    let prompt = req.body.code;

    if (!prompt) {
        return res.status(400).json({ error: "Enter Prompt First!" });
    }

    try {
        const response = await generatePrompt(prompt);
        res.json({ result: response }); // Ensure JSON response
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = router;