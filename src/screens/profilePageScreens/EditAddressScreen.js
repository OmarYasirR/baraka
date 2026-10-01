import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const EditAddressScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { address } = route.params || {};
  
  const isEditing = !!address;
  
  const [formData, setFormData] = useState({
    title: address?.title || '',
    fullName: address?.fullName || '',
    street: address?.street || '',
    city: address?.city || '',
    state: address?.state || '',
    zipCode: address?.zipCode || '',
    country: address?.country || '',
    phone: address?.phone || '',
    isDefault: address?.isDefault || false,
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'عنوان العنوان مطلوب';
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'الاسم الكامل مطلوب';
    }

    if (!formData.street.trim()) {
      newErrors.street = 'عنوان الشارع مطلوب';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'المدينة مطلوبة';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'المنطقة مطلوبة';
    }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'الرمز البريدي مطلوب';
    } else if (!/^\d{5}$/.test(formData.zipCode)) {
      newErrors.zipCode = 'الرجاء إدخال رمز بريدي صحيح';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    setLoading(true);
    
    // محاكاة استدعاء API
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'تم بنجاح', 
        isEditing ? 'تم تحديث العنوان بنجاح!' : 'تم إضافة العنوان بنجاح!'
      );
      navigation.goBack();
    }, 1500);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

const InputField = React.memo(({ label, field, placeholder, keyboardType = 'default', value, onChange, error }) => (
  <View className="mb-4">
    <Text className="text-gray-700 font-tajawal-medium mb-2 text-right">{label}</Text>
    <View className={`bg-white rounded-2xl px-4 py-3 border ${
      error ? 'border-red-500' : 'border-gray-200'
    }`}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        keyboardType={keyboardType}
        className="text-gray-800 text-base text-right flex-1 font-tajawal"
        textAlign="right"
        cursorColor="#3B82F6"
        selectionColor="rgba(59, 130, 246, 0.2)"
      />
    </View>
    {error && (
      <Text className="text-red-500 text-sm mt-1 text-right font-tajawal">{error}</Text>
    )}
  </View>
));

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header 
        title={isEditing ? "تعديل العنوان" : "إضافة عنوان جديد"}
        showBack={true}
        showCart={false}
      />
      
      <ScrollView className="flex-1 p-6">
        <Text className="text-gray-600 mb-6 text-right font-tajawal-bold">
          {isEditing ? 'قم بتحديث معلومات العنوان الخاص بك.' : 'أضف عنوان شحن جديد لطلباتك.'}
        </Text>

        <InputField
          label="اسم العنوان"
          field="title"
          placeholder="المنزل، العمل، إلخ"
          className='font-tajawal'
        />

        <InputField
          label="الاسم الكامل"
          field="fullName"
          placeholder="أدخل الاسم الكامل"
        />

        <InputField
          label="عنوان الشارع"
          field="street"
          placeholder="أدخل عنوان الشارع"
        />

        <View className="flex-row-reverse space-x-reverse space-x-3">
          <View className="flex-1">
            <InputField
              label="المدينة"
              field="city"
              placeholder="المدينة"
            />
          </View>
          <View className="flex-1">
            <InputField
              label="المنطقة"
              field="state"
              placeholder="المنطقة"
            />
          </View>
        </View>

        <View className="flex-row-reverse space-x-reverse space-x-3">
          <View className="flex-1">
            <InputField
              label="الرمز البريدي"
              field="zipCode"
              placeholder="الرمز البريدي"
              keyboardType="numeric"
            />
          </View>
          <View className="flex-1">
            <View className="mb-4">
              <Text className="text-gray-700 font-tajawal-medium mb-2 text-right">الدولة</Text>
              <View className="bg-white rounded-2xl px-4 py-3 border border-gray-200">
                <TextInput
                  value={formData.country}
                  onChangeText={(value) => handleChange('country', value)}
                  placeholder="الدولة"
                  className="text-gray-800 text-base text-right"
                  textAlign="right"
                  cursorColor="#3B82F6"
                  selectionColor="rgba(59, 130, 246, 0.2)"
                />
              </View>
            </View>
          </View>
        </View>

        <InputField
          label="رقم الهاتف"
          field="phone"
          placeholder="رقم الهاتف"
          keyboardType="phone-pad"
        />

        {/* تبديل العنوان الافتراضي */}
        <TouchableOpacity 
          className="flex-row-reverse items-center justify-between bg-white rounded-2xl p-4 mb-6 border border-gray-200"
          onPress={() => handleChange('isDefault', !formData.isDefault)}
        >
          <View className="flex-1 mr-3">
            <Text className="text-gray-800 font-tajawal-medium text-right">تعيين كعنوان افتراضي</Text>
            <Text className="text-gray-500 text-sm mt-1 text-right font-tajawal">
              استخدام هذا العنوان كعنوان الشحن الرئيسي
            </Text>
          </View>
          <View className={`w-6 h-6 rounded-full border-2 items-center justify-center ${
            formData.isDefault ? 'bg-red-600 border-red-600' : 'border-red-200'
          }`}>
            {formData.isDefault && (
              <Text className="text-white text-xs">✓</Text>
            )}
          </View>
        </TouchableOpacity>

        <Button 
          title={loading ? "جاري الحفظ..." : (isEditing ? "تحديث العنوان" : "إضافة العنوان")}
          onPress={handleSave}
          loading={loading}
          disabled={loading}
          className='bg-orange-600 border-orange-800 mb-9'
        />

        {isEditing && (
          <Button 
            title="حذف العنوان"
            variant="error"
            onPress={() => {
              Alert.alert(
                'حذف العنوان',
                'هل أنت متأكد من أنك تريد حذف هذا العنوان؟',
                [
                  { text: 'إلغاء', style: 'cancel' },
                  { 
                    text: 'حذف', 
                    style: 'destructive',
                    onPress: () => {
                      Alert.alert('تم بنجاح', 'تم حذف العنوان بنجاح!');
                      navigation.goBack();
                    }
                  }
                ]
              );
            }}
            className="mt-3 mb-9"
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditAddressScreen;