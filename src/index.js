const express = require("express");
const cors = require("cors");
const path = require("path");
const sendMsg = require("./chatbot");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve files from src/public directory
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.post("/api/chat", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await sendMsg(prompt);
    res.json({ response });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
