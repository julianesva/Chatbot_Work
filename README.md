# 💬 Chatbot Project

A simple full-stack chatbot application powered by OpenAI's GPT API. This project includes a Node.js backend (Express) and a React frontend.

---

## 📋 Prerequisites

Ensure the following are installed on your system:

- [Node.js (v14 or higher)](https://nodejs.org/)
- npm (comes with Node.js)
- [Git](https://git-scm.com/)
- An [OpenAI API Key](https://platform.openai.com/account/api-keys)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/chatbot-project.git
cd chatbot-project
```

### 2️⃣ Install Dependencies

#### Backend:

```bash
cd backend
npm install
```

#### Frontend:

```bash
cd ../frontend
npm uninstall openai
npm install openai@3.2.1
npm install
```

---

### 3️⃣ Configure Environment Variables

⚠️ **IMPORTANT**: You must provide your own OpenAI API key for the chatbot to function.

#### Steps:

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Create a `.env` file:

   ```bash
   touch .env
   ```

3. Add your OpenAI API key to the `.env` file:

   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

> 🔑 **How to Get Your OpenAI API Key**  
> - Go to the [OpenAI Platform](https://platform.openai.com/account/api-keys)  
> - Log in or sign up  
> - Create a new API key  
> - Paste it into your `.env` file

> ⚠️ **Security Note**: Never commit your `.env` file or API key to GitHub or public repos.

---

## 🏃‍♂️ Running the Application

You need to run both the backend and frontend servers simultaneously.

### ✅ Manual Start (Recommended for Development)

**Terminal 1 – Start Backend:**

```bash
cd backend
node index.js
```

> Backend runs at: [http://localhost:3001](http://localhost:3001)

**Terminal 2 – Start Frontend:**

```bash
cd frontend
npm start
```

> Frontend runs at: [http://localhost:3000](http://localhost:3000)

---

## 🌐 Usage

1. Open your browser at [http://localhost:3000](http://localhost:3000)
2. Type a message in the input field
3. Press Enter or click "Send"
4. Chat with your AI assistant!

---

## 📁 Project Structure

```
chatbot-project/
├── backend/
│   ├── index.js          # Express server & OpenAI integration
│   ├── .env              # Your API key (not committed)
│   ├── .env.example      # Template for environment variables
│   └── package.json      # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── App.js        # Main React component
│   │   ├── App.css       # Styling
│   │   └── index.js      # React entry point
│   ├── public/
│   └── package.json      # Frontend dependencies
├── README.md             # Project documentation
└── .gitignore            # Files to be ignored by Git
```

---

## ✅ Final Notes

- Ensure `.env` is correctly set up with your OpenAI API key before running.
- If you encounter Git issues like nested repos, make sure to delete any inner `.git/` directories created by tools like Create React App:

  ```bash
  rm -rf frontend/.git
  ```

Happy building! 🚀
