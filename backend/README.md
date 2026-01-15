# Backend Service Finder Application

This is the backend application for the Service Finder platform, restructured following clean architecture principles.

## Project Structure

```
backend/
├── server.js                           # Main entry point
├── package.json                        # Dependencies and scripts
└── src/
    ├── config/                         # Configuration files
    │   ├── db/
    │   │   └── db.js                   # Database connection
    │   ├── environment/
    │   │   └── default.js              # Environment configuration
    │   └── setup/
    │       ├── express.js              # Express app configuration
    │       └── setup.js                # Server initialization
    ├── controllers/                    # Business logic
    │   ├── api.controller.js           # API/User operations controller
    │   ├── pages.controller.js         # Pages controller
    │   └── services.controller.js      # Services controller
    ├── models/                         # Database models
    │   └── user.model.js               # User model schema
    └── routes/                         # Route definitions
        ├── app.routes.js               # Main route aggregator
        ├── api.routes.js               # API routes
        ├── pages.routes.js             # Pages routes
        └── services.routes.js          # Services routes
```

## Architecture

The application follows a layered architecture:

1. **Entry Point** (`server.js`) - Initializes the application
2. **Configuration Layer** (`src/config/`) - Database, environment, and app setup
3. **Routes Layer** (`src/routes/`) - API endpoint definitions
4. **Controller Layer** (`src/controllers/`) - Business logic and request handling
5. **Model Layer** (`src/models/`) - Data models and schemas

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)

### Installation
```bash
npm install
```

### Configuration

1. **Copy environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Update `.env` file:**
   ```env
   NODE_ENV=development
   PORT=4000
   
   # For local MongoDB:
   MONGODB_URI=mongodb://localhost:27017/tcsc
   
   # For MongoDB Atlas (production):
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/tcsc?retryWrites=true&w=majority
   ```

### Running the Application

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## MongoDB Setup

### Local MongoDB
```bash
# macOS (using Homebrew)
brew services start mongodb-community
```

### MongoDB Atlas (Cloud)
For production deployment, see [MongoDB Atlas Setup Guide](./MONGODB_ATLAS_SETUP.md)

## Deployment

### Vercel Deployment

1. **Set environment variables in Vercel Dashboard:**
   - `MONGODB_URI` - Your MongoDB Atlas connection string
   - `NODE_ENV` - `production`
   - `PORT` - `4000`

2. **Deploy:**
   ```bash
   vercel --prod
   ```

See [Setup Summary](../SETUP_SUMMARY.md) for more details.

## API Endpoints

### Pages Routes (`/pages`)
- GET `/pages/home` - Home page
- GET `/pages/about` - About page
- GET `/pages/contact` - Contact page
- GET `/pages/services` - Services page
- GET `/pages/register` - Register page
- GET `/pages/login` - Login page

### Services Routes (`/services`)
- GET `/services/plumbing` - Plumbing service info
- GET `/services/electrical` - Electrical service info
- GET `/services/cleaning` - Cleaning service info
- GET `/services/all` - All services list

### API Routes (`/api`)
- GET `/api/users` - Get all users (with filters)
- GET `/api/search?q=query` - Search users
- POST `/api/adduser` - Add new user
- PATCH `/api/updateuser/:id` - Update user
- DELETE `/api/deleteuser/:id` - Delete user

## Database

- **MongoDB** - Database: `tcsc`
- **Local Connection**: `mongodb://localhost:27017/tcsc`
- **Production**: MongoDB Atlas (cloud-hosted)

Configuration is managed via environment variables in `.env` file.

## Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **bcrypt** - Password hashing
- **nodemon** - Development auto-reload (dev dependency)
