import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getIntentionSuggestions(currentInput: string) {
  try {
    const prompt = currentInput.trim() 
      ? `Based on the starting text "${currentInput}", suggest 5 short, powerful holistic session intentions (max 3 words each) for a healing/focus sound app.`
      : "Suggest 5 short, powerful holistic session intentions (max 3 words each) for a healing/focus sound app.";

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING
          }
        }
      }
    });

    const text = response.text;
    if (text) {
      return JSON.parse(text) as string[];
    }
    return [];
  } catch (error) {
    console.error("Error fetching intention suggestions:", error);
    return [];
  }
}
