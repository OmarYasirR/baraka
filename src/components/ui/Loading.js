import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const Loading = ({ 
  message = "Loading...",
  size = "large",
  color = "#2563eb",
  className = "",
}) => {
  return (
    <View className={`flex-1 items-center justify-center p-8 ${className}`}>
      <ActivityIndicator size={size} color={color} />
      {message && (
        <Text className="text-gray-600 mt-4 text-center text-base">
          {message}
        </Text>
      )}
    </View>
  );
};

export default Loading;