import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text } from '../../components/GlobalText';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../../styles/colors';

const CategoryCard = ({ 
  category, 
  onPress,
  variant = 'default', // 'default' | 'large' | 'grid'
  className = "",
}) => {
  const isLarge = variant === 'large';
  const isGrid = variant === 'grid';

  if (isGrid) {
    return (
      <TouchableOpacity 
        className={`bg-white rounded-2xl p-4 items-center shadow-sm ${className}`}
        onPress={onPress}
      >
        <View className="bg-blue-50 w-12 h-12 rounded-2xl items-center justify-center">
          <Icon name={category.icon} size={24} color="#2563eb" />
        </View>
        <Text className="text-gray-800 font-medium text-sm mt-2 text-center" numberOfLines={2}>
          {category.name}
        </Text>
        <Text className="text-gray-400 text-xs mt-1">{category.count} items</Text>
      </TouchableOpacity>
    );
  }

  if (isLarge) {
    return (
      <TouchableOpacity 
        className={`bg-white rounded-2xl overflow-hidden shadow-sm ${className}`}
        onPress={onPress}
      >
        <Image 
          source={{ uri: category.image }} 
          className="w-full h-32"
        />
        <View className="p-4">
          <Text className="text-gray-800 font-bold text-lg">{category.name}</Text>
          <Text className="text-gray-500 text-sm mt-1">{category.description}</Text>
          <Text className="text-blue-600 font-medium text-sm mt-2">{category.count} products</Text>
        </View>
      </TouchableOpacity>
    );
  }

  // Default variant
  return (
    <TouchableOpacity 
      className={`items-center mr-4 ${className}`}
      onPress={onPress}
    >
      <View
        className="w-16 h-16 rounded-2xl items-center justify-center"
        style={{backgroundColor: theme.background}}
      >
        <Icon name={category.icon} size={24} color={theme.praimary} />
      </View>
      <Text
        className="text-gray-700 text-xs font-medium mt-2 text-center"
        numberOfLines={1}
        >
        {category.name}
      </Text>
      <Text className="text-gray-400 text-xs">{category.count + " "}منتج</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;