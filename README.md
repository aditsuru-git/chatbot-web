# Kugisaki Chat Bot

A web-based chat interface featuring Kugisaki, a sassy AI personality powered by Google's Gemini 2.0 Flash model. The application provides a modern, responsive chat interface with real-time AI responses.

## Features

- Real-time chat interface
- Sassy and fun Gen-Z style responses
- Responsive design for all devices
- Custom scrollbar and smooth animations
- Dark mode interface

## Prerequisites

- Node.js (v14 or higher)
- Google AI API key

## Setup

1. Clone the repository:

```bash
git clone https://github.com/aditsuru-git/chatbot-web.git
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your Google AI API key:

```bash
API_KEY=your_api_key_here
```

## Running the Application

1. Start the server:

```bash
npm run start
```

2. Access the application:
   - Open `http://localhost:3000` in your browser
   - The backend API will be available at `http://localhost:3000/api/chat`

## API Endpoints

### POST /api/chat

Send chat messages to the AI

**Request Body:**

```json
{
  "prompt": "Your message here"
}
```

**Response:**

```json
{
  "response": "AI's response message"
}
```

## Technologies Used

- Frontend:
  - HTML5
  - CSS3
  - JavaScript (ES6+)
- Backend:
  - Node.js
  - Express.js
- AI Integration:
  - Google Generative AI (Gemini 2.0 Flash)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
