const inputText = document.querySelector("#textinput");
const form = document.querySelector("form");
const chatwindow = document.querySelector(".chatwindow");

async function getAIResponse(prompt) {
  const response = await fetch("http://localhost:3000/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  const data = await response.json();
  console.log("AI Response:", data.response);
  return data.response;
}

function createChat(message, role) {
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("user", "chat");

  const heading = document.createElement("h1");
  heading.textContent = `${role}: `;

  const paragraph = document.createElement("p");
  paragraph.textContent = message;

  chatDiv.appendChild(heading);
  chatDiv.appendChild(paragraph);

  return chatDiv;
}

form.addEventListener("click", async (target) => {
  target.preventDefault();
  const prompt = inputText.value;
  inputText.value = "";
  if (!prompt) return;
  chatwindow.appendChild(createChat(prompt, "User"));
  const result = await getAIResponse(prompt);
  chatwindow.appendChild(createChat(result, "Kugisaki"));
});
