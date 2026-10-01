import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { formatPrice } from '../../utils/helpers';
import Button from '../common/Button';
import { theme } from '../../styles/colors';

const CartSummary = ({
  subtotal,
  shipping,
  tax,
  total,
  itemCount,
  hasFreeShipping = false,
  freeShippingThreshold = 50,
  onCheckout,
  checkoutLoading = false,
  className = "",
}) => {
  const remainingForFreeShipping = freeShippingThreshold - subtotal;
  const showFreeShippingProgress = subtotal < freeShippingThreshold;

  return (
    <View className={`bg-gray-100 rounded-t-3xl p-6 pt-2 shadow-lg ${className}`}>
      <Text className="text-lg font-bold text-gray-800 mb-2">Order Summary</Text>
      
      {/* Free Shipping Progress */}
      {showFreeShippingProgress && (
        <View className="bg-blue-50 rounded-2xl p-4 mb-4">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-blue-800 font-medium text-sm">
              Add {formatPrice(remainingForFreeShipping)} for free shipping!
            </Text>
            <Icon name="rocket" size={16} color="#1d4ed8" />
          </View>
          <View className="w-full bg-blue-200 rounded-full h-2">
            <View 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${(subtotal / freeShippingThreshold) * 100}%` }}
            />
          </View>
        </View>
      )}

      {/* Free Shipping Badge */}
      {hasFreeShipping && (
        <View className="bg-orange-100 rounded-2xl p-4 mb-4 flex-row items-center">
          <Icon name="checkmark-circle" size={20} color={theme.praimary} />
          <Text className="text-red-600 font-medium ml-2">Free Shipping Applied!</Text>
        </View>
      )}
      
      {/* Summary Details */}
      <View className="space-y-2">
        <View className="flex-row justify-between">
          <Text className="text-gray-600">Subtotal ({itemCount} items)</Text>
          <Text className="text-gray-800 font-semibold">{formatPrice(subtotal)}</Text>
        </View>
        
        <View className="flex-row justify-between">
          <Text className="text-gray-600">Shipping</Text>
          <Text className="text-gray-800 font-semibold">
            {hasFreeShipping ? 'Free' : formatPrice(shipping)}
          </Text>
        </View>
        
        <View className="flex-row justify-between">
          <Text className="text-gray-600">Tax</Text>
          <Text className="text-gray-800 font-semibold">{formatPrice(tax)}</Text>
        </View>
      </View>
      
      {/* Total */}
      <View className="flex-row justify-between pt-2 border-t border-gray-200 mt-2">
        <Text className="text-lg font-bold text-gray-800">Total</Text>
        <Text className="text-lg font-bold text-red-600">{formatPrice(total)}</Text>
      </View>

      {/* Checkout Button */}
      <Button 
        title="Proceed to Checkout"
        onPress={onCheckout}
        loading={checkoutLoading}
        className="mt-6"
        size="large"
        variant='error'
      />
    </View>
  );
};

export default CartSummary;