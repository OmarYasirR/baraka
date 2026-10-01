import { StyleSheet } from 'react-native';

export const tailwind = {
  // Container styles
  container: 'flex-1',
  containerCenter: 'flex-1 justify-center items-center',
  
  // Text styles
  text: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  },
  
  textWeight: {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
  
  // Color styles
  textColor: {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600',
    white: 'text-white',
    black: 'text-black',
  },
  
  bgColor: {
    primary: 'bg-blue-600',
    secondary: 'bg-gray-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    error: 'bg-red-600',
    white: 'bg-white',
    gray: {
      50: 'bg-gray-50',
      100: 'bg-gray-100',
      200: 'bg-gray-200',
    },
  },
  
  borderColor: {
    primary: 'border-blue-600',
    secondary: 'border-gray-600',
    success: 'border-green-600',
    warning: 'border-yellow-600',
    error: 'border-red-600',
    gray: {
      200: 'border-gray-200',
      300: 'border-gray-300',
    },
  },
  
  // Spacing
  spacing: {
    xs: 'p-2',
    sm: 'p-3',
    base: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  },
  
  margin: {
    xs: 'm-2',
    sm: 'm-3',
    base: 'm-4',
    lg: 'm-6',
    xl: 'm-8',
  },
  
  // Flex
  flex: {
    center: 'justify-center items-center',
    between: 'justify-between',
    around: 'justify-around',
    start: 'justify-start',
    end: 'justify-end',
  },
  
  // Shadow
  shadow: {
    sm: 'shadow-sm',
    base: 'shadow',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  },
  
  // Border radius
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    base: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full',
  },
  
  // Components
  card: 'bg-white rounded-2xl shadow-sm',
  button: {
    base: 'rounded-2xl items-center justify-center',
    sizes: {
      sm: 'px-3 py-2',
      md: 'px-4 py-3',
      lg: 'px-6 py-4',
    },
    variants: {
      primary: 'bg-blue-600',
      secondary: 'bg-gray-600',
      outline: 'bg-transparent border border-gray-300',
      ghost: 'bg-transparent',
    },
  },
  
  input: 'bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200',
};

// React Native StyleSheet equivalents
export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  shadowMd: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  shadowLg: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
});