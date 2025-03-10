const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_AI);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });



async function generatePrompt(prompt){
    const result = await model.generateContent(prompt);
    return result.response.text();
    
}

module.exports= generatePrompt