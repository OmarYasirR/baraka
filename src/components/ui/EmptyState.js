import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/common/Button';
import { theme } from '../../styles/colors';

const EmptyState = ({ 
  title = "Nothing here",
  description = "There's nothing to display at the moment",
  icon = "alert-circle",
  actionLabel,
  onAction,
  className = "",
}) => {
  return (
    <View className={`flex-1 items-center justify-center p-8 ${className}`}>
      <Icon name={icon} size={64} color={theme.background} />
      
      <Text className="text-xl font-bold text-gray-400 mt-4 text-center">
        {title}
      </Text>
      
      <Text className="text-gray-500 text-center mt-2 leading-6">
        {description}
      </Text>

      {actionLabel && onAction && (
        <Button 
          title={actionLabel}
          onPress={onAction}
          className="mt-6"
          variant='error'
        />
      )}
    </View>
  );
};

export default EmptyState;