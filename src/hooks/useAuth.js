import { useState, useEffect } from 'react';
import { useAuth as useAuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const context = useAuthContext();
  
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  const loginWithEmail = async (email, password) => {
    try {
      setIsLoading(true);
      setAuthError(null);
      console.log(email, '   ', password)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock user data - in real app, this would come from API
      const userData = {
        id: 1,
        name: 'John Doe',
        email: email,
        phone: '+1 (555) 123-4567',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
        joinDate: '2023-01-15',
      };
      
      await context.login(userData);
      return { success: true };
    } catch (error) {
      setAuthError(error.message || 'Login failed');
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setIsLoading(true);
      setAuthError(null);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newUser = {
        id: Date.now(),
        ...userData,
        joinDate: new Date().toISOString().split('T')[0],
      };
      
      await context.login(newUser);
      return { success: true };
    } catch (error) {
      setAuthError(error.message || 'Registration failed');
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const logoutUser = async () => {
    try {
      await context.logout();
      setAuthError(null);
    } catch (error) {
      setAuthError(error.message || 'Logout failed');
    }
  };

  const updateProfile = async (profileData) => {
    try {
      setIsLoading(true);
      setAuthError(null);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const updatedUser = { ...context.user, ...profileData };
      await context.updateUser(updatedUser);
      return { success: true };
    } catch (error) {
      setAuthError(error.message || 'Profile update failed');
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (authError) {
      const timer = setTimeout(() => {
        setAuthError(null);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [authError]);

  return {
    ...context,
    isLoading,
    authError,
    loginWithEmail,
    register,
    logoutUser,
    updateProfile,
    clearError: () => setAuthError(null),
  };
};