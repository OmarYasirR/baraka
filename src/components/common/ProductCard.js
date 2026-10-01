import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text } from '../../components/GlobalText';
import Icon from 'react-native-vector-icons/Ionicons';
import { calculateDiscount, formatPrice } from '../../utils/helpers';
import { theme } from '../../styles/colors';

const ProductCard = ({ 
  product, 
  onPress, 
  onAddToCart,
  variant = 'default', // 'default' | 'compact' | 'horizontal'
  className = "",
}) => {
  const isCompact = variant === 'compact';
  const isHorizontal = variant === 'horizontal';
  const discount = calculateDiscount(product.originalPrice, product.price);

  const handleAddToCart = (e) => {
    e?.stopPropagation();
    onAddToCart?.(product);
  };

  // const theme.praimary = '#f97316';
  const backgroundColor = theme.background;

  // HORIZONTAL CARD
  if (isHorizontal) {
    return (
      <TouchableOpacity 
        className={`rounded-2xl p-4 flex-row shadow-sm ${className}`}
        style={{ backgroundColor }}
        onPress={onPress}
      >
        <View className="relative">
          <Image 
            source={{ uri: product.image }} 
            className="w-20 h-20 rounded-xl"
          />
          {discount > 0 && (
            <View className="absolute -top-1 -left-1 rounded-full px-2 py-1"
              style={{ backgroundColor: '#dc2626' }}
            >
              <Text className="text-white text-xs font-bold">-{discount}%</Text>
            </View>
          )}
        </View>

        <View className="flex-1 ml-4 justify-between">
          <View>
            <Text className="text-gray-500 text-xs">{product.brand}</Text>
            <Text className="text-gray-800 font-tajawal-bold text-sm mt-1" numberOfLines={2}>
              {product.name}
            </Text>
          </View>

          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Text style={{ color: theme.praimary }} className="font-bold text-base">
                {formatPrice(product.price)}
              </Text>
              {product.originalPrice && (
                <Text className="text-gray-400 text-sm line-through ml-2">
                  {formatPrice(product.originalPrice)}
                </Text>
              )}
            </View>

            <TouchableOpacity 
              className="w-8 h-8 rounded-full items-center justify-center"
              style={{ backgroundColor: theme.praimary }}
              onPress={handleAddToCart}
            >
              <Icon name="add" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  // COMPACT CARD
  if (isCompact) {
    return (
      <TouchableOpacity 
        className={`rounded-2xl p-3 flex-row ${className}`}
        style={{ backgroundColor }}
        onPress={onPress}
      >
        <Image 
          source={{ uri: product.image }} 
          className="w-12 h-12 rounded-lg"
        />
        <View className="flex-1 ml-3 justify-center">
          <Text className="text-gray-800 font-medium text-sm" numberOfLines={1}>
            {product.name}
          </Text>
          <Text style={{ color: theme.praimary }} className="font-bold text-sm mt-1">
            {formatPrice(product.price)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  // DEFAULT CARD
  return (
    <TouchableOpacity 
      className={`rounded-2xl p-4 shadow-sm ${className}`}
      style={{ backgroundColor }}
      onPress={onPress}
    >
      <View className="relative">
        <Image 
          source={{ uri: product.image }} 
          className="w-full h-32 rounded-xl"
        />
        {discount > 0 && (
          <View className="absolute top-2 left-2 rounded-full px-2 py-1"
            style={{ backgroundColor: '#dc2626' }}
          >
            <Text className="text-white text-xs font-bold">-{discount}%</Text>
          </View>
        )}
        {!product.inStock && (
          <View className="absolute inset-0 bg-gray-800 bg-opacity-50 rounded-xl items-center justify-center">
            <Text className="text-white font-semibold">Out of Stock</Text>
          </View>
        )}
      </View>

      <View className="mt-3">
        <Text className="text-gray-500 text-xs">{product.brand}</Text>
        <Text className="text-gray-800 font-semibold text-sm mt-1 font-tajawal-bold" numberOfLines={2}>
          {product.name}
        </Text>

        <View className="flex-row items-center mt-2">
          <Icon name="star" size={14} color="#fbbf24" />
          <Text className="text-gray-600 text-xs ml-1">
            {product.rating} ({product.reviews})
          </Text>
        </View>

        <View className="flex-row items-center justify-between mt-3">
          <View className="flex-row items-center">
            <Text style={{ color: theme.praimary }} className="font-bold text-base">
              {formatPrice(product.price)}
            </Text>
            {product.originalPrice && (
              <Text className="text-gray-400 text-sm line-through ml-2">
                {formatPrice(product.originalPrice)}
              </Text>
            )}
          </View>

          <TouchableOpacity 
            className={`w-8 h-8 rounded-full items-center justify-center`}
            style={{ backgroundColor: product.inStock ? theme.praimary : '#d1d5db' }}
            onPress={handleAddToCart}
            disabled={!product.inStock}
          >
            <Icon name="add" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
