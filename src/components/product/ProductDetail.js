import React from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Text } from '../../components/GlobalText';
import Icon from "react-native-vector-icons/Ionicons";
import { formatPrice, calculateDiscount } from "../../utils/helpers";
import Button from "../common/Button";
import { useWishlistManager } from "../../hooks/useWishlist";
import { theme } from "../../styles/colors";

const ProductDetail = ({
  product,
  quantity = 1,
  onQuantityChange,
  onAddToCart,
  onBuyNow,
  className = "",
}) => {
  const discount = calculateDiscount(product.originalPrice, product.price);

  const { addToWishlist, removeFromWishlist, isInWishlist } =
    useWishlistManager();

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleIncreaseQuantity = () => {
    onQuantityChange?.(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      onQuantityChange?.(quantity - 1);
    }
  };

  return (
    <ScrollView
      className={`bg-white ${className}`}
      showsVerticalScrollIndicator={false}
    >
      {/* Product Images */}
      <View className="relative">
        <Image
          source={{ uri: product.image }}
          className="w-full h-80"
          resizeMode="cover"
        />
        {discount > 0 && (
          <View className="absolute top-4 left-4 bg-red-500 px-3 py-2 rounded-full">
            <Text className="text-white font-bold text-sm">-{discount}%</Text>
          </View>
        )}
      </View>

      {/* Product Info */}
      <View className="p-6">
        <View className="flex-row justify-between items-start">
          <View className="flex-1">
            <Text className="text-gray-500 text-sm">{product.brand}</Text>
            <Text className="text-2xl font-tajawal-bold text-gray-800 mt-1">
              {product.name}
            </Text>
          </View>
          <TouchableOpacity className="p-2" onPress={handleWishlistToggle}>
          <Icon
            name={isInWishlist(product.id) ? "heart" : "heart-outline"}
            size={26}
            color={isInWishlist(product.id) ? "#ef4444" : "#374151"}
          />
        </TouchableOpacity>
        </View>

        {/* Rating and Stock */}
        <View className="flex-row items-center mt-3">
          <View className="flex-row items-center">
            <Icon name="star" size={20} color="#fbbf24" />
            <Text className="text-gray-700 font-semibold ml-1">
              {product.rating}
            </Text>
            <Text className="text-gray-500 ml-1">
              ({product.reviews} reviews)
            </Text>
          </View>
          <View className="w-1 h-1 bg-gray-300 rounded-full mx-3" />
          <Text
            className={`font-semibold ${
              product.inStock ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </Text>
        </View>

        {/* Price */}
        <View className="flex-row items-center mt-4">
          <Text className="text-2xl font-bold text-red-600">
            {formatPrice(product.price)}
          </Text>
          {product.originalPrice && (
            <Text className="text-xl text-red-200 line-through ml-3">
              {formatPrice(product.originalPrice)}
            </Text>
          )}
        </View>

        {/* Description */}
        <Text className="text-gray-600 leading-6 mt-4">
          {product.description}
        </Text>

        {/* Features */}
        <View className="mt-6">
          <Text className="text-lg font-tajawal-bold text-gray-800 mb-3">
            المزايا الاساسيه
          </Text>
          {product.features.map((feature, index) => (
            <View key={index} className="flex-row-reverse items-center mb-2">
              <Icon name="checkmark-circle" size={20} color={theme.praimary} />
              <Text className="text-gray-600 ml-2">{feature}</Text>
            </View>
          ))}
        </View>

        {/* Specifications */}
        {product.specifications && (
          <View className="mt-6">
            <Text className="text-lg font-bold text-gray-800 mb-3">
              Specifications
            </Text>
            <View className="bg-gray-50 rounded-2xl p-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <View
                  key={key}
                  className="flex-row justify-between py-2 border-b border-gray-200 last:border-b-0"
                >
                  <Text className="text-gray-600 font-medium capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}:
                  </Text>
                  <Text className="text-gray-800">{value}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Compatibility */}
        {product.compatibility && product.compatibility.length > 0 && (
          <View className="mt-6">
            <Text className="text-lg font-tajawal-bold text-gray-800 mb-3">
              المركبات المتوافقة
            </Text>
            <View className="flex-row flex-wrap">
              {product.compatibility.map((car, index) => (
                <View
                  key={index}
                  className="bg-red-50 px-3 py-2 rounded-full mr-2 mb-2"
                >
                  <Text className="text-red-600 text-sm">{car}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Warranty & Shipping */}
        <View className="mt-6 bg-gray-50 rounded-2xl p-4">
          <View className="flex-row items-center mb-3">
            <Icon name="shield-checkmark" size={20} color="#10b981" />
            <Text className="text-gray-800 font-medium ml-2">
              Warranty: {product.warranty}
            </Text>
          </View>
          <View className="flex-row items-center">
            <Icon name="rocket" size={20} color="#3b82f6" />
            <Text className="text-gray-800 font-medium ml-2">
              {product.shipping.free ? "Free Shipping" : "Shipping: $5.99"} •{" "}
              {product.shipping.deliveryTime}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
