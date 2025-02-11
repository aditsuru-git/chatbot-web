const express = require("express");
const cors = require("cors");
const sendMsg = require("./chatbot"); // Import your AI logic

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await sendMsg(prompt);
    res.json({ response }); // Send the AI response
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
