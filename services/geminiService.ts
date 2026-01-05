
import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from "../types";

const API_KEY = process.env.API_KEY || "";

export const getProjectArchitecture = async (prompt: string): Promise<AIResponse> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze this software project request and provide a technical roadmap: "${prompt}"`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          roadmap: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Step-by-step development phases"
          },
          techStack: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Recommended languages, frameworks, and tools"
          },
          estimation: {
            type: Type.STRING,
            description: "Estimated time to MVP"
          },
          complexity: {
            type: Type.STRING,
            enum: ["Low", "Medium", "High"],
            description: "Technical difficulty level"
          }
        },
        required: ["roadmap", "techStack", "estimation", "complexity"]
      }
    }
  });

  try {
    return JSON.parse(response.text || "{}") as AIResponse;
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    throw new Error("Could not generate architecture. Please try again.");
  }
};
