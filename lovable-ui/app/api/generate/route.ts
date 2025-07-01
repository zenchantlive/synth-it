import { NextRequest, NextResponse } from "next/server";
import { generateCodeWithClaude } from "@/lib/claude-code";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    
    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }
    
    console.log("Generating code for prompt:", prompt);
    
    const result = await generateCodeWithClaude(prompt);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.error || "Failed to generate code" },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      success: true,
      messages: result.messages
    });
    
  } catch (error: any) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}