// src/screens/ChangePasswordScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const ChangePasswordScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Current password is required';
    }

    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChangePassword = async () => {
    if (!validateForm()) return;

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success', 'Password changed successfully!');
      navigation.goBack();
    }, 2000);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header 
        title="Change Password"
        showBack={true}
      />
      
      <ScrollView className="flex-1 p-6">
        <Text className="text-gray-600 mb-6">
          For security reasons, please enter your current password and then your new password.
        </Text>

        {/* Current Password */}
        <View className="mb-4">
          <Text className="text-gray-700 font-medium mb-2">Current Password</Text>
          <View className={`bg-white rounded-2xl px-4 py-3 border ${
            errors.currentPassword ? 'border-red-500' : 'border-gray-200'
          }`}>
            <TextInput
              value={formData.currentPassword}
              onChangeText={(value) => handleChange('currentPassword', value)}
              placeholder="Enter current password"
              secureTextEntry
              className="text-gray-800 text-base"
            />
          </View>
          {errors.currentPassword && (
            <Text className="text-red-500 text-sm mt-1">{errors.currentPassword}</Text>
          )}
        </View>

        {/* New Password */}
        <View className="mb-4">
          <Text className="text-gray-700 font-medium mb-2">New Password</Text>
          <View className={`bg-white rounded-2xl px-4 py-3 border ${
            errors.newPassword ? 'border-red-500' : 'border-gray-200'
          }`}>
            <TextInput
              value={formData.newPassword}
              onChangeText={(value) => handleChange('newPassword', value)}
              placeholder="Enter new password"
              secureTextEntry
              className="text-gray-800 text-base"
            />
          </View>
          {errors.newPassword && (
            <Text className="text-red-500 text-sm mt-1">{errors.newPassword}</Text>
          )}
        </View>

        {/* Confirm Password */}
        <View className="mb-6">
          <Text className="text-gray-700 font-medium mb-2">Confirm New Password</Text>
          <View className={`bg-white rounded-2xl px-4 py-3 border ${
            errors.confirmPassword ? 'border-red-500' : 'border-gray-200'
          }`}>
            <TextInput
              value={formData.confirmPassword}
              onChangeText={(value) => handleChange('confirmPassword', value)}
              placeholder="Confirm new password"
              secureTextEntry
              className="text-gray-800 text-base"
            />
          </View>
          {errors.confirmPassword && (
            <Text className="text-red-500 text-sm mt-1">{errors.confirmPassword}</Text>
          )}
        </View>

        <Text className="text-gray-500 text-sm mb-6">
          • Password must be at least 6 characters long
          {'\n'}• Use a combination of letters, numbers, and symbols for better security
        </Text>

        <Button 
          title={loading ? "Changing Password..." : "Change Password"}
          onPress={handleChangePassword}
          loading={loading}
          disabled={loading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;