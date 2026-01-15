## 🎯 About the Project

Service Finder is a modern marketplace platform that simplifies the process of finding and booking local services. Whether you're looking for a plumber, electrician, cleaner, or any other service provider, this application provides an intuitive interface for both customers and service providers to connect and conduct business.

## 🚀 Tech Stack

### Frontend
- **React 18**: Modern UI library with hooks and functional components
- **Vite**: Lightning-fast build tool and development server
- **TailwindCSS 4**: Utility-first CSS framework for rapid UI development
- **React Router DOM**: Client-side routing and navigation
- **React Icons**: Comprehensive icon library
- **Swiper**: Touch-enabled slider/carousel component
- **Context API**: State management for authentication and user data

### Backend
- **Node.js**: JavaScript runtime environment
- **Express 5**: Fast, minimalist web framework
- **MongoDB**: NoSQL database for flexible data storage
- **Mongoose**: Elegant MongoDB object modeling
- **bcrypt**: Secure password hashing
- **JWT**: Token-based authentication
- **CORS**: Cross-Origin Resource Sharing support
- **dotenv**: Environment variable management

## 📁 Project Structure

The project follows a monorepo structure with separate frontend and backend directories:

```
tcsc/
├── ServiceFinder/              # React Frontend Application
│   ├── public/
│   │   ├── images/            # Static images and media files
│   │   └── vite.svg
│   └── src/
│       ├── Pages/             # Main application pages
│       │   ├── Home.jsx       # Landing page
│       │   ├── About.jsx      # About page
│       │   ├── Service.jsx    # Service listing page
│       │   ├── Login.jsx      # User authentication
│       │   ├── Register.jsx   # User registration
│       │   ├── UserDashboard.jsx    # Customer dashboard
│       │   ├── WorkerDashboard.jsx  # Service provider dashboard
│       │   └── Feedback.jsx   # Feedback management
│       ├── components/        # Reusable React components
│       │   ├── Navbar.jsx     # Navigation bar
│       │   ├── Footer.jsx     # Footer component
│       │   ├── Card.jsx       # Service card component
│       │   ├── ProtectedRoute.jsx  # Route protection
│       │   └── feedbackCard.jsx    # Feedback display
│       ├── context/           # React Context for state management
│       │   └── AuthContext.jsx     # Authentication context
│       ├── config/
│       │   └── api.js         # API configuration and endpoints
│       └── App.jsx            # Main application component
│
└── backend/                   # Node.js Backend API
    ├── src/
    │   ├── config/
    │   │   ├── db/            # Database configuration
    │   │   ├── environment/   # Environment settings
    │   │   └── setup/         # Express and server setup
    │   ├── controllers/       # Business logic handlers
    │   │   ├── api.controller.js
    │   │   ├── user.controller.js
    │   │   ├── worker.controller.js
    │   │   ├── services.controller.js
    │   │   ├── feedback.controller.js
    │   │   └── pages.controller.js
    │   ├── models/            # MongoDB schemas
    │   │   ├── user.model.js
    │   │   ├── booking.model.js
    │   │   └── feedback.model.js
    │   └── routes/            # API route definitions
    │       ├── app.routes.js
    │       ├── user.routes.js
    │       ├── worker.routes.js
    │       ├── services.routes.js
    │       ├── feedback.routes.js
    │       └── pages.routes.js
    ├── server.js              # Entry point
    └── vercel.json            # Deployment configuration
```

## 📱 Features

### For Customers (Users)
- **Service Discovery**: Browse through a wide range of available services with detailed descriptions
- **Advanced Search**: Filter and search for specific services based on categories and ratings
- **Booking System**: Schedule appointments with service providers at convenient times
- **Booking History**: Track all past and upcoming bookings in one place
- **Feedback & Reviews**: Rate and review service providers after job completion
- **Secure Profile**: Personal dashboard to manage account information and preferences
- **Responsive Interface**: Seamless experience across all devices

### For Service Workers (Providers)
- **Service Management**: Create, update, and showcase your service offerings
- **Booking Management**: View and manage incoming booking requests
- **Customer Insights**: Access customer feedback and ratings
- **Profile Customization**: Build a professional profile to attract more customers
- **Business Analytics**: Track your service performance and customer satisfaction

### General Features
- **Authentication System**: 
  - Secure user registration with password hashing
  - JWT-based login for secure sessions
  - Protected routes for authenticated users only
  - Role-based access control (User vs Worker)
  
- **Modern UI/UX**:
  - Clean and intuitive interface design
  - Smooth animations and transitions
  - Interactive carousels for service showcasing
  - Mobile-first responsive design
  
- **Security**:
  - Password encryption using bcrypt
  - HTTP-only cookies for token storage
  - CORS protection
  - Input validation and sanitization

## 🚦 Running the Application

### Development Mode

1. **Start Backend Server** (Terminal 1):
   ```bash
   cd backend
   npm run dev
   ```
   - Runs with nodemon for auto-reload on file changes
   - API accessible at: `http://localhost:4000`
   - API endpoints: `http://localhost:4000/api/*`

2. **Start Frontend Server** (Terminal 2):
   ```bash
   cd ServiceFinder
   npm run dev
   ```
   - Hot module replacement (HMR) enabled
   - Application accessible at: `http://localhost:5173`
   - Automatically opens in your default browser

### Production Mode

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd ServiceFinder
npm run build        # Creates optimized production build
npm run preview      # Preview production build locally
```

### API Endpoints Overview

Base URL: `http://localhost:4000/api`

- **Authentication**: `/api/auth/*`
- **Users**: `/api/users/*`
- **Workers**: `/api/workers/*`
- **Services**: `/api/services/*`
- **Bookings**: `/api/bookings/*`
- **Feedback**: `/api/feedback/*`







## 🚀 Deployment

### Backend Deployment (Vercel)

The backend is configured for Vercel deployment with `vercel.json`:

```bash
cd backend
vercel --prod
```

### Frontend Deployment

**Vercel:**
```bash
cd ServiceFinder
vercel --prod
```

**Netlify:**
```bash
cd ServiceFinder
npm run build
# Deploy the dist/ folder
```
---

Made with ❤️ for connecting service providers with customers
