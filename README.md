<div align="center">

# CodeScribe

**AI-powered code review, built for teams.**

CodeScribe reviews every submission for bugs, security risks, performance issues, and quality concerns — combining a generative AI review with deterministic static analysis, backed by persistent review history.

<br/>

<a href="https://code-scribe-ashen.vercel.app"> <img src="https://img.shields.io/badge/🚀%20Live%20Demo-CodeScribe-blue?style=for-the-badge" alt="Live Demo"/> </a> &nbsp; <a href="https://codescribe-d8ad.onrender.com"> <img src="https://img.shields.io/badge/⚙️%20Backend%20API-Render-purple?style=for-the-badge" alt="Backend API"/> </a> &nbsp; <a href="https://github.com/Vaibhvee012/CodeScribe"> <img src="https://img.shields.io/badge/💻%20GitHub-Repository-black?style=for-the-badge&logo=github" alt="GitHub"/> </a>

<br/><br/>

</div>

---

## 🔑 Demo Credentials

Use the following test accounts to explore the application:

| Email                 | Password   |
| --------------------- | ---------- |
| `rajesh@testuser.com` | `test123!` |
| `tanya@testuser.com`  | `test123!` |

> **Note:** These are demo/test accounts created specifically for evaluating CodeScribe.

---

## Overview

---

## Overview

CodeScribe is a full-stack AI-powered code review application designed to provide developers with fast, actionable feedback on their code.

Each submitted code snippet passes through **two independent analysis layers**:

### 1. AI-Powered Review

Google Gemini analyzes the submitted code and provides:

* Overall code quality score
* Performance analysis
* Security analysis
* Readability assessment
* Key issues and recommendations
* Suggested improvements
* Improved/re-written code

### 2. Static Code Analysis

For JavaScript and TypeScript, CodeScribe also performs deterministic analysis using ESLint.

This identifies objective issues such as:

* Unused variables
* Unreachable code
* Loose equality
* Rule violations
* Other code-quality problems

The two analysis layers work independently, allowing users to compare **AI-generated insights with deterministic static-analysis results**.

All reviews are stored in MongoDB and associated with the authenticated user, providing persistent review history and detailed review pages.

---

## Features

| Feature                   | Description                                                                               |
| ------------------------- | ----------------------------------------------------------------------------------------- |
| 🤖 **AI Code Review**     | Analyze code using Google Gemini with scores, metrics, recommendations, and improved code |
| 🔍 **Static Analysis**    | Deterministic ESLint analysis for JavaScript and TypeScript                               |
| 🔐 **Authentication**     | Secure JWT-based registration and login                                                   |
| 👤 **User Profiles**      | Update username and profile information                                                   |
| 📊 **Review History**     | Store and retrieve previous code reviews                                                  |
| 📝 **Detailed Reviews**   | View complete analysis results for each submission                                        |
| 🌓 **Theme Toggle**       | Light and dark mode support                                                               |
| ⚡ **Parallel Analysis**   | AI review and static analysis run independently                                           |
| 💾 **Persistent Storage** | Review data stored in MongoDB                                                             |

---

## Live Application

### Frontend

**Live Application:**
https://code-scribe-ashen.vercel.app

### Backend

**Backend API:**
https://codescribe-d8ad.onrender.com

### Source Code

**GitHub Repository:**
https://github.com/Vaibhvee012/CodeScribe

---

## Tech Stack

| Layer               | Technologies                                                               |
| ------------------- | -------------------------------------------------------------------------- |
| **Frontend**        | React 19, Vite, React Router, Tailwind CSS, Monaco Editor, Recharts, Axios |
| **Backend**         | Node.js, Express 5, MongoDB, Mongoose                                      |
| **Authentication**  | JWT, bcryptjs                                                              |
| **Validation**      | Zod                                                                        |
| **AI**              | Google Gemini, `@google/genai`                                             |
| **Static Analysis** | ESLint `Linter` API, `@typescript-eslint/parser`                           |
| **Deployment**      | Vercel, Render                                                             |
| **Version Control** | Git, GitHub                                                                |

---

## Architecture

```text
                         ┌──────────────────────┐
                         │      CodeScribe      │
                         │    React Frontend    │
                         └──────────┬───────────┘
                                    │
                                    │ HTTP / Axios
                                    ▼
                         ┌──────────────────────┐
                         │    Express Backend   │
                         │       Node.js        │
                         └──────────┬───────────┘
                                    │
                     ┌──────────────┴──────────────┐
                     │                             │
                     ▼                             ▼
            ┌─────────────────┐          ┌─────────────────┐
            │   AI Analysis   │          │ Static Analysis │
            │  Google Gemini  │          │     ESLint      │
            └────────┬────────┘          └────────┬────────┘
                     │                            │
                     └──────────────┬─────────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │      MongoDB         │
                         │ Users + Review Data  │
                         └──────────────────────┘
```

---

## Frontend Architecture

The frontend follows a **4-layer separation of concerns**, keeping UI, state management, business logic, and network communication independently organized.

| Layer        | Location                | Responsibility                            |
| ------------ | ----------------------- | ----------------------------------------- |
| **UI**       | `components/`, `pages/` | Presentation and user interaction         |
| **Hooks**    | `hooks/`                | React state and application orchestration |
| **Services** | `services/`             | Business logic and session management     |
| **API**      | `api/`                  | Axios requests to the backend             |

### Data Flow

```text
UI
 ↓
Hooks
 ↓
Services
 ↓
API
 ↓
Backend
```

Each layer communicates primarily with the layer directly beneath it, improving maintainability and making individual parts easier to test or replace.

---

## Project Structure

```text
CodeScribe/
│
├── Backend/
│   ├── server.js
│   └── src/
│       ├── config/
│       │   └── Database connection
│       │
│       ├── controllers/
│       │   └── Route handlers
│       │
│       ├── middleware/
│       │   └── Authentication middleware
│       │
│       ├── models/
│       │   ├── User
│       │   └── Review
│       │
│       ├── routes/
│       │   └── Express routes
│       │
│       └── services/
│           ├── AI analysis
│           ├── Static analysis
│           ├── Authentication
│           └── Business logic
│
└── Frontend/
    └── src/
        ├── api/
        │   └── Axios API layer
        │
        ├── components/
        │   └── Reusable UI components
        │
        ├── hooks/
        │   └── Custom React hooks
        │
        ├── pages/
        │   └── Application pages
        │
        └── services/
            └── Client-side services
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js 18+
* npm
* MongoDB / MongoDB Atlas
* Google Gemini API key
* Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/Vaibhvee012/CodeScribe.git
cd CodeScribe
```

---

### 2. Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend/` directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
CLIENT_URL=http://localhost:5173
```

Start the development server:

```bash
npm run dev
```

The backend will run at:

```text
http://localhost:3000
```

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd Frontend
npm install
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

For local development, configure the frontend API URL to point to:

```text
http://localhost:3000
```

For production, the frontend is configured to communicate with the deployed Render backend.

---

## Environment Variables

### Backend

| Variable         | Description                     |
| ---------------- | ------------------------------- |
| `PORT`           | Port used by the Express server |
| `MONGO_URI`      | MongoDB connection string       |
| `JWT_SECRET`     | Secret used to sign JWT tokens  |
| `GEMINI_API_KEY` | Google Gemini API key           |
| `CLIENT_URL`     | Frontend URL allowed by CORS    |

### Frontend

| Variable       | Description                 |
| -------------- | --------------------------- |
| `VITE_API_URL` | Base URL of the backend API |

Example:

```env
VITE_API_URL=https://codescribe-d8ad.onrender.com
```

> **Security:** Never commit `.env` files or API keys to GitHub.

---

## Available Scripts

### Backend

Run from `Backend/`:

| Command       | Description                 |
| ------------- | --------------------------- |
| `npm run dev` | Start backend with Nodemon  |
| `npm start`   | Start backend in production |

### Frontend

Run from `Frontend/`:

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Start Vite development server |
| `npm run build`   | Create production build       |
| `npm run preview` | Preview production build      |
| `npm run lint`    | Run ESLint                    |

---

## API Reference

### Authentication

| Method  | Endpoint             | Auth | Description         |
| ------- | -------------------- | ---- | ------------------- |
| `POST`  | `/api/auth/register` | No   | Register a new user |
| `POST`  | `/api/auth/login`    | No   | Authenticate a user |
| `GET`   | `/api/auth/me`       | Yes  | Get current user    |
| `PATCH` | `/api/auth/profile`  | Yes  | Update user profile |

### Code Review

| Method | Endpoint                   | Auth | Description              |
| ------ | -------------------------- | ---- | ------------------------ |
| `POST` | `/api/code-review`         | Yes  | Submit code for analysis |
| `GET`  | `/api/code-review/history` | Yes  | Retrieve review history  |

### Health

| Method | Endpoint      | Auth | Description          |
| ------ | ------------- | ---- | -------------------- |
| `GET`  | `/api/health` | No   | Check backend health |

---

## Review Workflow

When a user submits code:

```text
User submits code
       │
       ▼
Authentication check
       │
       ▼
Express API
       │
       ├───────────────┐
       ▼               ▼
Google Gemini       ESLint
       │               │
       ▼               ▼
AI Review          Static Results
       │               │
       └───────┬───────┘
               ▼
        Combined Review
               │
               ▼
          MongoDB Storage
               │
               ▼
        Results displayed
          to the user
```

This architecture allows CodeScribe to combine **AI-powered reasoning** with **deterministic code analysis** rather than relying exclusively on an AI model.

---

## Deployment

CodeScribe is deployed using:

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas
* **Source Control:** GitHub

### Production URLs

**Frontend:**
https://code-scribe-ashen.vercel.app

**Backend:**
https://codescribe-d8ad.onrender.com

---

## Roadmap

* [x] Project Setup & Architecture
* [x] Landing Page & UI Foundation
* [x] Code Review Interface
* [x] Backend & AI Integration
* [x] AI Review Engine
* [x] Authentication & Review History
* [x] Static Code Analysis
* [x] Testing, Polish & Deployment

### Future Improvements

* [ ] Support for additional programming languages
* [ ] More static-analysis engines
* [ ] Pull Request / GitHub integration
* [ ] Team-based code reviews
* [ ] Review comparison and analytics
* [ ] AI review customization
* [ ] CI/CD integration
* [ ] Automated code-quality reports

---

## Why CodeScribe?

CodeScribe is designed around a simple idea:

> **AI can provide intelligent reasoning, while static analysis provides deterministic verification.**

By combining both approaches, developers receive broader and more actionable feedback than they would from either approach alone.

---

## License

No license has currently been specified for this project.

If you intend to open-source CodeScribe, consider adding an appropriate `LICENSE` file.

---

## Author

**Vaibhvee Prakash**

Computer Science Engineering — Cloud Computing & Automation

[GitHub](https://github.com/Vaibhvee012)
