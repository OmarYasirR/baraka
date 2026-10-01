// src/hooks/useFonts.js
import { useFonts as useExpoFonts } from 'expo-font';
import {
  Tajawal_300Light,
  Tajawal_400Regular,
  Tajawal_500Medium,
  Tajawal_700Bold,
  Tajawal_800ExtraBold,
  Tajawal_900Black,
} from '@expo-google-fonts/tajawal';

export const useFonts = () => {
  const [fontsLoaded] = useExpoFonts({
    'Tajawal-Light': Tajawal_300Light,
    'Tajawal-Regular': Tajawal_400Regular,
    'Tajawal-Medium': Tajawal_500Medium,
    'Tajawal-Bold': Tajawal_700Bold,
    'Tajawal-ExtraBold': Tajawal_800ExtraBold, // This is the correct one
    'Tajawal-Black': Tajawal_900Black,
  });

  

  return fontsLoaded;
};