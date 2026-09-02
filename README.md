<div align="center">

# CodeScribe

**AI-powered code review, built for teams.**

CodeScribe reviews every submission for bugs, security risks, performance issues, and quality concerns — combining a generative AI review with deterministic static analysis, backed by persistent review history.

</div>

## Overview

CodeScribe takes a code snippet and runs it through two independent review layers in parallel:

1. **AI Review** — Google Gemini analyzes the code for logic issues, security risks, and quality concerns, returning a score, key metrics, a list of changes, and a recommended/improved rewrite.
2. **Static Analysis** — a deterministic ESLint pass (JavaScript & TypeScript) flags objective issues — unused variables, unreachable code, loose equality, and other rule-based violations — independent of the AI's judgment.

Every review is persisted to MongoDB and tied to the submitting user, with a full history and detail view available afterward.

## Features

| Feature | Description |
|---|---|
| AI Code Review | Score, metrics, suggested changes, and a rewritten version of submitted code, powered by Gemini |
| Static Analysis | Rule-based ESLint checks for JS/TypeScript, run alongside the AI review |
| Authentication | JWT-based register/login flow |
| User Profiles | Editable username and bio, persisted to MongoDB |
| Review History | Every review saved and retrievable, with full detail on request |
| Theme Toggle | Light and dark mode |

## Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 19, Vite, React Router, Tailwind CSS, Monaco Editor, Recharts, Axios |
| **Backend** | Node.js, Express 5, MongoDB, Mongoose, JWT, bcryptjs, Zod |
| **AI / Analysis** | Google Gemini (`@google/genai`), ESLint `Linter` API, `@typescript-eslint/parser` |

## Project Structure

```
PROJECT CodeScribe/
├── Backend/
│   ├── server.js              # Entry point
│   └── src/
│       ├── config/            # Database connection
│       ├── controllers/       # Route handlers
│       ├── middleware/        # Auth middleware
│       ├── models/            # Mongoose schemas (User, Review)
│       ├── routes/            # Express route definitions
│       └── services/          # Business logic (AI, static analysis, auth)
│
└── Frontend/
    └── src/
        ├── api/                # Axios request layer
        ├── components/         # Reusable UI components
        ├── hooks/              # Custom hooks (e.g. useCodeReview)
        ├── pages/               # Route-level pages
        └── services/            # Client-side auth/session helpers
```

### Frontend Architecture

The frontend follows a 4-layer separation of concerns, keeping UI, state, business logic, and network access independently testable and swappable:

| Layer | Location | Responsibility |
|---|---|---|
| **UI** | `components/`, `pages/` | Presentation only — renders markup and delegates all logic to hooks |
| **Hook** | `hooks/` | React state and orchestration (e.g. `useCodeReview` manages form state, loading, and triggers reviews) |
| **Service** | `services/` | Business logic — session handling, response shaping, and coordination above the raw API layer |
| **API** | `api/` | Raw HTTP calls (Axios) to the backend — no business logic, just request/response |

Data flows one direction: **UI → Hook → Service → API**, with each layer only aware of the one directly beneath it.

## Getting Started

### Prerequisites

- Node.js 18+
- A MongoDB instance (local or MongoDB Atlas)
- A Gemini API key

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd "PROJECT CodeScribe"
```

### 2. Backend setup

```bash
cd Backend
npm install
```

Create a `.env` file in `Backend/`:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

Start the API:

```bash
npm run dev
```

The server runs on `http://localhost:3000` by default.

### 3. Frontend setup

```bash
cd Frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` by default (Vite), and is currently configured to call the backend at `http://localhost:3000`.

> **Note:** the API base URL is currently hardcoded in `Frontend/src/api/auth.api.js` and `Frontend/src/api/codeReview.api.js`. If you change the backend port or deploy the API elsewhere, update those two files (or migrate to a `VITE_API_URL` environment variable) accordingly.

## Available Scripts

**Backend** (`Backend/`)

| Command | Description |
|---|---|
| `npm run dev` | Start the API with nodemon (auto-restart on file changes) |

**Frontend** (`Frontend/`)

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on the frontend source |

## API Reference

| Method | Endpoint | Auth Required | Description |
|---|---|---|---|
| `GET` | `/api/health` | No | Health check |
| `POST` | `/api/auth/register` | No | Register a new user |
| `POST` | `/api/auth/login` | No | Log in and receive a JWT |
| `GET` | `/api/auth/me` | Yes | Get the current user's profile |
| `PATCH` | `/api/auth/profile` | Yes | Update username / about |
| `POST` | `/api/code-review` | Yes | Submit code for AI + static analysis review |
| `GET` | `/api/code-review/history` | Yes | Get the current user's review history |

## Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Port the backend server listens on (defaults to `3000`) |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret used to sign JWTs |
| `GEMINI_API_KEY` | API key for Google Gemini |

`.env` files are gitignored and should never be committed.

## Roadmap

- [x] Phase 1 — Project Setup & Architecture
- [x] Phase 2 — Landing Page & UI Foundation
- [x] Phase 3 — Code Review Interface
- [x] Phase 4 — Backend & AI Integration
- [x] Phase 5 — AI Review Engine
- [x] Phase 6 — Authentication & Review History
- [x] Phase 7 — Static Code Analysis
- [x] Phase 8 — Testing, Polish & Deployment

## License
<<<<<<< HEAD

No license specified yet. Add a `LICENSE` file if you intend to open-source this project.
=======
 
No license specified yet. Add a `LICENSE` file if you intend to open-source this project.
>>>>>>> f920206ff7db32e7ef59338b02b13a3e7a2916ae
