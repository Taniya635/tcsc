const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');

// Home Page - Get featured workers or statistics
const getHome = async (req, res) => {
    try {
        // Get total counts for home page statistics
        const totalUsers = await UserModel.countDocuments();
        const totalWorkers = await UserModel.countDocuments({ service: { $exists: true } });
        
        // Get featured workers (online workers)
        const featuredWorkers = await UserModel.find({ 
            statuss: 'online',
            service: { $exists: true }
        }).limit(6);

        res.status(200).json({
            page: 'Home',
            message: "Welcome to service finder",
            statistics: {
                totalUsers,
                totalWorkers,
                activeWorkers: featuredWorkers.length
            },
            featuredWorkers
        });
    } catch (error) {
        console.error('Error loading home page:', error);
        res.status(500).json({ error: 'Failed to load home page' });
    }
};

// About Page - Company information
const getAbout = (req, res) => {
    res.status(200).json({
        page: "About",
        message: "About us page",
        company: {
            name: "FindService",
            description: "Connect with trusted local service providers",
            mission: "Making local services accessible to everyone",
            established: "2024"
        }
    });
};

// Contact Page - Contact information
const getContact = (req, res) => {
    res.status(200).json({
        page: "Contact",
        message: "Contact us",
        contact: {
            email: "support@findservice.com",
            phone: "+91-1234567890",
            address: "Mumbai, India",
            supportHours: "24/7"
        }
    });
};

// Services Page - List all available service categories
const getServices = async (req, res) => {
    try {
        // Get unique service categories
        const services = await UserModel.distinct('service');
        
        // Get worker count for each service
        const serviceDetails = await Promise.all(
            services.map(async (service) => {
                const count = await UserModel.countDocuments({ service });
                return { service, workerCount: count };
            })
        );

        res.status(200).json({
            page: "Services",
            message: "Available services",
            totalServices: services.length,
            services: serviceDetails
        });
    } catch (error) {
        console.error('Error loading services:', error);
        res.status(500).json({ error: 'Failed to load services' });
    }
};

// Register Page - Handle user registration
const postRegister = async (req, res) => {
    try {
        const { name, email, password, contact, service, location, statuss } = req.body;

        // Validate required fields
        if (!name || !email || !password) {
            return res.status(400).json({ 
                error: 'Name, email, and password are required' 
            });
        }

        // Check if user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ 
                error: 'User with this email already exists' 
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user object
        const userData = {
            name,
            email,
            password: hashedPassword,
            ...(contact && { contact }),
            ...(service && { service }),
            ...(location && { location }),
            ...(statuss && { statuss })
        };

        const newUser = new UserModel(userData);
        await newUser.save();

        // Don't send password back
        const userResponse = newUser.toObject();
        delete userResponse.password;

        res.status(201).json({
            message: 'Registration successful',
            user: userResponse
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Failed to register user' });
    }
};

// Get Register Page Info
const getRegister = (req, res) => {
    res.status(200).json({
        page: "Register",
        message: "Register new account",
        userTypes: ["customer", "worker"],
        requiredFields: ["name", "email", "password"],
        workerFields: ["service", "location", "contact"]
    });
};

// Login - Handle user authentication
const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ 
                error: 'Email and password are required' 
            });
        }

        // Find user by email
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ 
                error: 'Invalid email or password' 
            });
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ 
                error: 'Invalid email or password' 
            });
        }

        // Don't send password back
        const userResponse = user.toObject();
        delete userResponse.password;

        res.status(200).json({
            message: 'Login successful',
            user: userResponse,
            isWorker: !!user.service // true if user is a worker
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Failed to login' });
    }
};

// Get Login Page Info
const getLogin = (req, res) => {
    res.status(200).json({
        page: "Login",
        message: "Login to your account",
        requiredFields: ["email", "password"]
    });
};

// Logout - Handle user logout
const postLogout = (req, res) => {
    // In a real app, you'd clear session/token here
    res.status(200).json({
        message: 'Logout successful'
    });
};

// Page Not Found
const getPageNotFound = (req, res) => {
    res.status(404).json({
        page: "PageNotFound",
        message: "Page not found",
        error: "The requested page does not exist"
    });
};

module.exports = {
    getHome,
    getAbout,
    getContact,
    getServices,
    getRegister,
    postRegister,
    getLogin,
    postLogin,
    postLogout,
    getPageNotFound
};
