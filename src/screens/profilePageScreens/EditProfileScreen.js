import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/useAuth';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import { validateEmail, validatePhone } from '../../utils/helpers';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const { user, updateProfile, isLoading } = useAuth();
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  });
  
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    try {
      const result = await updateProfile(formData);
      
      if (result.success) {
        Alert.alert('Success', 'Profile updated successfully!');
        navigation.goBack();
      } else {
        Alert.alert('Error', result.error || 'Failed to update profile');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile. Please try again.');
    }
  };

  const handleCancel = () => {
    // Reset form to original values
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
    });
    setErrors({});
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const hasChanges = () => {
    return (
      formData.name !== user?.name ||
      formData.email !== user?.email ||
      formData.phone !== user?.phone
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header 
        title="Edit Profile"
        showBack={true}
        onBackPress={() => navigation.goBack()}
      />
      
      <ScrollView 
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Profile Photo Section */}
        <View className="items-center py-6 bg-white border-b border-gray-200">
          <View className="relative">
            <Image 
              source={{ uri: user?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150' }}
              className="w-24 h-24 rounded-full"
            />
            <TouchableOpacity 
              className="absolute bottom-0 right-0 bg-blue-600 w-10 h-10 rounded-full items-center justify-center border-2 border-white"
              onPress={() => Alert.alert('Coming Soon', 'Photo upload feature will be available soon!')}
            >
              <Icon name="camera" size={20} color="white" />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity 
            className="mt-3"
            onPress={() => Alert.alert('Coming Soon', 'Photo upload feature will be available soon!')}
          >
            <Text className="text-blue-600 font-semibold">Change Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Form Section */}
        <View className="p-6">
          {/* Personal Information */}
          <View className="mb-6">
            <Text className="text-lg font-bold text-gray-800 mb-4">Personal Information</Text>
            
            {/* Name Field */}
            <View className="mb-4">
              <Text className="text-gray-700 font-medium mb-2">Full Name</Text>
              <View className={`bg-white rounded-2xl px-4 py-3 border ${
                errors.name ? 'border-red-500' : 'border-gray-200'
              }`}>
                <TextInput
                  value={formData.name}
                  onChangeText={(value) => handleChange('name', value)}
                  placeholder="Enter your full name"
                  className="text-gray-800 text-base"
                  editable={!isLoading}
                />
              </View>
              {errors.name && (
                <Text className="text-red-500 text-sm mt-1">{errors.name}</Text>
              )}
            </View>

            {/* Email Field */}
            <View className="mb-4">
              <Text className="text-gray-700 font-medium mb-2">Email Address</Text>
              <View className={`bg-white rounded-2xl px-4 py-3 border ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              }`}>
                <TextInput
                  value={formData.email}
                  onChangeText={(value) => handleChange('email', value)}
                  placeholder="Enter your email address"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className="text-gray-800 text-base"
                  editable={!isLoading}
                />
              </View>
              {errors.email && (
                <Text className="text-red-500 text-sm mt-1">{errors.email}</Text>
              )}
            </View>

            {/* Phone Field */}
            <View className="mb-4">
              <Text className="text-gray-700 font-medium mb-2">Phone Number</Text>
              <View className={`bg-white rounded-2xl px-4 py-3 border ${
                errors.phone ? 'border-red-500' : 'border-gray-200'
              }`}>
                <TextInput
                  value={formData.phone}
                  onChangeText={(value) => handleChange('phone', value)}
                  placeholder="Enter your phone number"
                  keyboardType="phone-pad"
                  className="text-gray-800 text-base"
                  editable={!isLoading}
                />
              </View>
              {errors.phone && (
                <Text className="text-red-500 text-sm mt-1">{errors.phone}</Text>
              )}
            </View>
          </View>

          {/* Account Settings */}
          <View className="mb-6">
            <Text className="text-lg font-bold text-gray-800 mb-4">Account Settings</Text>
            
            <TouchableOpacity 
              className="flex-row items-center justify-between bg-white rounded-2xl p-4 mb-3 shadow-sm"
              onPress={() => navigation.navigate('ChangePassword')}
            >
              <View className="flex-row items-center">
                <Icon name="lock-closed" size={20} color="#374151" />
                <Text className="text-gray-800 font-medium ml-3">Change Password</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#9ca3af" />
            </TouchableOpacity>

            <TouchableOpacity 
              className="flex-row items-center justify-between bg-white rounded-2xl p-4 mb-3 shadow-sm"
              onPress={() => Alert.alert('Coming Soon', 'Notification settings will be available soon!')}
            >
              <View className="flex-row items-center">
                <Icon name="notifications" size={20} color="#374151" />
                <Text className="text-gray-800 font-medium ml-3">Notification Settings</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#9ca3af" />
            </TouchableOpacity>

            <TouchableOpacity 
              className="flex-row items-center justify-between bg-white rounded-2xl p-4 shadow-sm"
              onPress={() => Alert.alert('Coming Soon', 'Privacy settings will be available soon!')}
            >
              <View className="flex-row items-center">
                <Icon name="shield-checkmark" size={20} color="#374151" />
                <Text className="text-gray-800 font-medium ml-3">Privacy & Security</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#9ca3af" />
            </TouchableOpacity>
          </View>

          {/* Danger Zone */}
          <View className="mb-6">
            <Text className="text-lg font-bold text-gray-800 mb-4">Danger Zone</Text>
            
            <TouchableOpacity 
              className="flex-row items-center justify-between bg-red-50 rounded-2xl p-4 border border-red-200"
              onPress={() => {
                Alert.alert(
                  'Delete Account',
                  'Are you sure you want to delete your account? This action cannot be undone.',
                  [
                    { text: 'Cancel', style: 'cancel' },
                    { 
                      text: 'Delete', 
                      style: 'destructive',
                      onPress: () => Alert.alert('Coming Soon', 'Account deletion feature will be available soon!')
                    }
                  ]
                );
              }}
            >
              <View className="flex-row items-center">
                <Icon name="trash" size={20} color="#ef4444" />
                <Text className="text-red-600 font-medium ml-3">Delete Account</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#ef4444" />
            </TouchableOpacity>
            
            <Text className="text-red-500 text-sm mt-2">
              Once you delete your account, all your data will be permanently lost.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Save/Cancel Buttons */}
      {hasChanges() && (
        <View className="bg-white border-t border-gray-200 p-6">
          <View className="flex-row space-x-3">
            <Button 
              title="Cancel"
              variant="outline"
              onPress={handleCancel}
              className="flex-1"
              disabled={isLoading}
            />
            <Button 
              title={isLoading ? "Saving..." : "Save Changes"}
              onPress={handleSave}
              className="flex-1"
              loading={isLoading}
              disabled={isLoading}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default EditProfileScreen;