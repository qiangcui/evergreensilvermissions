import { GoogleGenerativeAI } from "@google/generative-ai";
import { Language } from "../constants/translations";

// Use Vite's standard way to access environment variables
const API_KEY = (import.meta.env.VITE_GEMINI_API_KEY || "").trim();

// Debugging: Log key status (safe)
console.log("Gemini API Key Status:", API_KEY ? `Present (Length: ${API_KEY.length})` : "Missing");

const genAI = new GoogleGenerativeAI(API_KEY);

export const getChatResponse = async (
  message: string,
  history: { role: string; text: string }[],
  language: Language
): Promise<string> => {
  if (!API_KEY) {
    console.error("VITE_GEMINI_API_KEY is not defined");
    return language === 'ko'
      ? "API 키가 설정되지 않았습니다. GitHub Secrets에서 GEMINI_API_KEY를 확인하세요."
      : "API Key is not configured. Please check GEMINI_API_KEY in GitHub Secrets.";
  }

  try {
    const langName = language === 'ko' ? 'Korean' : 'English';
    // Using 'gemini-2.0-flash' as it appears in your user's available model list
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash"
    });

    // CRITICAL: Gemini history MUST start with a 'user' role.
    let formattedHistory = history.map(h => ({
      role: h.role === 'model' ? 'model' : 'user',
      parts: [{ text: h.text }]
    }));

    // Clean history: must start with user
    while (formattedHistory.length > 0 && formattedHistory[0].role !== 'user') {
      formattedHistory.shift();
    }

    // Ensure roles alternate
    const validHistory: typeof formattedHistory = [];
    if (formattedHistory.length > 0) {
      validHistory.push(formattedHistory[0]);
      for (let i = 1; i < formattedHistory.length; i++) {
        if (formattedHistory[i].role !== validHistory[validHistory.length - 1].role) {
          validHistory.push(formattedHistory[i]);
        }
      }
    }

    const chat = model.startChat({
      history: validHistory
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text() || (language === 'ko' ? "죄송합니다. 지금은 연결이 원활하지 않습니다." : "I apologize, I'm having trouble connecting.");
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    // Fallback for 404/Quota issues
    return language === 'ko'
      ? "지금은 AI를 사용할 수 없습니다. (오류: 연결 불안정). 잠시 후 다시 시도해주세요."
      : "The AI service is currently unavailable (Connection Error). Please try again later.";
  }
};

export const getDailyInspiration = async (language: Language): Promise<{ text: string; reference: string; reflection: string }> => {
  if (!API_KEY) {
    throw new Error("API Key missing");
  }

  try {
    const langName = language === 'ko' ? 'Korean' : 'English';
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash"
    });

    const prompt = `Generate a short, uplifting daily inspiration quote or verse suitable for an elderly care missionary organization, in ${langName}, with a brief 1-sentence reflection. 
    Return the result in JSON format ONLY with keys: "text" (the quote), "reference" (the source), and "reflection" (the 1-sentence encouragement). Do not include markdown code blocks.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let jsonText = response.text().trim();

    jsonText = jsonText.replace(/```json\n?|```/g, '');

    if (!jsonText) throw new Error("No data returned");
    return JSON.parse(jsonText);
  } catch (error) {
    console.error("Gemini Inspiration Error:", error);
    // Immediate Fallback
    if (language === 'ko') {
      return {
        text: "백발은 영화의 면류관이라 공의로운 길에서 얻으리라",
        reference: "잠언 16:31",
        reflection: "살아온 모든 날들이 하나님의 은혜이자 지혜의 증거입니다."
      };
    }
    return {
      text: "Gray hair is a crown of splendor; it is attained in the way of righteousness.",
      reference: "Proverbs 16:31",
      reflection: "Every year lived is a testament to grace and wisdom gained along the journey."
    };
  }
};