# ORM-MAT Backend

This repository contains the backend code for the ORM-MAT (Online Restaurant Management) project. The backend is responsible for handling API requests related to managing products, orders, users, and more.

## API Base URL

The API base URL for accessing the ORM-MAT backend is: `https://orm-mat-be.onrender.com/api`

## Endpoints

- `/products`: Endpoint for managing products. Use query parameters for pagination (`page`) and search (`search`).
- `/orders`: Endpoint for managing orders.
- `/users`: Endpoint for managing users.
- `/auth`: Endpoint for user authentication and authorization.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT) for authentication
- Stripe for payment processing
- Multer for handling file uploads
- CORS for enabling cross-origin resource sharing

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd ORM-MAT-Backend`
3. Install dependencies: `npm install`
4. Set up environment variables:
   - Create a `.env` file in the root directory
   - Define the following environment variables:
     ```
     PORT=5000
     MONGO_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     STRIPE_SECRET_KEY=<your-stripe-secret-key>
     ```
5. Start the server: `npm start`
6. The server should now be running on [http://localhost:9000](http://localhost:9000)

## Frontend Repository

This backend repository interacts with a frontend application for managing restaurant operations. The frontend code is available in the following repository:

[ORM-MAT Frontend Repository](https://github.com/mathiyazhagan-d/ORM-MAT-FE1)

Ensure that the frontend application is configured to communicate with this backend server.

