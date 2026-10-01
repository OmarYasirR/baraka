import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { formatPrice } from '../../utils/helpers';
import { theme } from '../../styles/colors';

const CartItem = ({ 
  item, 
  onRemove,
  onIncrease,
  onDecrease,
  onUpdateQuantity,
  className = "",
}) => {
  const handleIncrease = () => {
    onIncrease?.(item.id);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      onDecrease?.(item.id);
    } else {
      onRemove?.(item.id);
    }
  };

  const handleRemove = () => {
    onRemove?.(item.id);
  };

  const totalPrice = item.price * item.quantity;

  return (
    <View
      className={`bg-white mb-2 rounded-2xl p-4 shadow-sm ${className}`}
      style={{backgroundColor: theme.background}}
      >
      <View className="flex-row">
        {/* Product Image */}
        <Image 
          source={{ uri: item.image }} 
          className="w-20 h-20 rounded-xl"
        />

        {/* Product Info */}
        <View className="flex-1 ml-4">
          <Text className="text-gray-500 text-xs">{item.brand}</Text>
          <Text className="text-gray-800 font-semibold text-sm mt-1" numberOfLines={2}>
            {item.name}
          </Text>
          
          {/* Price */}
          <Text
            className="text-blue-600 font-bold text-lg mt-2"
            style={{color: theme.praimary}}
            >
            {formatPrice(item.price)}
          </Text>

          {/* Total Price */}
          <Text className="text-gray-600 text-sm mt-1">
            Total: {formatPrice(totalPrice)}
          </Text>
        </View>

        {/* Actions */}
        <View className="items-end flex-1 justify-between">
          {/* Remove Button */}
          <TouchableOpacity 
            className="p-2"
            onPress={handleRemove}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Icon name="trash-outline" size={20} color={"#ef4444"} />
          </TouchableOpacity>

          {/* Quantity Controls */}
          <View className="flex-row items-center mt-4 self-end">
            <TouchableOpacity 
              className={`w-8 h-8 rounded-full items-center justify-center ${
                item.quantity <= 1 ? 'bg-gray-100' : 'bg-red-50'
              }`}
              onPress={handleDecrease}
              disabled={item.quantity <= 1}
            >
              <Icon 
                name="remove" 
                size={16} 
                color={item.quantity <= 1 ? '#9ca3af' : theme.praimary} 
              />
            </TouchableOpacity>
            
            <Text className="text-gray-800 font-semibold mx-3 min-w-8 text-center">
              {item.quantity}
            </Text>
            
            <TouchableOpacity 
              className="w-8 h-8 bg-red-50 rounded-full items-center justify-center"
              onPress={handleIncrease}
            >
              <Icon name="add" size={16} color={theme.praimary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Stock Status */}
      {!item.inStock && (
        <View className="mt-3 bg-red-50 rounded-lg p-2">
          <Text className="text-red-600 text-sm text-center">
            This item is currently out of stock
          </Text>
        </View>
      )}
    </View>
  );
};

export default CartItem;