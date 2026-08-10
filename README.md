# Product-Forage-AI

AI-powered product description generator for e-commerce sellers.

## Live Demo
https://product-forage-ai-mu.vercel.app/

## Screenshots

### Home Page

![Home Page](screenshots_home.png)

### Login Page

![Login Page](screenshots_login.png)

### Register Page
![Register Page](screenshots_register.png)

### AI Description Generator


### Input
![AI Generator](screenshots_input.png)

### AI Generated Description 
=======
### AI Description 
![AI Generator](screenshots_ai.png)


### Dashboard

![Dashboard](screenshots_output.png)


## ✨ Features

- 🤖 AI-powered product description generation
- ✍️ Multiple writing tones
  - Premium
  - Traditional
  - Health-Focused
- 🔐 Email and password authentication
- 🔵 Google Sign-In / Sign-Up
- 🔑 JWT-based authentication
- 📦 Product CRUD operations
- 🔍 Product search
- 🗄️ MongoDB data storage
- 📋 Copy generated descriptions
- 📄 PDF export
- 🗑️ Delete saved products
- 📱 Responsive user interface
- ☁️ Cloud deployment

## 🎯 Problem Statement

Creating high-quality product descriptions for e-commerce platforms can be time-consuming.

Small businesses and online sellers often need to create descriptions for multiple products while maintaining a consistent tone and professional quality.

Product Forage AI solves this problem by automatically generating product descriptions from basic product information.

## 💡 Solution

Product Forage AI allows users to:

1. Create an account or sign in with Google.
2. Enter product information.
3. Select a preferred writing tone.
4. Generate an AI-powered product description.
5. Copy or download the generated description.
6. Save products to their dashboard.
7. Search and manage saved products.

## 🔄 How It Works

text
User enters product details
          ↓
Selects writing tone
          ↓
React Frontend
          ↓
Express.js Backend
          ↓
Groq API
          ↓
AI generates description
          ↓
MongoDB Database
          ↓
Copy / Download / Manage
🛠️ Tech Stack
Frontend
React.js
Tailwind CSS
JavaScript
Backend
Node.js
Express.js
Passport.js
JWT
Database
MongoDB Atlas
Mongoose
AI
Groq API
Llama 3.1
Authentication
Email/Password Authentication
Google Identity Services
JWT Authentication
Deployment
Vercel - Frontend
Render - Backend
MongoDB Atlas - Database
🖥️ Application Pages
🏠 Home Page

Landing page introducing Product Forage AI and its main features.

🔐 Login Page

Users can log in using:

Email and password
Google Sign-In
📝 Register Page

New users can create an account using their name, email, and password.

🤖 AI Description Generator

Users enter product information and generate an AI-powered product description.

📊 Dashboard

Users can view and manage their previously generated product descriptions.

🧪 Example
Product Input
{
  "productName": "Organic Cookies",
  "ingredients": "Whole wheat, oats, honey",
  "weight": "500g",
  "features": "No preservatives, high fiber",
  "tone": "Premium"
}
Generated Description
Indulge in the wholesome goodness of our Premium Organic Cookies,
crafted with carefully selected ingredients.

Made with whole wheat, oats, and natural honey, these delicious
cookies offer a satisfying combination of taste and nutrition.

Perfect for everyday snacking, these cookies provide a delicious
and wholesome choice for customers.
🔌 API Documentation
Generate Product Description

POST

/api/generate-description
Request
{
  "productName": "Organic Cookies",
  "ingredients": "Whole wheat, oats, honey",
  "weight": "500g",
  "features": "No preservatives, high fiber",
  "tone": "Premium"
}
Response
{
  "message": "AI description generated successfully",
  "description": "AI generated product description"
}
🔐 Authentication API
Register
POST /api/auth/register
Login
POST /api/auth/login
Google Authentication
POST /api/auth/google
🔵 Google Authentication

Product Forage AI supports Google Sign-In and Sign-Up using Google Identity Services.

Authentication Flow
User clicks "Continue with Google"
              ↓
        Google Login
              ↓
       Google ID Token
              ↓
        React Frontend
              ↓
       Express Backend
              ↓
     Verify Google Token
              ↓
        MongoDB User
              ↓
        Generate JWT
              ↓
           Login

The backend verifies the Google credential before authenticating the user.

🗄️ Database

MongoDB Atlas is used to store:

User accounts
Product information
Generated descriptions
Product metadata

Mongoose is used as the MongoDB ODM.

🤖 AI Generation

Product Forage AI uses the Groq API to generate product descriptions.

The AI receives information such as:

Product name
Ingredients
Weight
Features
Tone

The system then generates a professional e-commerce description based on the provided information.

📁 Project Structure
Product-Forage-AI/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── passport.js
│   ├── middleware/
│   │   └── verifyToken.js
│   ├── models/
│   │   ├── Task.js
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── screenshots_home.png
├── screenshots_login.png
├── screenshots_register.png
├── screenshots_input.png
├── screenshots_output.png
├── screenshot_4.jpeg
├── PROMPTS.md
├── README.md
└── .gitignore
🚀 Installation & Setup
1. Clone Repository
git clone https://github.com/vanshikaahuja012-wq/Product-Forage-AI.git

Navigate into the project:

cd Product-Forage-AI
💻 Frontend Setup

Navigate to the frontend directory:

cd frontend

Install dependencies:

npm install

Start the development server:

npm start

The frontend will run at:

http://localhost:3000
⚙️ Backend Setup

Open another terminal.

Navigate to the backend:

cd backend

Install dependencies:

npm install

Start the server:

npm start

The backend will run at:

http://localhost:5000
🔑 Environment Variables

Create environment files locally.

⚠️ Never upload .env files or API keys to GitHub.

Frontend

Create:

frontend/.env

Add:

REACT_APP_API_URL=http://localhost:5000
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
Backend

Create:

backend/.env

Add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SESSION_SECRET=your_session_secret
GROQ_API_KEY=your_groq_api_key
CLIENT_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
☁️ Deployment
Frontend

The frontend is deployed using Vercel.

Live URL:

https://product-forage-ai-mu.vercel.app/


Backend

The backend is deployed using Render.

Database

The database is hosted using MongoDB Atlas.

⚠️ Known Limitations
Free Render instances may sleep after periods of inactivity.
AI generation depends on Groq API availability and usage limits.
Google authentication requires correctly configured OAuth credentials.
The current version has limited customization options.
Internet connectivity is required for cloud-based features.
AI-generated content should be reviewed before commercial publishing.
🔮 Future Improvements
📊 Analytics dashboard
🌍 Multi-language product descriptions
🧠 Additional AI writing styles
🖼️ AI-generated product images
📤 Bulk product description generation
📥 CSV/Excel product import
🔎 Advanced filtering and sorting
📈 SEO scoring for generated descriptions
👥 Team collaboration
📱 Progressive Web App support
🧾 Improved PDF templates
📈 Project Highlights
Full-stack AI-powered web application
REST API architecture
JWT authentication
Google OAuth integration
MongoDB CRUD operations
AI API integration
Responsive frontend design
Cloud deployment
Production environment configuration
🎓 Internship Project

This project was developed as part of the:

TBI-GEU Summer Internship Program 2026

The project demonstrates practical experience in:

Full-stack web development
AI API integration
Authentication
Database management
REST API development
Cloud deployment
🤖 AI Assistance

AI technologies and development tools used in this project include:

Groq API - AI-powered product description generation
ChatGPT - Development assistance, debugging, documentation, and implementation guidance
👩‍💻 Developer

Vanshika Ahuja

B.Tech Computer Science Engineering
Specialization: Artificial Intelligence & Machine Learning

📄 License

This project was developed for educational and internship purposes.
