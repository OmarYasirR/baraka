import React, { useEffect } from 'react';
import { Text as RNText } from 'react-native';

export const Text = ({ className = "", ...props }) => {
    
  
  
  return (
    <RNText 
      className={`font-tajawal ${className}`}
      {...props}
    />
  );
};