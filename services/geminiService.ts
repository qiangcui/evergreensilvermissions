import { GoogleGenerativeAI } from "@google/generative-ai";
import { Language } from "../constants/translations";

// Use Vite's standard way to access environment variables
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

// Force API version 'v1' to avoid 'v1beta' issues reported in some regions
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
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    }, { apiVersion: 'v1' }); // Explicitly use v1

    // CRITICAL: Gemini history MUST start with a 'user' role.
    let formattedHistory = history.map(h => ({
      role: h.role === 'model' ? 'model' : 'user',
      parts: [{ text: h.text }]
    }));

    // Clean history: must start with user, and roles must alternate
    while (formattedHistory.length > 0 && formattedHistory[0].role !== 'user') {
      formattedHistory.shift();
    }

    // Final safety check: if empty after cleaning, just send as new message
    const chatConfig = formattedHistory.length > 0 ? { history: formattedHistory } : {};
    const chat = model.startChat(chatConfig);

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text() || (language === 'ko' ? "죄송합니다. 지금은 연결이 원활하지 않습니다." : "I apologize, I'm having trouble connecting.");
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return language === 'ko'
      ? "현재 시스템 점검 중입니다. 이메일로 직접 문의해 주시기 바랍니다."
      : "I'm currently undergoing maintenance to serve you better. Please feel free to email us directly.";
  }
};

export const getDailyInspiration = async (language: Language): Promise<{ text: string; reference: string; reflection: string }> => {
  if (!API_KEY) {
    throw new Error("API Key missing");
  }

  try {
    const langName = language === 'ko' ? 'Korean' : 'English';
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    }, { apiVersion: 'v1' }); // Explicitly use v1

    const prompt = `Generate a short, uplifting daily inspiration quote or verse suitable for an elderly care missionary organization, in ${langName}, with a brief 1-sentence reflection. 
    Return the result in JSON format ONLY with keys: "text" (the quote), "reference" (the source), and "reflection" (the 1-sentence encouragement). Do not include markdown code blocks.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let jsonText = response.text().trim();

    // Remove markdown code blocks if present
    jsonText = jsonText.replace(/```json\n?|```/g, '');

    if (!jsonText) throw new Error("No data returned");
    return JSON.parse(jsonText);
  } catch (error) {
    console.error("Gemini Inspiration Error:", error);
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