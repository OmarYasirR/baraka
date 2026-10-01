import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import SearchScreen from "../screens/SearchScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import EditProfileScreen from "../screens/profilePageScreens/EditProfileScreen";
import ChangePasswordScreen from "../screens/profilePageScreens/ChangePasswordScreen";
import PersonalInformationScreen from "../screens/profilePageScreens/EditPersonalInfoScreen";
import ShippingAddressesScreen from "../screens/profilePageScreens/ShippingAddressesScreen";
import OrderHistoryScreen from "../screens/profilePageScreens/OrderHistoryScreen";
import PaymentMethodsScreen from "../screens/profilePageScreens/PaymentMethodsScreen";
import EditAddressScreen from "../screens/profilePageScreens/EditAddressScreen";
import WishlistScreen from "../screens/profilePageScreens/WishlistScreen";
import SettingsScreen from "../screens/profilePageScreens/SettingsScreen";
import HelpSupportScreen from "../screens/profilePageScreens/HelpSupportScreen";
import PrivacySecurityScreen from "../screens/profilePageScreens/PrivacySecurityScreen";
import NotificationScheduleScreen from "../screens/profilePageScreens/NotificationScheduleScreen";
import LoginActivityScreen from "../screens/profilePageScreens/LoginActivityScreen";
import NotificationsScreen from "../screens/profilePageScreens/NotificationsScreen";
import PersonalInfoScreen from "../screens/profilePageScreens/PersonalInfoScreen"
import ContactScreen from "../screens/profilePageScreens/ContactScreen";
import AboutUsScreen from "../screens/profilePageScreens/AboutUsScreen";
import PrivacyPolicyScreen from "../screens/profilePageScreens/PrivacyPolicyScreen";
import TermsOfServiceScreen from "../screens/profilePageScreens/TermsOfServiceScreen";
import ReturnPolicyScreen from "../screens/profilePageScreens/ReturnPolicyScreen";
import WarrantyInfoScreen from "../screens/profilePageScreens/WarrantyInfoScreen";
import ShippingGuideScreen from "../screens/profilePageScreens/ShippingGuideScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: "#ffffff",
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  headerTintColor: "#1f2937",
  headerTitleStyle: {
    fontWeight: "600",
  },
};

export const HomeStack = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen
      name="HomeMain"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetailScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Checkout"
      component={CheckoutScreen}
      options={{  headerShown: false }}
    />
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export const CategoriesStack = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen
      name="CategoriesMain"
      component={CategoriesScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetailScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Checkout"
      component={CheckoutScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export const CartStack = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen
      name="CartMain"
      component={CartScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetailScreen}
      options={{ title: "Product Details" }}
    />
    <Stack.Screen
      name="Checkout"
      component={CheckoutScreen}
      options={{ title: "Checkout" }}
    />
  </Stack.Navigator>
);

export const ProfileStack = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen
      name="ProfileMain"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ChangePassword"
      component={ChangePasswordScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="editPersonalInformation"
      component={PersonalInformationScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="PersonalInfo" 
      component={PersonalInfoScreen}
      options={{ headerShown: false  }}
    />
    <Stack.Screen
      name="ShippingAddresses"
      component={ShippingAddressesScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="EditAddress"
      component={EditAddressScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PaymentMethods"
      component={PaymentMethodsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="OrderHistory"
      component={OrderHistoryScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Wishlist"
      component={WishlistScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="HelpSupport"
      component={HelpSupportScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="NotificationSchedule"
      component={NotificationScheduleScreen}
      options={{ title: "Quiet Hours" }}
    />
    <Stack.Screen
      name="ContactUs"
      component={ContactScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="About"
      component={AboutUsScreen}
      options={{ headerShown: false }}
    />
    
    {/* Privacy & Security Stack */}
    <Stack.Screen
      name="PrivacySecurity"
      component={PrivacySecurityScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PrivacyPolicy"
      component={PrivacyPolicyScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="TermsOfService"
      component={TermsOfServiceScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="LoginActivity" 
      component={LoginActivityScreen}
      options={{ title: 'Login Activity' }}
    />
    <Stack.Screen 
      name="ShippingGuide" 
      component={ShippingGuideScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="ReturnPolicy" 
      component={ReturnPolicyScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="WarrantyInfo" 
      component={WarrantyInfoScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
