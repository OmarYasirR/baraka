import axios from 'axios';

const API_BASE_URL = 'https://api.baraka-pro.com/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = ''; // Get from secure store
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    
    // Handle specific error cases
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Handle unauthorized access
          break;
        case 404:
          // Handle not found
          break;
        case 500:
          // Handle server error
          break;
        default:
          // Handle other errors
          break;
      }
    }
    
    return Promise.reject(error);
  }
);

export const productAPI = {
  getProducts: (params = {}) => api.get('/products', { params }),
  getProduct: (id) => api.get(`/products/${id}`),
  getCategories: () => api.get('/categories'),
  searchProducts: (query) => api.get('/products/search', { params: { q: query } }),
  getRelatedProducts: (productId) => api.get(`/products/${productId}/related`),
  getFeaturedProducts: () => api.get('/products/featured'),
  getPopularProducts: () => api.get('/products/popular'),
};

export const cartAPI = {
  syncCart: (cartData) => api.post('/cart/sync', cartData),
  getCart: () => api.get('/cart'),
  addToCart: (productId, quantity = 1) => api.post('/cart/items', { productId, quantity }),
  updateCartItem: (itemId, quantity) => api.put(`/cart/items/${itemId}`, { quantity }),
  removeFromCart: (itemId) => api.delete(`/cart/items/${itemId}`),
  clearCart: () => api.delete('/cart/items'),
};

export const orderAPI = {
  createOrder: (orderData) => api.post('/orders', orderData),
  getOrders: (params = {}) => api.get('/orders', { params }),
  getOrder: (id) => api.get(`/orders/${id}`),
  cancelOrder: (id) => api.post(`/orders/${id}/cancel`),
  trackOrder: (id) => api.get(`/orders/${id}/tracking`),
};

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  logout: () => api.post('/auth/logout'),
  refreshToken: (refreshToken) => api.post('/auth/refresh', { refreshToken }),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  resetPassword: (token, newPassword) => api.post('/auth/reset-password', { token, newPassword }),
};

export const userAPI = {
  getProfile: () => api.get('/user/profile'),
  updateProfile: (profileData) => api.put('/user/profile', profileData),
  updatePassword: (passwordData) => api.put('/user/password', passwordData),
  getAddresses: () => api.get('/user/addresses'),
  addAddress: (addressData) => api.post('/user/addresses', addressData),
  updateAddress: (addressId, addressData) => api.put(`/user/addresses/${addressId}`, addressData),
  deleteAddress: (addressId) => api.delete(`/user/addresses/${addressId}`),
  getWishlist: () => api.get('/user/wishlist'),
  addToWishlist: (productId) => api.post('/user/wishlist', { productId }),
  removeFromWishlist: (productId) => api.delete(`/user/wishlist/${productId}`),
};

export const reviewAPI = {
  getProductReviews: (productId, params = {}) => api.get(`/products/${productId}/reviews`, { params }),
  createReview: (productId, reviewData) => api.post(`/products/${productId}/reviews`, reviewData),
  updateReview: (reviewId, reviewData) => api.put(`/reviews/${reviewId}`, reviewData),
  deleteReview: (reviewId) => api.delete(`/reviews/${reviewId}`),
};

// Mock API functions for development
export const mockAPI = {
  // Simulate API delay
  delay: (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms)),
  
  // Mock successful response
  mockResponse: (data, success = true) => ({
    data: {
      success,
      data,
      message: success ? 'Operation completed successfully' : 'Operation failed',
    },
  }),
  
  // Mock error response
  mockError: (message = 'Something went wrong') => ({
    response: {
      data: {
        success: false,
        error: message,
        message,
      },
    },
  }),
};

export default api;