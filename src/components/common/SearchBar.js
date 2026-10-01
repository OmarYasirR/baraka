import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
const SearchBar = ({ 
  placeholder = "Search...", 
  value, 
  onChangeText, 
  onClear,
  onFocus,
  onSubmit,
  autoFocus = false,
  className = "",
  inputClassName = "",
  showClearButton = true,
}) => {
  const handleClear = () => {
    if (onClear) {
      onClear();
    } else {
      onChangeText?.('');
    }
  };



  return (
    <View className={`bg-white flex-row-reverse items-center rounded-2xl px-4 py-3 border border-gray-200 ${className}`}>
      <Icon name="search" size={20} color="#9ca3af" />
      
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onSubmitEditing={onSubmit}
        autoFocus={autoFocus}
        returnKeyType="search"
        clearButtonMode="never"
        className={`flex-1 ml-3 text-gray-800 text-base ${inputClassName} font-tajawal`}
        style={{ includeFontPadding: false }}
      />
      
      {showClearButton && value && value.length > 0 && (
        <TouchableOpacity 
          onPress={handleClear}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Icon name="close-circle" size={20} color="#9ca3af" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;