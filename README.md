# 🚀 Product Forage AI

> **An AI-powered full-stack web application that generates professional, engaging, and marketing-ready product descriptions for e-commerce businesses using Large Language Models (LLMs).**

---

## 📖 Overview

Product Forage AI is a full-stack AI application built to simplify product content creation for e-commerce sellers. The application leverages AI to generate compelling product descriptions from basic product information such as product name, ingredients, weight, features, and preferred writing tone.

It combines a modern React frontend, an Express.js backend, MongoDB for data storage, and Groq's Large Language Model (LLM) to deliver fast and accurate AI-generated content.

---

## 🎯 Problem Statement

Writing high-quality product descriptions manually is time-consuming and requires strong marketing skills. Many online sellers struggle to create engaging descriptions that improve customer interest and sales.

**Product Forage AI automates this process by generating professional product descriptions within seconds, helping businesses save time and maintain consistency across their product listings.**

---

# ✨ Features

- 🤖 AI-powered product description generation
- 📝 Generate unique and marketing-friendly descriptions
- 🎨 Multiple writing tones
  - Premium
  - Traditional
  - Health-Focused
- ⚡ Fast AI response generation
- 💾 MongoDB database integration
- 📱 Responsive user interface
- 🔒 Secure API key management using environment variables
- ❌ Error handling and loading states
- 🔄 RESTful API architecture

---

# 🏗️ System Architecture

```text
                    User
                      │
                      ▼
          React + Tailwind CSS Frontend
                      │
                REST API (Express)
                      │
                      ▼
              AI Processing Layer
                      │
                      ▼
                 Groq LLM API
                      │
                      ▼
               MongoDB Atlas
```

---

# 🔄 Application Workflow

1. User enters product information.
2. React frontend validates the input.
3. Product details are sent to the Express backend.
4. Backend forwards the request to the Groq AI API.
5. AI generates a professional product description.
6. Generated content is returned to the frontend.
7. Product information and generated description are stored in MongoDB.
8. The generated description is displayed to the user.

---

# 🛠️ Technology Stack

## Frontend
- React.js
- Tailwind CSS
- JavaScript (ES6+)
- React Router

## Backend
- Node.js
- Express.js
- REST API

## Database
- MongoDB Atlas
- Mongoose

## Artificial Intelligence
- Groq API
- Large Language Model (LLM)

## Development Tools
- Git & GitHub
- Vite
- Postman
- VS Code

---

# 📂 Project Structure

```text
Product-Forage-AI/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── screenshots/
│   ├── home.png
│   ├── input.png
│   ├── loading.png
│   └── output.png
│
├── README.md
└── .gitignore
```

---

# 📸 Screenshots

## 🏠 Home Page

![Home Page](screenshots_home.jpeg)

---

## ✍️ Product Input Form

![Product Input Form](screenshots_input.png)

---

## ⏳ AI Generation

![Loading](screenshots_output.png)

---

## 🤖 Generated Product Description

![Generated Output](screenshots_output.png)

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/your-username/Product-Forage-AI.git
```

Navigate to the project directory:

```bash
cd Product-Forage-AI
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Backend Setup

```bash
cd backend
npm install
npm start
```

---

## Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
```

---

# 🔌 API Documentation

## Generate Product Description

### Endpoint

```http
POST /api/ai/generate-description
```

### Sample Request

```json
{
  "productName": "Organic Honey",
  "ingredients": "Natural Honey",
  "weight": "500g",
  "features": "Pure and Healthy",
  "tone": "Premium"
}
```

### Sample Response

```json
{
  "description": "Experience the richness of premium organic honey with its pure taste and natural goodness..."
}
```

---

# 🧠 Challenges & Solutions

### AI Integration

**Challenge:** Integrating AI with the backend while ensuring secure API communication.

**Solution:** Used environment variables to securely manage API keys and implemented asynchronous API requests.

---

### Error Handling

**Challenge:** Managing delays and unexpected API failures.

**Solution:** Added loading indicators, input validation, and graceful error handling for a smooth user experience.

---

### Database Integration

**Challenge:** Persisting generated descriptions efficiently.

**Solution:** Connected MongoDB Atlas using Mongoose to store product details and generated content.

---

# 👨‍💻 My Contributions

- Designed and developed the responsive frontend using React and Tailwind CSS.
- Built RESTful backend APIs with Node.js and Express.js.
- Integrated Groq AI API for intelligent product description generation.
- Connected MongoDB Atlas for persistent data storage.
- Implemented loading states, validation, and error handling.
- Managed version control using Git and GitHub.

---

# 🎓 Skills Demonstrated

- Full-Stack Web Development
- Artificial Intelligence Integration
- REST API Development
- React.js Development
- Node.js & Express.js
- MongoDB Database Management
- Prompt Engineering
- API Integration
- Responsive UI Design
- Problem Solving

---

# 👩‍💻 Developer

**Vanshika Ahuja**

- GitHub: https://github.com/vanshikaahuja012-wq

---
