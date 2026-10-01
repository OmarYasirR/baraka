// src/styles/colors.js - Comprehensive Color System for AutoParts Pro

/**
 * 🎨 Baraka Color System
 * 
 * Primary: Professional blue for trust and reliability
 * Secondary: Automotive red for energy and action
 * Neutral: Balanced grays for text and backgrounds
 * Semantic: Clear status colors for user feedback
 */

// ===== CORE COLOR PALETTE =====
export const colors = {
  // ===== PRIMARY COLORS =====
  primary: {
    // Main brand blue - Trust, Professionalism, Reliability
    50: '#f0f9ff',   // Lightest blue
    100: '#e0f2fe',  // Very light blue
    200: '#bae6fd',  // Light blue
    300: '#7dd3fc',  // Soft blue
    400: '#38bdf8',  // Medium blue
    500: '#0ea5e9',  // Brand blue ★
    600: '#0284c7',  // Dark blue
    700: '#0369a1',  // Darker blue
    800: '#075985',  // Very dark blue
    900: '#0c4a6e',  // Deepest blue
  },

  // ===== SECONDARY COLORS =====
  secondary: {
    // Automotive red - Energy, Action, Urgency
    50: '#fef2f2',   // Lightest red
    100: '#fee2e2',  // Very light red
    200: '#fecaca',  // Light red
    300: '#fca5a5',  // Soft red
    400: '#f87171',  // Medium red
    500: '#ef4444',  // Brand red ★
    600: '#dc2626',  // Dark red
    700: '#b91c1c',  // Darker red
    800: '#991b1b',  // Very dark red
    900: '#7f1d1d',  // Deepest red
  },

  // ===== ACCENT COLORS =====
  accent: {
    // Success green - Growth, Success, Confirmation
    green: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',  // Success green ★
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },

    // Warning orange - Attention, Caution, Warning
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',  // Warning orange ★
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },

    // Premium gold - Premium features, Highlights
    gold: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',  // Premium gold ★
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },

    // Professional purple - Premium, Luxury
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',  // Premium purple ★
      600: '#9333ea',
      700: '#7c3aed',
      800: '#6b21a8',
      900: '#581c87',
    },
  },

  // ===== NEUTRAL COLORS =====
  neutral: {
    // True grays - Text, Backgrounds, Borders
    50: '#fafafa',   // Lightest gray
    100: '#f4f4f5',  // Very light gray
    200: '#e4e4e7',  // Light gray
    300: '#d4d4d8',  // Medium light gray
    400: '#a1a1aa',  // Medium gray
    500: '#71717a',  // Base gray ★
    600: '#52525b',  // Dark gray
    700: '#3f3f46',  // Darker gray
    800: '#27272a',  // Very dark gray
    900: '#18181b',  // Deepest gray
  },

  // ===== SEMANTIC COLORS =====
  semantic: {
    // Success - Positive actions, Completion
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',  // Success ★
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },

    // Warning - Caution, Attention needed
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',  // Warning ★
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },

    // Error - Destructive actions, Problems
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',  // Error ★
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },

    // Info - Information, Status updates
    info: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',  // Info ★
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
  },

  // ===== BACKGROUND COLORS =====
  background: {
    primary: '#ffffff',      // Main background
    secondary: '#f8fafc',    // Secondary background
    tertiary: '#f1f5f9',     // Tertiary background
    inverse: '#0f172a',      // Dark background
    overlay: 'rgba(0, 0, 0, 0.5)', // Overlay background
  },

  // ===== TEXT COLORS =====
  text: {
    primary: '#1e293b',      // Main text color
    secondary: '#475569',    // Secondary text
    tertiary: '#64748b',     // Tertiary text
    light: '#94a3b8',        // Light text
    inverse: '#ffffff',      // Text on dark backgrounds
    disabled: '#cbd5e1',     // Disabled text
    placeholder: '#9ca3af',  // Placeholder text
  },

  // ===== BORDER COLORS =====
  border: {
    light: '#e2e8f0',        // Light borders
    medium: '#cbd5e1',       // Medium borders
    dark: '#94a3b8',         // Dark borders
    focus: '#0ea5e9',        // Focus state
    error: '#ef4444',        // Error state
  },

  // ===== STATE COLORS =====
  state: {
    hover: '#f1f5f9',        // Hover state
    active: '#e2e8f0',       // Active state
    selected: '#dbeafe',     // Selected state
    focus: '#3b82f6',        // Focus ring
    disabled: '#f8fafc',     // Disabled state
  },
};

// ===== COLOR CONSTANTS (Quick Access) =====
export const colorConstants = {
  // Primary Colors
  primary: colors.primary[500],
  primaryDark: colors.primary[700],
  primaryLight: colors.primary[300],

  // Secondary Colors
  secondary: colors.secondary[500],
  secondaryDark: colors.secondary[700],
  secondaryLight: colors.secondary[300],

  // Accent Colors
  success: colors.accent.green[500],
  warning: colors.accent.orange[500],
  premium: colors.accent.gold[500],
  purple: colors.accent.purple[500],

  // Semantic Colors
  error: colors.semantic.error[500],
  info: colors.semantic.info[500],

  // Neutral Colors
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',

  // Application Colors
  background: colors.background.primary,
  surface: colors.background.secondary,
  onBackground: colors.text.primary,
  onSurface: colors.text.secondary,
};

// ===== THEME VARIATIONS =====
export const themeColors = {
  // Light Theme (Default)
  light: {
    ...colors,
    background: {
      ...colors.background,
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
    },
    text: {
      ...colors.text,
      primary: '#1e293b',
      secondary: '#475569',
    },
    border: {
      ...colors.border,
      light: '#e2e8f0',
    },
  },

  // Dark Theme
  dark: {
    ...colors,
    background: {
      primary: '#0f172a',
      secondary: '#1e293b',
      tertiary: '#334155',
      inverse: '#ffffff',
      overlay: 'rgba(255, 255, 255, 0.1)',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
      tertiary: '#94a3b8',
      light: '#64748b',
      inverse: '#0f172a',
      disabled: '#475569',
      placeholder: '#64748b',
    },
    border: {
      light: '#334155',
      medium: '#475569',
      dark: '#64748b',
      focus: '#38bdf8',
      error: '#f87171',
    },
    state: {
      hover: '#1e293b',
      active: '#334155',
      selected: '#1e40af',
      focus: '#60a5fa',
      disabled: '#1e293b',
    },
  },

  // Automotive Theme (Red Accent)
  automotive: {
    ...colors,
    primary: {
      ...colors.secondary, // Use red as primary for automotive theme
    },
    background: {
      ...colors.background,
      primary: '#ffffff',
      secondary: '#fef2f2', // Red tinted background
      tertiary: '#fecaca',
    },
  },

  // Professional Theme (Blue Focus)
  professional: {
    ...colors,
    primary: {
      ...colors.primary, // Strong blue focus
    },
    background: {
      ...colors.background,
      primary: '#ffffff',
      secondary: '#f0f9ff', // Blue tinted background
      tertiary: '#e0f2fe',
    },
  },
};

// ===== COMPONENT-SPECIFIC COLOR SCHEMES =====
export const componentColors = {
  // Button Color Schemes
  button: {
    primary: {
      background: colors.primary[500],
      text: colors.text.inverse,
      border: colors.primary[500],
      hover: colors.primary[600],
      active: colors.primary[700],
    },
    secondary: {
      background: colors.secondary[500],
      text: colors.text.inverse,
      border: colors.secondary[500],
      hover: colors.secondary[600],
      active: colors.secondary[700],
    },
    outline: {
      background: 'transparent',
      text: colors.text.primary,
      border: colors.border.medium,
      hover: colors.state.hover,
      active: colors.state.active,
    },
    ghost: {
      background: 'transparent',
      text: colors.primary[500],
      border: 'transparent',
      hover: colors.primary[50],
      active: colors.primary[100],
    },
  },

  // Input Color Schemes
  input: {
    default: {
      background: colors.background.primary,
      text: colors.text.primary,
      border: colors.border.light,
      placeholder: colors.text.placeholder,
    },
    focused: {
      background: colors.background.primary,
      text: colors.text.primary,
      border: colors.border.focus,
      placeholder: colors.text.placeholder,
    },
    error: {
      background: colors.semantic.error[50],
      text: colors.text.primary,
      border: colors.border.error,
      placeholder: colors.text.placeholder,
    },
    disabled: {
      background: colors.state.disabled,
      text: colors.text.disabled,
      border: colors.border.light,
      placeholder: colors.text.disabled,
    },
  },

  // Card Color Schemes
  card: {
    default: {
      background: colors.background.primary,
      border: colors.border.light,
    },
    elevated: {
      background: colors.background.primary,
      border: colors.border.light,
    },
    filled: {
      background: colors.background.secondary,
      border: 'transparent',
    },
  },

  // Navigation Color Schemes
  navigation: {
    tabBar: {
      background: colors.background.primary,
      border: colors.border.light,
      active: colors.primary[500],
      inactive: colors.text.tertiary,
    },
    header: {
      background: colors.background.primary,
      border: colors.border.light,
      text: colors.text.primary,
    },
  },
};

// ===== GRADIENT DEFINITIONS =====
export const gradients = {
  primary: ['#0ea5e9', '#0284c7'],
  secondary: ['#ef4444', '#dc2626'],
  success: ['#22c55e', '#16a34a'],
  premium: ['#f59e0b', '#d97706'],
  dark: ['#1e293b', '#0f172a'],
  light: ['#ffffff', '#f8fafc'],
};

// ===== UTILITY FUNCTIONS =====

/**
 * Get color value by path
 * @param {string} path - Color path (e.g., 'primary.500', 'semantic.error.500')
 * @returns {string} Color value
 */
export const getColor = (path) => {
  const pathArray = path.split('.');
  let result = colors;
  
  for (const key of pathArray) {
    if (result[key] === undefined) {
      console.warn(`Color not found: ${path}`);
      return colors.primary[500]; // Fallback color
    }
    result = result[key];
  }
  
  return result;
};

/**
 * Get color with opacity
 * @param {string} color - Base color
 * @param {number} opacity - Opacity value (0-1)
 * @returns {string} Color with opacity
 */
export const withOpacity = (color, opacity) => {
  // Convert hex to rgba
  if (color.startsWith('#')) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  return color;
};

/**
 * Get theme colors
 * @param {string} theme - Theme name ('light', 'dark', 'automotive', 'professional')
 * @returns {object} Theme colors object
 */
export const getTheme = (theme = 'light') => {
  return themeColors[theme] || themeColors.light;
};

/**
 * Check if color is light
 * @param {string} color - Color to check
 * @returns {boolean} True if color is light
 */
export const isLightColor = (color) => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128;
};

export const theme = {
  praimary: colors.secondary[600],
  background: colors.secondary[100]
}

/**
 * Get contrasting text color
 * @param {string} backgroundColor - Background color
 * @returns {string} Contrasting text color
 */
export const getContrastText = (backgroundColor) => {
  return isLightColor(backgroundColor) ? colors.text.primary : colors.text.inverse;
};

// ===== EXPORTS =====
export default colors;

// ===== USAGE EXAMPLES =====
/*
// Basic usage
import { colors, colorConstants } from '../styles/colors';

// Using color constants
const primaryColor = colorConstants.primary;
const errorColor = colorConstants.error;

// Using color scales
const lightBlue = colors.primary[100];
const darkBlue = colors.primary[800];

// Using semantic colors
const successColor = colors.semantic.success[500];
const warningColor = colors.semantic.warning[500];

// Using utility functions
const colorWithOpacity = withOpacity(colors.primary[500], 0.5);
const theme = getTheme('dark');
const contrastText = getContrastText('#ffffff');
*/