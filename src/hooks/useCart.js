import { useCart as useCartContext } from '../context/CartContext';
import { useApp } from '../context/AppContext';

export const useCart = () => {
  const context = useCartContext();
  const { setLoading, setError } = useApp();

  const addToCartWithFeedback = async (product, options = {}) => {
    try {
      setLoading(true);
      
      const { showAlert = true, quantity = 1 } = options;
      
      // Add product to cart multiple times if quantity > 1
      for (let i = 0; i < quantity; i++) {
        context.addToCart(product);
      }
      
      if (showAlert) {
        // In a real app, you might show a toast notification here
        console.log(`${product.name} added to cart`);
      }
      
      return { success: true };
    } catch (error) {
      setError('Failed to add item to cart');
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const removeFromCartWithConfirmation = (productId, productName) => {
    // In a real app, you might show a confirmation dialog
    context.removeFromCart(productId);
    console.log(`${productName} removed from cart`);
  };

  const updateQuantityWithValidation = (productId, quantity) => {
    if (quantity < 1) {
      setError('Quantity must be at least 1');
      return;
    }
    
    if (quantity > 99) {
      setError('Maximum quantity is 99');
      return;
    }
    
    context.updateQuantity(productId, quantity);
  };

  const clearCartWithConfirmation = () => {
    // In a real app, you might show a confirmation dialog
    context.clearCart();
    console.log('Cart cleared');
  };

  const getCartSummary = () => {
    const { items } = context.cart;
    const subtotal = context.getCartTotal();
    const shipping = subtotal > 50 ? 0 : 5.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    return {
      items,
      subtotal,
      shipping,
      tax,
      total,
      itemCount: context.getCartItemsCount(),
      hasFreeShipping: subtotal > 50,
    };
  };

  const isProductInCart = (productId) => {
    return context.cart.items.some(item => item.id === productId);
  };

  const getProductQuantity = (productId) => {
    return context.getItemQuantity(productId);
  };

  return {
    ...context,
    addToCart: addToCartWithFeedback,
    removeFromCart: removeFromCartWithConfirmation,
    updateQuantity: updateQuantityWithValidation,
    clearCart: clearCartWithConfirmation,
    getCartSummary,
    isProductInCart,
    getProductQuantity,
  };
};