# TekRise Test - Backend API

A robust, production-ready RESTful API built with Node.js, Express, and TypeScript for managing a service booking marketplace.

## 🚀 Features

- **Authentication**: Secure JWT-based authentication with password hashing (bcryptjs).
- **Service Management**: Full CRUD capabilities for services with ownership protection.
- **Booking System**: End-to-end booking workflow (Pending, Confirmed, Cancelled).
- **Architecture**: Clean **Model-Service-Controller-Route** pattern for maximum maintainability.
- **Security**: CORS enabled, environment variable protection, and centralized error handling.
- **Logging**: Request logging using Morgan (development mode).

## 🛠 Tech Stack

- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (Mongoose ODM)
- **Auth**: JSON Web Tokens (JWT)
- **Utilities**: Bcryptjs, Dotenv, Morgan

## 📂 Project Structure

```text
src/
├── config/       # Database and environment configurations
├── controllers/  # Request handlers (HTTP logic)
├── interfaces/   # TypeScript types and interfaces
├── middleware/   # Auth and Error handling logic
├── models/       # Mongoose schemas and data definitions
├── routes/       # API endpoint definitions
├── services/     # Business logic and DB interactions
└── utils/        # Helper functions (AsyncHandler, JWT)
```

## 🚥 API Endpoints

### Auth
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| POST | `/api/auth/register` | Register a new user | Public |
| POST | `/api/auth/login` | Login and get token | Public |

### Services
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| GET | `/api/services` | Get all available services | Public |
| POST | `/api/services` | Create a new service | Private |
| DELETE | `/api/services/:id` | Delete own service | Private |

### Bookings
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| GET | `/api/bookings` | Get user's bookings | Private |
| POST | `/api/bookings` | Book a service | Private |
| PATCH | `/api/bookings/:id` | Update booking status | Private |

## 🧠 Problem Solving Challenges

This project includes a standalone script that solves three key algorithmic problems requested in the technical assessment. These solutions are implemented in `src/problemSolving.ts` with detailed logging.

### Solved Problems:
1. **Array Pair Sum**: Finds indices of two numbers adding up to a target (O(n) complexity).
2. **String Compression**: Compresses strings based on repeated characters (e.g., "aaabbc" -> "a3b2c1").
3. **Flatten Nested Array**: Recursively flattens any level of nested arrays into a single-level array.

### How to Run:
You can run these solutions independently of the API server:
```bash
npm run problems
```

## ⚙️ Setup & Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment**:
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   ```

3. **Run Application**:
   ```bash
   # Development mode
   npm run dev

   # Build for production
   npm run build

   # Start production server
   npm start
   ```
