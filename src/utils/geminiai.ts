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
    console.log(text);

    /*   const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    });

    return chatCompletion; */
  } catch (error) {
    console.error("Error fetching GenAI response:", error);
    throw new Error("Failed to fetch response from GenAI");
  }
}
