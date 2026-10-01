import React, { useEffect } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { View, SafeAreaView, Text, I18nManager } from 'react-native';
import { useFonts } from './src/hooks/useFonts';
// import { useFonts } from 'expo-font';



export default function App() {

const fontsLoaded = useFonts();

  // Show loading only if fonts are not loaded AND there's no fallback

  useEffect(() => {
    I18nManager.forceRTL(true);
    I18nManager.allowRTL(true);
  }, []);

  if (!fontsLoaded) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-white">
        <Text>جاري تحميل الخطوط...</Text>
      </SafeAreaView>
    );
  }

  return (<AppNavigator />);
}