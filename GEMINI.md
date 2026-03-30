# TekRise Test - Server

## Project Overview
This is the backend server for the TekRise Test application. It is built with Node.js, Express, and TypeScript. It follows a modular architecture: **Model -> Service -> Controller -> Route**.

## Tech Stack
- **Node.js & Express** (v18+)
- **TypeScript**
- **MongoDB & Mongoose**
- **JWT** (JSON Web Token) for authentication
- **bcryptjs** for password hashing
- **morgan** for request logging
- **dotenv** for environment variables
- **nodemon** for development

## Architecture
1. **Models**: Defines the Mongoose schemas and interfaces.
2. **Services**: Contains the business logic and database interactions.
3. **Controllers**: Handles incoming requests, calls services, and sends responses.
4. **Routes**: Defines the API endpoints and connects them to controllers.
5. **Middleware**: Contains reusable functions like authentication, error handling, and validation.
6. **Config**: Database connection and environment variable configurations.
7. **Interfaces**: TypeScript interfaces for data structures.
8. **Utils**: Utility functions.

## Features
- **Authentication**: Register and Login with JWT.
- **Service Management**: Create, Get, and Delete services.
- **Booking Management**: Book a service, view user bookings, and update booking status.
- **Centralized Error Handling**: A middleware that catches all errors and returns a consistent response format.

## Implementation Details
### 1. Authentication
- Register: Validates input, hashes password, saves user.
- Login: Validates credentials, generates JWT.
- Middleware: Protects routes by verifying JWT in the `Authorization` header.

### 2. Service Booking
- Services belong to users (`createdBy`).
- Bookings link users to services with a status (`pending`, `confirmed`, `cancelled`).

### 3. Error Handling
- All routes are wrapped in a `try-catch` block (using an `asyncHandler` wrapper if preferred) and errors are passed to the global error handler middleware.

## Setup
1. `npm install`
2. Create `.env` from `.env.example`.
3. `npm run dev` to start in development mode.
