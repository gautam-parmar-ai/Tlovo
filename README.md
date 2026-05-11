# Tlovo 🍕

A full-stack food delivery web application built with the MERN stack, featuring a customer-facing storefront, an admin dashboard, and a REST API backend with Stripe payment integration.

## Live Demo

- **Frontend:** [tlovo.vercel.app](https://tlovo.vercel.app)

---

## Features

### Customer Storefront
- Browse food items by category
- Add/remove items from cart
- User authentication (register/login)
- Checkout with delivery information
- Stripe payment integration
- Order history page

### Admin Dashboard
- Add new food items with image uploads (Cloudinary)
- View and manage all food listings
- View and manage all orders
- Update order status (Food Processing, Out for Delivery, Delivered)

---

## Tech Stack

**Frontend & Admin**
- React.js
- React Router DOM
- CSS
- Axios
- React Toastify
- Vite

**Backend**
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JSON Web Tokens (JWT)
- Bcrypt
- Stripe
- Cloudinary (image uploads)
- Multer

---

## Project Structure

```
Tlovo/
├── frontend/   # Customer-facing React app
├── admin/      # Admin panel React app
└── backend/    # Express REST API
```

---

## Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas account
- Stripe account
- Cloudinary account

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/gautam-parmar-ai/Tlovo.git
cd Tlovo
```

**2. Install dependencies for each app**
```bash
# Backend
cd backend && npm install

# Frontend
cd ../frontend && npm install

# Admin
cd ../admin && npm install
```

**3. Set up environment variables**

Create a `.env` file in the `backend` folder:
```env
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:5173
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
```

Create a `.env` file in the `frontend` folder:
```env
VITE_BACKEND_URL=http://localhost:4000
```

Create a `.env` file in the `admin` folder:
```env
VITE_BACKEND_URL=http://localhost:4000
```

**4. Run the apps**
```bash
# Backend (from /backend)
npm run server

# Frontend (from /frontend)
npm run dev

# Admin (from /admin)
npm run dev
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/user/register | Register a new user |
| POST | /api/user/login | Login user |
| GET | /api/food/list | Get all food items |
| POST | /api/food/add | Add a food item (admin) |
| POST | /api/food/remove | Remove a food item (admin) |
| POST | /api/cart/add | Add item to cart |
| POST | /api/cart/remove | Remove item from cart |
| POST | /api/cart/get | Get user cart |
| POST | /api/order/place | Place order with Stripe |
| POST | /api/order/verify | Verify Stripe payment |
| POST | /api/order/userorders | Get user orders |
| POST | /api/order/list | Get all orders (admin) |
| POST | /api/order/status | Update order status (admin) |

---

## Deployment

This project is deployed on **Vercel**. Make sure to:
1. Add all environment variables in Vercel project settings
2. Set MongoDB Atlas Network Access to allow all IPs (`0.0.0.0/0`)
3. Use Cloudinary for image uploads (Vercel has a read-only filesystem)

---

## Author

**Gautam Parmar**
- GitHub: [@gautam-parmar-ai](https://github.com/gautam-parmar-ai)
