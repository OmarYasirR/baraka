import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { I18nManager, StatusBar, Text, SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import MainNavigator from "./MainNavigator";
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";
import { AppProvider } from "../context/AppContext";
import { WishlistProvider } from "../context/WishlistContext";
import { useFonts } from "../hooks/useFonts";

export default function AppNavigator() {
  return (
    <TailwindProvider>
      <AppProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
                <NavigationContainer>
                  <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#ffffff"
                  />
                  <MainNavigator />
                </NavigationContainer>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </AppProvider>
    </TailwindProvider>
  );
}
