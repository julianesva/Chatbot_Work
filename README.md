# Chatbot_Project

A simple full-stack chatbot application powered by OpenAI's GPT API. This project includes a Node.js backend with Express and a React frontend.

---

## 📋 Prerequisites

Before you begin, ensure the following are installed on your system:

- [Node.js (v14 or higher)](https://nodejs.org/)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [OpenAI API Key](https://platform.openai.com/account/api-keys)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/chatbot-project.git
cd chatbot-project
2️⃣ Install Dependencies
Backend:

bash
Copy
Edit
cd backend
npm install
Frontend:

bash
Copy
Edit
cd ../frontend
npm install
3️⃣ Configure Environment Variables
⚠️ IMPORTANT: You must provide your own OpenAI API key for the chatbot to function.

Steps:

Navigate to the backend folder:

bash
Copy
Edit
cd backend
Create a .env file:

bash
Copy
Edit
touch .env
Add your OpenAI API key to the .env file:

env
Copy
Edit
OPENAI_API_KEY=your_openai_api_key_here
🔑 How to Get Your OpenAI API Key:
Go to the OpenAI Platform

Log in or sign up

Navigate to the API Keys section

Create a new key and copy it

Paste it in your .env file as shown above

💡 Security Note: Keep your API key secure and never commit it to version control!

🏃‍♂️ Running the Application
You'll need to run both the backend and frontend servers simultaneously.

✅ Manual Start (Recommended for Development)
Terminal 1 – Start Backend Server:

bash
Copy
Edit
cd backend
node index.js
Backend runs at: http://localhost:3001

Terminal 2 – Start Frontend Server:

bash
Copy
Edit
cd frontend
npm start
Frontend runs at: http://localhost:3000

# Start frontend (in a new terminal)
npm run client
🌐 Usage
Open your browser and go to: http://localhost:3000

Type your message in the input field

Press Enter or click "Send"

Chat with your AI assistant!

📁 Project Structure
bash
Copy
Edit
chatbot-project/
├── 📁 backend/
│   ├── 📄 index.js          # Express server & OpenAI integration
│   ├── 📄 .env              # Environment variables (API key)
│   ├── 📄 .env.example      # Environment template
│   └── 📄 package.json      # Backend dependencies
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📄 App.js        # Main React component
│   │   ├── 📄 App.css       # Styling
│   │   └── 📄 index.js      # React entry point
│   ├── 📁 public/
│   └── 📄 package.json      # Frontend dependencies
├── 📄 README.md             # Project documentation
└── 📄 .gitignore            # Git ignore rules