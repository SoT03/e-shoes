# E-shop
E-Shop is a comprehensive full-stack project designed to streamline the management of your shop through an intuitive and user-friendly dashboard. This application enables shop owners to handle various aspects of their business efficiently, including inventory management, order processing, and sales tracking.
## Technologies used
<p align="left"><img src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Next js" width="40" height="40"/>
  <img src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="Type Script" width="40" height="40"/>
  <img src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind" width="40" height="40"/> </p>
  
## Also used
Database: Supabase with prismadb package
Payments: Stripe

## How to run
1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

3.Add your admin env file
```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL='' 


NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

STRIPE_API_KEY = 
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```
4.Add your shop env file
```js
NEXT_PUBLIC_API_URL=http://localhost:3000/api/{id of your shop}
```
5. Start you admin folder then your shop folder
 ```sh
   npm run dev
   ```





6.You need to configure stripe for payments by adding listener for localhost https://stripe.com/en-pl

