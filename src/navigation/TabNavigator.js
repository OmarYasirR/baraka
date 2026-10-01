import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeStack, CategoriesStack, CartStack, ProfileStack } from './StackNavigators';
import { useCart } from '../context/CartContext';
import {colors as Colors, theme } from '../styles/colors.js'

// Safe fallback colors in case the import fails
const safeColors = {
  primary: {
    600: '#0284c7',
    500: '#0ea5e9',
  },
  gray: {
    400: '#9ca3af',
    500: '#6b7280',
    900: '#111827',
  },
  background: {
    primary: 'bg-gray-50',
  },
  border: {
    light: '#e5e7eb',
  },
  white: '#ffffff',
};

// Try to import the actual colors, fallback to safeColors if it fails
let colors = safeColors;


const Tab = createBottomTabNavigator();

// Safe CustomTabBarIcon with null checks
const CustomTabBarIcon = ({ focused, iconName, label, badgeCount }) => {
  // Ensure all values have fallbacks
  const safeFocused = !!focused;
  const safeIconName = iconName || 'help-outline';
  const safeLabel = label || 'Tab';
  const safeBadgeCount = badgeCount || 0;

  // Safe color access with fallbacks
  const iconColor = safeFocused 
    ? '#ffffff'
    : safeColors.gray[500];
  
  const backgroundColor = safeFocused 
    ? theme.praimary 
    : 'transparent';

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ 
        position: 'relative',
        backgroundColor: backgroundColor, 
        borderRadius: 20, 
        padding: 8 
      }}>
        <Icon 
          name={safeIconName} 
          size={24} 
          color={iconColor} 
        />
        {safeBadgeCount > 0 && safeLabel === 'Cart' && (
          <View style={{
            position: 'absolute',
            top: -4,
            right: -4,
            backgroundColor: '#ef4444',
            borderRadius: 10,
            width: 20,
            height: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: colors.white || safeColors.white,
          }}>
            <Text style={{ color: colors.white || safeColors.white, fontSize: 10, fontWeight: 'bold' }}>
              {safeBadgeCount > 99 ? '99+' : safeBadgeCount}
            </Text>
          </View>
        )}
      </View>
      
      {/* Active Indicator */}
      {safeFocused && (
        <View style={{
          width: 4,
          height: 4,
          backgroundColor: theme.praimary,
          borderRadius: 2,
          marginTop: 4,
        }} />
      )}
    </View>
  );
};

export default function TabNavigator() {
  // Safe cart hook usage with error boundary
  let cartItemsCount = 0;
  try {
    const cartContext = useCart();
    // Check if getCartItemsCount exists and is a function
    if (cartContext && typeof cartContext.getCartItemsCount === 'function') {
      cartItemsCount = cartContext.getCartItemsCount();
    }
  } catch (error) {
    console.warn('Error accessing cart context:', error);
    cartItemsCount = 0;
  }

  const tabScreenOptions = ({ route }) => {
    // Safe tab bar style
    const tabBarStyle = {
      backgroundColor: colors.background?.primary || safeColors.background.primary,
      borderTopColor: colors.border?.light || safeColors.border.light,
      borderTopWidth: 1,
      height: 100,
      paddingBottom: 10,
      paddingTop: 8,
    };

    return {
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let label;

        // Ensure route.name exists
        const routeName = route?.name || 'Home';

        switch (routeName) {
          case 'Home':
            iconName = focused ? 'home' : 'home-outline';
            label = 'Home';
            break;
          case 'Categories':
            iconName = focused ? 'layers' : 'layers-outline';
            label = 'Browse';
            break;
          case 'Cart':
            iconName = focused ? 'cart' : 'cart-outline';
            label = 'Cart';
            break;
          case 'Profile':
            iconName = focused ? 'person' : 'person-outline';
            label = 'Profile';
            break;
          default:
            iconName = 'help-outline';
            label = 'Tab';
        }

        return (
          <CustomTabBarIcon
            focused={focused}
            iconName={iconName}
            label={label}
            badgeCount={routeName === 'Cart' ? cartItemsCount : 0}
          />
        );
      },
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: tabBarStyle,
    };
  };

  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Categories" component={CategoriesStack} />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}

// Safe PremiumTabNavigator
export const PremiumTabNavigator = () => {
  let cartItemsCount = 0;
  try {
    const cartContext = useCart();
    if (cartContext && typeof cartContext.getCartItemsCount === 'function') {
      cartItemsCount = cartContext.getCartItemsCount();
    }
  } catch (error) {
    console.warn('Error accessing cart context in premium tab:', error);
  }

  const premiumOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      switch (route.name) {
        case 'Home':
          iconName = focused ? 'home' : 'home-outline';
          break;
        case 'Categories':
          iconName = focused ? 'layers' : 'layers-outline';
          break;
        case 'Cart':
          iconName = focused ? 'cart' : 'cart-outline';;
          break;
        case 'Profile':
          iconName = focused ? 'person' : 'person-outline';
          break;
        default:
          iconName = 'help-outline';
      }

      return (
        <CustomTabBarIcon
          focused={focused}
            iconName={iconName}
            label={route.name}
            badgeCount={cartItemsCount}
        />
        // <View style={{
        //   backgroundColor: focused ? Colors.secondary[600] : 'transparent',
        //   borderRadius: 24,
        //   padding: 10,
        //   alignItems: 'center',
        //   justifyContent: 'center',
        // }}>
        //   <Icon name={iconName} size={24} color={focused ? '#ffffff' : '#1f2937'} />
        // </View>
      );
    },
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      backgroundColor: Colors.secondary[100],
      // borderRadius: 40,
      height: 66,
      // marginHorizontal: 20,
      marginBottom: 10,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
  });

  return (
    <Tab.Navigator screenOptions={premiumOptions}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Categories" component={CategoriesStack} />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};
  ;

// Export MinimalTabNavigator as same as default for now
export const MinimalTabNavigator = TabNavigator;