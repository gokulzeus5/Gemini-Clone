import { GoogleGenerativeAI } from "@google/generative-ai";


const VITE_GEMINI_API_KEY =  'AIzaSyATNqpshAmJ9ZrzNXkuqGgEh7A_mKZ0jqE'
const genAI = new GoogleGenerativeAI(VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run(prompt) {
  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    console.log("Gemini Response:", text);
    return text;   // ✅ return the text correctly
  } catch (error) {
    console.error("Error generating content:", error);
    return "Something went wrong. Please try again.";
  }
}


export default run;
