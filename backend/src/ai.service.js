const { GoogleGenerativeAI } = require("@google/generative-ai");

// const path = require("path");
// require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const genAI = new GoogleGenerativeAI('AIzaSyDpfBm2OMfxGD8htIIDHbD1zwC39ykQgy0');
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash",
    systemInstruction:"you are here for reviewing code."
 });



async function generatePrompt(prompt){
    const result = await model.generateContent(prompt);
    return result.response.text();
    
}

module.exports= generatePrompt