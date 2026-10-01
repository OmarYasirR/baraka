import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const navigation = useNavigation();

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('خطأ', 'الرجاء إدخال عنوان البريد الإلكتروني');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('خطأ', 'الرجاء إدخال بريد إلكتروني صالح');
      return;
    }

    setLoading(true);

    // محاكاة استدعاء API
    setTimeout(() => {
      setLoading(false);
      setEmailSent(true);
      Alert.alert('تم بنجاح', 'تم إرسال تعليمات إعادة تعيين كلمة المرور إلى بريدك الإلكتروني');
    }, 2000);
  };

  if (emailSent) {
    return (
      <View className="flex-1 bg-white">
        <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
          {/* Header */}
          <View className="pt-0 px-6">
            <TouchableOpacity 
              onPress={() => navigation.navigate('Login')}
              className="w-10 h-10 items-center justify-center rounded-full bg-gray-100 mb-6"
            >
              <Icon name="arrow-right" size={20} color="#374151" /> 
              {/* RTL direction uses arrow-right instead of arrow-left */}
            </TouchableOpacity>
          </View>

          {/* Success Content */}
          <View className="flex-1 px-6 justify-center items-center">
            <View className="items-center mb-8">
              <View className="w-24 h-24 bg-green-100 rounded-full items-center justify-center mb-6">
                <Icon name="check-circle" size={48} color="#10B981" />
              </View>
              <Text className="text-3xl font-tajawal-bold text-gray-900 text-center mb-3">
                تحقق من بريدك الإلكتروني
              </Text>
              <Text className="text-lg text-gray-600 text-center mb-2 font-tajawal">
                لقد أرسلنا تعليمات إعادة تعيين كلمة المرور إلى:
              </Text>
              <Text className="text-lg font-tajawal-bold text-red-600 mb-6">
                {email}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              className="w-full bg-red-600 rounded-2xl py-4 items-center mb-4"
            >
              <Text className="text-white text-lg font-tajawal-bold">
                العودة لتسجيل الدخول
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header */}
        <View className="pt-16 px-6">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="w-10 h-10 items-center justify-center rounded-full bg-gray-100 mb-6"
          >
            <Icon name="arrow-right" size={20} color="#374151" />
          </TouchableOpacity>
        </View>

        {/* Content */}
         <View className="flex-1 px-6 pt-8">
          <View className="items-center mb-10">
            <View className="w-20 h-20 bg-red-600 rounded-2xl items-center justify-center mb-4 shadow-lg">
              <Icon name="car-wrench" size={32} color="#FFFFFF" />
            </View>
            <Text className="text-3xl font-tajawal-bold text-gray-900 text-center mb-3">
              إعادة تعيين كلمة المرور
            </Text>
            <Text className="text-lg text-gray-600 text-center leading-6 font-tajawal">
              أدخل عنوان بريدك الإلكتروني وسنرسل لك تعليمات لإعادة تعيين كلمة المرور.
            </Text>
          </View>

          {/* Email Input */}
          <View className="mb-6">
            <Text className="text-gray-700 text-sm font-tajawal-bold mb-3 text-right">
              البريد الإلكتروني
            </Text>
            <View className="flex-row-reverse items-center bg-white rounded-2xl border-2 border-gray-200 px-4 py-4">
              <Icon name="email-outline" size={22} color="#64748b" />
              <TextInput
                className="flex-1 mr-3 text-gray-900 text-base font-tajawal"
                placeholder="أدخل بريدك الإلكتروني"
                placeholderTextColor="#94a3b8"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                autoFocus={true}
                textAlign="right"
              />
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            className={`w-full bg-red-600 rounded-2xl py-4 items-center shadow-lg mb-6 ${
              loading ? 'opacity-80' : 'active:bg-red-700'
            }`}
            onPress={handleResetPassword}
            disabled={loading}
          >
            <Text className="text-white text-lg font-tajawal-bold">
              {loading ? 'جارٍ الإرسال...' : 'إرسال تعليمات إعادة التعيين'}
            </Text>
          </TouchableOpacity>

          {/* Back to Login */}
          <View className="flex-row justify-center items-center">
            <Text className="text-gray-600 text-base font-tajawal">
              تذكرت كلمة المرور؟{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text className="text-red-600 font-tajawal-bold text-base">
                العودة لتسجيل الدخول
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;
