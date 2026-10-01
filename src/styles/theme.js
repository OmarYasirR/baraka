import { COLORS, SIZES, SPACING } from '../utils/constants';

export const theme = {
  colors: {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    success: COLORS.success,
    warning: COLORS.warning,
    error: COLORS.error,
    text: {
      primary: COLORS.gray[800],
      secondary: COLORS.gray[600],
      light: COLORS.gray[500],
      inverse: '#FFFFFF',
    },
    background: {
      primary: '#FFFFFF',
      secondary: COLORS.gray[50],
      overlay: 'rgba(0, 0, 0, 0.5)',
    },
    border: {
      light: COLORS.gray[200],
      medium: COLORS.gray[300],
    },
  },
  
  typography: {
    h1: {
      fontSize: SIZES['3xl'],
      fontWeight: 'bold',
      lineHeight: 40,
    },
    h2: {
      fontSize: SIZES['2xl'],
      fontWeight: 'bold',
      lineHeight: 32,
    },
    h3: {
      fontSize: SIZES.xl,
      fontWeight: '600',
      lineHeight: 28,
    },
    body: {
      large: {
        fontSize: SIZES.lg,
        lineHeight: 24,
      },
      medium: {
        fontSize: SIZES.base,
        lineHeight: 22,
      },
      small: {
        fontSize: SIZES.sm,
        lineHeight: 20,
      },
      xsmall: {
        fontSize: SIZES.xs,
        lineHeight: 16,
      },
    },
    weight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  
  spacing: {
    xs: SPACING.xs,
    sm: SPACING.sm,
    md: SPACING.base,
    lg: SPACING.lg,
    xl: SPACING.xl,
    '2xl': SPACING['2xl'],
  },
  
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 20,
    full: 9999,
  },
  
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 3,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 6,
    },
  },
  
  components: {
    button: {
      sizes: {
        sm: {
          paddingVertical: SPACING.xs,
          paddingHorizontal: SPACING.sm,
          fontSize: SIZES.sm,
        },
        md: {
          paddingVertical: SPACING.sm,
          paddingHorizontal: SPACING.md,
          fontSize: SIZES.base,
        },
        lg: {
          paddingVertical: SPACING.md,
          paddingHorizontal: SPACING.lg,
          fontSize: SIZES.lg,
        },
      },
      variants: {
        primary: {
          backgroundColor: COLORS.primary[600],
          color: '#FFFFFF',
        },
        secondary: {
          backgroundColor: COLORS.secondary[600],
          color: '#FFFFFF',
        },
        outline: {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: COLORS.gray[300],
          color: COLORS.gray[700],
        },
        ghost: {
          backgroundColor: 'transparent',
          color: COLORS.primary[600],
        },
      },
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      padding: SPACING.lg,
    },
    input: {
      backgroundColor: COLORS.gray[50],
      borderWidth: 1,
      borderColor: COLORS.gray[200],
      borderRadius: 12,
      paddingHorizontal: SPACING.md,
      paddingVertical: SPACING.sm,
      fontSize: SIZES.base,
    },
  },
};

// Utility functions for theme
export const getThemeColor = (colorPath) => {
  const path = colorPath.split('.');
  let result = theme.colors;
  
  for (const key of path) {
    result = result[key];
    if (!result) return undefined;
  }
  
  return result;
};

export const getThemeSpacing = (size) => {
  return theme.spacing[size] || SPACING.base;
};

export const getThemeTypography = (type, variant = 'medium') => {
  return theme.typography[type]?.[variant] || theme.typography.body.medium;
};

export default theme;