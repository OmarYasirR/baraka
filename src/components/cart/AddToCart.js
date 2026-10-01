import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../common/Button';
import { theme } from '../../styles/colors';
import { Text } from '../../components/GlobalText';


const AddToCart = ({
  product,
  onAddToCart,
  onBuyNow,
  initialQuantity = 1,
  className = "",
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    onAddToCart?.(product, quantity);
  };

  const handleBuyNow = () => {
    onBuyNow?.(product, quantity);
  };

  if (!product.inStock) {
    return (
      <View className={`bg-white border-t border-gray-200 p-6 ${className}`}>
        <Text className="text-red-600 font-semibold text-center text-lg">
          Out of Stock
        </Text>
        <Text className="text-gray-500 text-center mt-1">
          This product is currently unavailable
        </Text>
      </View>
    );
  }

  return (
    <View className={`bg-white border-t border-gray-200 p-6 ${className}`}>
      {/* Quantity Selector */}
      <View className="flex-row-reverse items-center justify-between bg-red-50 rounded-2xl p-4 mb-4">
        <Text className="text-gray-700 font-tajawal-bold">الكميه</Text>
        <View className="flex-row items-center">
          <TouchableOpacity 
            className={`w-10 h-10 rounded-full items-center justify-center ${
              quantity <= 1 ? 'bg-gray-50' : 'bg-white shadow-sm'
            }`}
            onPress={handleDecrease}
            disabled={quantity <= 1}
          >
            <Icon 
              name="remove" 
              size={20} 
              color={quantity <= 1 ? '#9ca3af' : theme.praimary} 
            />
          </TouchableOpacity>
          
          <Text className="text-lg text-red-500 font-bold mx-4 min-w-8 text-center">
            {quantity}
          </Text>
          
          <TouchableOpacity 
            className="w-10 h-10 bg-white rounded-full items-center justify-center shadow-sm"
            onPress={handleIncrease}
          >
            <Icon name="add" size={20} color={theme.praimary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="flex-row space-x-3">
        <Button 
          title="اضف للعربه"
          variant="outline"
          onPress={handleAddToCart}
          icon="cart-outline"
          className="flex-1"
        />
        <Button 
          title="شراء الان"
          onPress={handleBuyNow}
          icon="flash"
          className="flex-1"
          variant='error'
        />
      </View>
    </View>
  );
};

export default AddToCart;