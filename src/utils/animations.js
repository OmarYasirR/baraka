import { Animated } from 'react-native';

export const fadeIn = (value, duration = 300) => {
  return Animated.timing(value, {
    toValue: 1,
    duration,
    useNativeDriver: true,
  });
};

export const fadeOut = (value, duration = 300) => {
  return Animated.timing(value, {
    toValue: 0,
    duration,
    useNativeDriver: true,
  });
};

export const slideIn = (value, from = 'bottom', duration = 300) => {
  const initialValue = from === 'bottom' ? 100 : from === 'top' ? -100 : 0;
  return Animated.timing(value, {
    toValue: 0,
    duration,
    useNativeDriver: true,
  });
};

export const slideOut = (value, to = 'bottom', duration = 300) => {
  const finalValue = to === 'bottom' ? 100 : to === 'top' ? -100 : 0;
  return Animated.timing(value, {
    toValue: finalValue,
    duration,
    useNativeDriver: true,
  });
};

export const scale = (value, toValue = 1.1, duration = 200) => {
  return Animated.timing(value, {
    toValue,
    duration,
    useNativeDriver: true,
  });
};

export const bounce = (value) => {
  return Animated.sequence([
    Animated.timing(value, {
      toValue: 1.1,
      duration: 150,
      useNativeDriver: true,
    }),
    Animated.timing(value, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }),
  ]);
};

// Combined animations
export const fadeInUp = (opacity, translateY) => {
  return Animated.parallel([
    fadeIn(opacity),
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }),
  ]);
};

export const fadeOutDown = (opacity, translateY) => {
  return Animated.parallel([
    fadeOut(opacity),
    Animated.timing(translateY, {
      toValue: 100,
      duration: 300,
      useNativeDriver: true,
    }),
  ]);
};