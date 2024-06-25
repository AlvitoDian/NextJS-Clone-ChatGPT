import { NextResponse } from "next/server";
import { getGeminiAIResponse } from "@/utils/geminiai";

export async function POST(request: Request, question: any) {
  try {
    const { question } = await request.json();

    console.log("Question received: ", question);

    const answer = await getGeminiAIResponse(question);
    console.log("Answer: ", answer);

    return NextResponse.json({ message: "Hello, Next.js!", question });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to handle request" },
      { status: 500 }
    );
  }
}
