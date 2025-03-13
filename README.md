# E-Shoes Backend

## Overview
E-Shoes is an e-commerce backend built using modern technologies to provide a seamless experience for managing products, users, and transactions. This repository serves as the backend for the E-Shoes application.

## Features
- User authentication and authorization via Clerk
- Database management with PostgreSQL (hosted on Supabase)
- Cloud-based media storage with Cloudinary
- Payment processing via Stripe

## Environment Variables
To run this project, you need to set up the following environment variables:

### Clerk Authentication
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### Database Configuration
```
DATABASE_URL='your_database_url'
DIRECT_URL='your_direct_database_url'
```

### Cloudinary Configuration
```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
```

### Stripe Payment Gateway
```
STRIPE_API_KEY=your_stripe_api_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### Frontend Configuration
```
FRONTEND_STORE_URL=http://localhost:3001
NEXT_PUBLIC_API_URL=http://localhost:3000/api/your_backend_api_key
```

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/SoT03/e-shoes.git
   ```
2. Navigate to the backend directory:
   ```sh
   cd e-shoes
   ```
3. Install dependencies for both frontend and backend:
   ```sh
   npm install
   ```
4. Set up your `.env` file with the required environment variables.
5. Run the backend:
   ```sh
   npm run dev
   ```
6. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
7. Install frontend dependencies:
   ```sh
   npm install
   ```
8. Run the frontend:
   ```sh
   npm run dev
   ```




