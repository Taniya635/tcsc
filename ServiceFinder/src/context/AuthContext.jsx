import { createContext, useState, useContext, useEffect } from "react";
import API_URL from '../config/api';


const AuthContext = createContext();


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const loggedIn = localStorage.getItem('isLoggedIn');
    
    if (storedUser && loggedIn === 'true') {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);


  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/pages/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        setIsLoggedIn(true);
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('isLoggedIn', 'true');
        
        return { success: true, message: "Login successful!", user: data.user, isWorker: data.isWorker };
      } else {
        return { success: false, message: data.error };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: "An error occurred! Please try again." };
    }
  };


  const register = async (userData) => {
    try {
      const response = await fetch(`${API_URL}/pages/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (response.ok) {
        return { success: true, message: "Registration successful! You can now login.", user: data.user };
      } else {
        return { success: false, message: data.error };
      }
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: "An error occurred! Please try again." };
    }
  };


  const logout = async () => {
    try {
      await fetch(`${API_URL}/pages/logout`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {

      setUser(null);
      setIsLoggedIn(false);
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('rememberMe');
    }
  };


  const isWorker = () => {
    return user && user.service ? true : false;
  };

  const value = {
    user,
    isLoggedIn,
    loading,
    login,
    register,
    logout,
    isWorker: isWorker()
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
