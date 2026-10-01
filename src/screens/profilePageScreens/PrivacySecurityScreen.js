import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const PrivacySecurityScreen = () => {
  const navigation = useNavigation();

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    biometricLogin: false,
    activityAlerts: true,
    dataSharing: false,
    personalizedAds: false,
    locationServices: true,
  });

  const toggleSetting = (setting) => {
    setSecuritySettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const SecuritySection = ({ title, settings }) => (
    <View className="mb-6">
      <Text className="text-lg font-tajawal-bold text-gray-800 mb-4 text-right">{title}</Text>
      <View className="bg-white rounded-2xl shadow-sm border border-gray-200">
        {settings.map((setting, index) => (
          <View key={setting.key || setting.title}>
            <TouchableOpacity
              className={`flex-row-reverse items-center justify-between px-4 py-4 ${
                index !== settings.length - 1 ? 'border-b border-gray-100' : ''
              }`}
              onPress={setting.onPress || (() => toggleSetting(setting.key))}
            >
              <View className="flex-1">
                <Text className="text-gray-800 font-tajawal-medium text-right">{setting.title}</Text>
                <Text className="text-gray-500 text-sm mt-1 font-tajawal text-right">
                  {setting.description}
                </Text>
              </View>
              {setting.type === 'switch' ? (
                <Switch
                  value={securitySettings[setting.key]}
                  onValueChange={() => toggleSetting(setting.key)}
                  trackColor={{ false: '#f1f5f9', true: '#dbeafe' }}
                  thumbColor={securitySettings[setting.key] ? '#2563eb' : '#f8fafc'}
                />
              ) : (
                <Text className="text-gray-400 font-tajawal">←</Text>
              )}
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );

  const accountSecurity = [
    {
      key: 'twoFactorAuth',
      title: 'المصادقة الثنائية',
      description: 'أضف طبقة إضافية من الأمان إلى حسابك',
      type: 'switch',
    },
    {
      key: 'biometricLogin',
      title: 'تسجيل الدخول بالبصمة',
      description: 'استخدم بصمة الإصبع أو التعرف على الوجه لتسجيل الدخول',
      type: 'switch',
    },
    {
      title: 'تغيير كلمة المرور',
      description: 'قم بتحديث كلمة المرور الخاصة بك بانتظام',
      onPress: () => navigation.navigate('ChangePassword'),
    },
    {
      title: 'نشاط تسجيل الدخول',
      description: 'راجع نشاط الحساب والأجهزة الحديثة',
      onPress: () => navigation.navigate('LoginActivity'),
    },
  ];

  const privacySettings = [
    {
      key: 'dataSharing',
      title: 'مشاركة البيانات',
      description: 'تحكم في كيفية مشاركة بياناتك مع الشركاء',
      type: 'switch',
    },
    {
      key: 'personalizedAds',
      title: 'الإعلانات المخصصة',
      description: 'شاهد إعلانات تعتمد على اهتماماتك ومشترياتك',
      type: 'switch',
    },
    {
      key: 'locationServices',
      title: 'خدمات الموقع',
      description: 'استخدم موقعك لتحسين تقديرات التوصيل',
      type: 'switch',
    },
    {
      title: 'سياسة الخصوصية',
      description: 'راجع ممارسات الخصوصية والسياسات الخاصة بنا',
      onPress: () => navigation.navigate('PrivacyPolicy'),
    },
  ];

  const dataManagement = [
    {
      title: 'تحميل بياناتك',
      description: 'احصل على نسخة من بياناتك الشخصية',
      onPress: () => navigation.navigate('DataExport'),
    },
    {
      title: 'حذف الحساب',
      description: 'احذف حسابك وبياناتك نهائيًا',
      onPress: () => {
        Alert.alert(
          'حذف الحساب',
          'لا يمكن التراجع عن هذا الإجراء. سيتم حذف جميع بياناتك نهائيًا.',
          [
            { text: 'إلغاء', style: 'cancel' },
            {
              text: 'حذف الحساب',
              style: 'destructive',
              onPress: () => navigation.navigate('AccountDeletion'),
            },
          ]
        );
      },
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header title="الخصوصية والأمان" showBack={true} showCart={false} />

      <ScrollView className="flex-1 p-6">
        <Text className="text-gray-600 mb-6 text-right font-tajawal">
          قم بإدارة إعدادات الخصوصية وحماية حسابك.
        </Text>

        <SecuritySection title="أمان الحساب" settings={accountSecurity} />

        <SecuritySection title="إعدادات الخصوصية" settings={privacySettings} />

        <SecuritySection title="إدارة البيانات" settings={dataManagement} />

        {/* حالة الأمان */}
        <View className="bg-green-50 rounded-2xl p-4 mb-6 border border-green-200">
          <View className="flex-row-reverse items-start">
            <Text className="text-green-600 text-lg ml-2 font-tajawal">✓</Text>
            <View className="flex-1">
              <Text className="text-green-800 font-tajawal-medium mb-1 text-right">
                حالة الأمان جيدة
              </Text>
              <Text className="text-green-700 text-sm font-tajawal text-right">
                حسابك محمي بالمصادقة الثنائية والمراقبة الأمنية المنتظمة.
              </Text>
            </View>
          </View>
        </View>

        {/* الإجراءات السريعة */}
        <View className="flex-row-reverse space-x-3 space-x-reverse mb-6">
          <Button
            title="فحص الأمان"
            variant="outline"
            icon="shield-checkmark"
            onPress={() => navigation.navigate('SecurityCheckup')}
            className="flex-1"
          />
          <Button
            title="دليل الخصوصية"
            variant="outline"
            icon="document-text"
            onPress={() => navigation.navigate('PrivacyGuide')}
            className="flex-1"
          />
        </View>

        {/* قسم المساعدة */}
        <View className="bg-blue-50 rounded-2xl p-4 mb-9">
          <Text className="text-blue-800 font-tajawal-medium mb-2 text-right">تحتاج مساعدة؟</Text>
          <Text className="text-blue-700 text-sm font-tajawal text-right">
            إذا لاحظت أي نشاط مشبوه في حسابك، تواصل مع فريق الدعم فورًا.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacySecurityScreen;
