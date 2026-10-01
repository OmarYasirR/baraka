import Icon from 'react-native-vector-icons/Ionicons';
import React, { useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Alert,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { Text } from '../../components/GlobalText';
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth";
import Header from "../../components/common/Header";
import Button from "../../components/common/Button";
import { validateEmail, validatePhone } from "../../utils/helpers";
import { theme } from "../../styles/colors";

const PersonalInformationScreen = () => {
  const navigation = useNavigation();
  const { user, updateProfile, isLoading } = useAuth();

  const [formData, setFormData] = useState({
    avatar: user?.avatar || '',
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    dateOfBirth: user?.dateOfBirth || "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "الرجاء ملء حقل الاسم الاول";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "الرجاء ملء حقل الاسم الثاني";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "الرجاء ادخال بريد صالح";
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "الرجاء ادخال رقم هاتف صالح";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    try {
      const result = await updateProfile(formData);

      if (result.success) {
        Alert.alert("Success", "Personal information updated successfully!");
        navigation.goBack();
      } else {
        Alert.alert("Error", result.error || "Failed to update information");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to update information. Please try again.");
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar backgroundColor={theme.background} />
      <Header title="تعديل الملف الشخصي" showCart={false} showBack={true} />

      <ScrollView className="flex-1 p-6">
        <Text className="text-gray-600 mb-6 font-tajawal-medium">
           تحديث المعلومات الشخصية وبيانات الاتصال
        </Text>
        <View className='items-center mb-3'>
          <View className="relative">
            <Image
              source={{
                uri:
                  user?.avatar ||
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
              }}
              className="w-24 h-24 rounded-full"
            />
            <TouchableOpacity
              className="absolute bottom-0 right-0 bg-red-600 w-10 h-10 rounded-full items-center justify-center border-2 border-white"
              onPress={() =>
                Alert.alert(
                  "Coming Soon",
                  "Photo upload feature will be available soon!"
                )
              }
            >
              <Icon name="camera" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        {/* First Name */}
        <View className="mb-4">
          <Text className="text-gray-700 font-tajawal-bold mb-2">الاسم الاول</Text>
          <View
            className={`bg-white rounded-2xl px-4 py-3 border ${
              errors.firstName ? "border-red-500" : "border-gray-200"
            }`}
          >
            <TextInput
              value={formData.firstName}
              onChangeText={(value) => handleChange("firstName", value)}
              placeholder="ادخل الاسم الاول"
              className="text-gray-800 font-tajawal"
              editable={!isLoading}
            />
          </View>
          {errors.firstName && (
            <Text className="text-red-500 text-sm mt-1">
              {errors.firstName}
            </Text>
          )}
        </View>

        {/* Last Name */}
        <View className="mb-4">
          <Text className="text-gray-700 font-tajawal-bold mb-2">الاسم الثاني</Text>
          <View
            className={`bg-white rounded-2xl px-4 py-3 border ${
              errors.lastName ? "border-red-500" : "border-gray-200"
            }`}
          >
            <TextInput
              value={formData.lastName}
              onChangeText={(value) => handleChange("lastName", value)}
              placeholder="ادخل الاسم الثاني"
              className="text-gray-800 font-tajawal"
              editable={!isLoading}
            />
          </View>
          {errors.lastName && (
            <Text className="text-red-500 text-sm mt-1">{errors.lastName}</Text>
          )}
        </View>

        {/* Email */}
        <View className="mb-4">
          <Text className="text-gray-700 font-tajawal-bold mb-2">البريد الالكتروني</Text>
          <View
            className={`bg-white rounded-2xl px-4 py-3 border ${
              errors.email ? "border-red-500" : "border-gray-200"
            }`}
          >
            <TextInput
              value={formData.email}
              onChangeText={(value) => handleChange("email", value)}
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

        {/* Phone */}
        <View className="mb-4">
          <Text className="text-gray-700 font-tajawal-bold mb-2">رقم الهاتف</Text>
          <View
            className={`bg-white rounded-2xl px-4 py-3 border ${
              errors.phone ? "border-red-500" : "border-gray-200"
            }`}
          >
            <TextInput
              value={formData.phone}
              onChangeText={(value) => handleChange("phone", value)}
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

        {/* Date of Birth */}
        <View className="mb-6">
          <Text className="text-gray-700 font-tajawal-bold mb-2">تاريخ الميلاد</Text>
          <View className="bg-white rounded-2xl px-4 py-3 border border-gray-200">
            <TextInput
              value={formData.dateOfBirth}
              onChangeText={(value) => handleChange("dateOfBirth", value)}
              placeholder="YYYY-MM-DD"
              className="text-gray-800 text-base"
              editable={!isLoading}
            />
          </View>
        </View>

        <Button
          title={isLoading ? "جاري الحفظ" : "حفظ"}
          onPress={handleSave}
          loading={isLoading}
          disabled={isLoading}
          className="mb-10"
          variant="error"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalInformationScreen;
