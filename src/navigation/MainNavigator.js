import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useAuth } from "../hooks/useAuth";
import TabNavigator, { PremiumTabNavigator, MinimalTabNavigator } from './TabNavigator';
import AuthNavigator from "./AuthNavigator";

// Add LoadingScreen component
const LoadingScreen = () => (
  <View className="flex-1 justify-center items-center bg-white">
    <ActivityIndicator size="large" color="#3b82f6" />
    <Text className="mt-4 text-gray-600">Loading...</Text>
  </View>
);

const MainNavigator = () => {
  const { user, isLoading } = useAuth();

  // Show loading screen if checking auth state
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Choose your preferred tab style:
  // - TabNavigator (Standard)
  // - PremiumTabNavigator (Floating with rounded design)
  // - MinimalTabNavigator (Minimalist)
  const SELECTED_TAB_STYLE = 'premium'; // 'standard' | 'premium' | 'minimal'

  const renderTabNavigator = () => {
    switch (SELECTED_TAB_STYLE) {
      case 'premium':
        return <PremiumTabNavigator />;
      case 'minimal':
        return <MinimalTabNavigator />;
      default:
        return <TabNavigator />;
    }
  };

  return user ? renderTabNavigator() : <AuthNavigator />;
}

export default MainNavigator;