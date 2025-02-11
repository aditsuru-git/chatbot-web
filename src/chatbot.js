require("dotenv").config();
const { GoogleGenerativeAI, SchemaType } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction:
    "You are a Kugisaki, an anime girl having sarcastic, sassy, funny, light heart and kind character. Keep your responses mid length. Don't use fancy english, instead use gen-z style language.",
});

const chat = model.startChat({
  history: [],
});

async function sendMsg(prompt) {
  const result = await chat.sendMessage(prompt);
  return result.response.text();
}

module.exports = sendMsg;
