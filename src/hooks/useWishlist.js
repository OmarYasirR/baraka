import { useReducer, useEffect, useCallback } from 'react';
import { storageService } from '../services/storage';

// ---------------- Reducer ----------------
const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_WISHLIST':
      return { ...state, items: action.payload || [] };

    case 'ADD_TO_WISHLIST':
      if (state.items.some(item => item.id === action.payload.id)) return state;
      return { ...state, items: [...state.items, action.payload] };

    case 'REMOVE_FROM_WISHLIST':
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };

    case 'CLEAR_WISHLIST':
      return { ...state, items: [] };

    default:
      return state;
  }
};

const initialState = { items: [] };

// ---------------- Hook ----------------
export const useWishlistManager = () => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  // Load from storage on mount
  useEffect(() => {
    (async () => {
      try {
        const data = await storageService.getData('wishlist');
        if (data) {
          dispatch({ type: 'LOAD_WISHLIST', payload: JSON.parse(data) });
        }
      } catch (error) {
        console.error('❌ Error loading wishlist:', error);
      }
    })();
  }, []);

  // Save whenever items change
  useEffect(() => {
    storageService.storeData('wishlist', JSON.stringify(state.items)).catch((error) =>
      console.error('❌ Error saving wishlist:', error)
    );
  }, [state.items]);

  // ---------------- Actions ----------------
  const addToWishlist = useCallback((product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  }, []);

  const removeFromWishlist = useCallback((productId) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  }, []);

  const clearWishlist = useCallback(() => {
    dispatch({ type: 'CLEAR_WISHLIST' });
  }, []);

  const isInWishlist = useCallback(
    (productId) => state.items.some((item) => item.id === productId),
    [state.items]
  );

  const getWishlistCount = useCallback(() => state.items.length, [state.items]);

  // ---------------- Return API ----------------
  return {
    wishlist: state,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    isInWishlist,
    getWishlistCount,
  };
};
