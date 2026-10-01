import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../hooks/useCart';
import Header from '../components/common/Header';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import EmptyState from '../components/ui/EmptyState';
import Button from '../components/common/Button';

const CartScreen = () => {
  const navigation = useNavigation();
  const { 
    cart, 
    removeFromCart, 
    updateQuantity,
    getCartSummary 
  } = useCart();

  const cartSummary = getCartSummary();

  const handleIncreaseQuantity = (productId) => {
    const currentItem = cart.items.find(item => item.id === productId);
    if (currentItem) {
      updateQuantity(productId, currentItem.quantity + 1);
    }
  };

  const handleDecreaseQuantity = (productId) => {
    const currentItem = cart.items.find(item => item.id === productId);
    if (currentItem && currentItem.quantity > 1) {
      updateQuantity(productId, currentItem.quantity - 1);
    }
  };

  const handleCheckout = () => {
    navigation.navigate('Checkout');
  };

  const handleContinueShopping = () => {
    navigation.navigate('Categories');
  };

  if (cart.items.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50">
        <EmptyState
          title="Your cart is empty"
          description="Browse our categories and add some auto parts to get started"
          icon="cart"
          actionLabel="Start Shopping"
          onAction={handleContinueShopping}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      
      <View className="flex-1">
        <ScrollView 
          className="flex-1 px-4"
          showsVerticalScrollIndicator={false}
        >
          <View className="py-4">
            {cart.items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onIncrease={handleIncreaseQuantity}
                onDecrease={handleDecreaseQuantity}
                className="mb-3"
              />
            ))}
          </View>
        </ScrollView>

        {/* Cart Summary */}
        <CartSummary
          subtotal={cartSummary.subtotal}
          shipping={cartSummary.shipping}
          tax={cartSummary.tax}
          total={cartSummary.total}
          itemCount={cartSummary.itemCount}
          hasFreeShipping={cartSummary.hasFreeShipping}
          onCheckout={handleCheckout}
        />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;