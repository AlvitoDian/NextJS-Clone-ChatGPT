import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINIAI_KEY);

export async function getGeminiAIResponse(question) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent(question);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error("Error fetching GenAI response:", error);
    throw new Error("Failed to fetch response from GenAI");
  }
}
