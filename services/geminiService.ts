import { GoogleGenerativeAI } from "@google/generative-ai";
import { Language } from "../constants/translations";

const API_KEY = process.env.API_KEY || "";
const genAI = new GoogleGenerativeAI(API_KEY);

export const getChatResponse = async (
  message: string,
  history: { role: string; text: string }[],
  language: Language
): Promise<string> => {
  if (!API_KEY) {
    return language === 'ko'
      ? "API 키가 설정되지 않았습니다. 관리자에게 문의하세요."
      : "API Key is not configured. Please contact the administrator.";
  }

  try {
    const langName = language === 'ko' ? 'Korean' : 'English';
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: `You are "Grace", a warm, compassionate, and helpful virtual assistant for the Evergreen Silver Missionary Organization (ESMO). 
        ESMO is a non-profit dedicated to supporting the elderly ("Silver") through faith-based initiatives and community service.
        Your goal is to answer visitor questions about volunteering, donations, our senior care programs, and our mission.
        
        Current Language Setting: ${langName}.
        IMPORTANT: You MUST respond in ${langName}.
        
        Tone: Kind, patient, encouraging, and professional. 
        Keep answers concise (under 100 words) unless asked for more detail.
        If asked about donations, mention we accept online donations and physical goods like canned food and warm clothes.`,
    });

    const chat = model.startChat({
      history: history.map(h => ({
        role: h.role === 'model' ? 'model' : 'user',
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text() || (language === 'ko' ? "죄송합니다. 지금은 연결이 원활하지 않습니다. 나중에 다시 시도해 주세요." : "I apologize, I'm having trouble connecting right now. Please try again later.");
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
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
      }
    });

    const prompt = `Generate a short, uplifting daily inspiration quote or verse suitable for an elderly care missionary organization, in ${langName}, with a brief 1-sentence reflection. 
    Return the result in JSON format with keys: "text" (the quote), "reference" (the source), and "reflection" (the 1-sentence encouragement).`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const jsonText = response.text();

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