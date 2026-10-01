import React, { createContext, useContext } from 'react';
import { useWishlistManager } from '../hooks/useWishlist';

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const wishlist = useWishlistManager();

  return (
    <WishlistContext.Provider value={wishlist}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
