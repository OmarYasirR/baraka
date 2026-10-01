import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../../hooks/useAuth';
import Header from '../../components/common/Header';
import { useCustomAlert } from '../../hooks/useCustomAlert';
import { useNavigation } from '@react-navigation/native';
import colors, { theme } from '../../styles/colors.js';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const { logoutUser } = useAuth();
  const { showAlert, AlertComponent } = useCustomAlert();

  const [settings, setSettings] = useState({
    pushNotifications: true,
    emailNotifications: true,
    orderUpdates: true,
    promotions: false,
    darkMode: false,
    biometricLogin: true,
    savePaymentMethods: true,
    locationServices: true,
    personalizedAds: false,
    dataCollection: true,
  });

  const handleToggleSetting = (setting) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const handleClearCache = () => {
    showAlert({
      title: 'مسح الذاكرة المؤقتة',
      type: 'info',
      message: 'سيتم مسح جميع البيانات المؤقتة، مما قد يحسّن أداء التطبيق.',
      showCancel: true,
      confirmText: 'مسح',
      onConfirm: () => {
        setTimeout(() => {
          showAlert({
            title: 'مسح الذاكرة المؤقتة',
            message: 'تم مسح الذاكرة المؤقتة بنجاح!',
            showCancel: false,
            onConfirm: null,
          });
        }, 100);
      },
    });
  };

  const SettingItem = ({ icon, title, subtitle, value, onToggle, type = 'toggle' }) => (
    <View className="flex-row-reverse items-center justify-between py-4 pr-2 border-b border-gray-200">
      <View className="flex-row-reverse items-start flex-1">
        <Icon name={icon} size={24} color={theme.praimary} />
        <View className="flex-1 mr-2">
          <Text className="text-gray-800 font-tajawal-medium text-base text-right">{title}</Text>
          {subtitle && (
            <Text className="text-gray-500 text-sm mt-1 font-tajawal text-right">{subtitle}</Text>
          )}
        </View>
      </View>

      {type === 'toggle' ? (
        <Switch
          value={value}
          onValueChange={onToggle}
          trackColor={{ false: '#d1d5db', true: colors.secondary[200] }}
          thumbColor={value ? theme.praimary : '#f3f4f6'}
        />
      ) : (
        <Icon name="chevron-back" size={20} color={theme.praimary} />
      )}
    </View>
  );

  const SettingsSection = ({ title, children }) => (
    <View className="mb-8">
      <Text className="text-lg font-tajawal-bold text-gray-800 mb-4 text-right">{title}</Text>
      <View className="bg-white rounded-2xl shadow-sm border border-gray-200">{children}</View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header showBack={true} title="الإعدادات" showCart={false} />

      <ScrollView className="flex-1 p-6">
        {/* الإشعارات */}
        <SettingsSection title="الإشعارات">
          <SettingItem
            icon="notifications"
            title="إشعارات التطبيق"
            subtitle="استقبل إشعارات من التطبيق"
            value={settings.pushNotifications}
            onToggle={() => handleToggleSetting('pushNotifications')}
          />
          <SettingItem
            icon="mail"
            title="إشعارات البريد الإلكتروني"
            subtitle="استقبل التحديثات عبر البريد الإلكتروني"
            value={settings.emailNotifications}
            onToggle={() => handleToggleSetting('emailNotifications')}
          />
          <SettingItem
            icon="bag"
            title="تحديثات الطلبات"
            subtitle="تابع حالة الطلبات والشحن"
            value={settings.orderUpdates}
            onToggle={() => handleToggleSetting('orderUpdates')}
          />
          <SettingItem
            icon="megaphone"
            title="العروض والتخفيضات"
            subtitle="استقبل العروض والخصومات الخاصة"
            value={settings.promotions}
            onToggle={() => handleToggleSetting('promotions')}
          />
        </SettingsSection>

        {/* تفضيلات التطبيق */}
        <SettingsSection title="تفضيلات التطبيق">
          <SettingItem
            icon="moon"
            title="الوضع الداكن"
            subtitle="استخدم المظهر الداكن"
            value={settings.darkMode}
            onToggle={() => handleToggleSetting('darkMode')}
          />
          <SettingItem
            icon="finger-print"
            title="تسجيل الدخول بالبصمة"
            subtitle="استخدم بصمة الإصبع أو التعرف على الوجه"
            value={settings.biometricLogin}
            onToggle={() => handleToggleSetting('biometricLogin')}
          />
          <SettingItem
            icon="card"
            title="حفظ طرق الدفع"
            subtitle="احفظ معلومات الدفع لتسوق أسرع"
            value={settings.savePaymentMethods}
            onToggle={() => handleToggleSetting('savePaymentMethods')}
          />
          <SettingItem
            icon="location"
            title="خدمات الموقع"
            subtitle="تفعيل الميزات المعتمدة على الموقع"
            value={settings.locationServices}
            onToggle={() => handleToggleSetting('locationServices')}
          />
        </SettingsSection>

        {/* الخصوصية والأمان */}
        <SettingsSection title="الخصوصية والأمان">
          <SettingItem
            icon="shield"
            title="الإعلانات المخصصة"
            subtitle="عرض إعلانات تناسب اهتماماتك"
            value={settings.personalizedAds}
            onToggle={() => handleToggleSetting('personalizedAds')}
          />
          <SettingItem
            icon="analytics"
            title="جمع البيانات"
            subtitle="ساعدنا في تحسين التطبيق من خلال بيانات مجهولة"
            value={settings.dataCollection}
            onToggle={() => handleToggleSetting('dataCollection')}
          />
          <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
            <SettingItem icon="document-text" title="سياسة الخصوصية" type="navigation" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TermsOfService')}>
            <SettingItem icon="reader" title="شروط الاستخدام" type="navigation" />
          </TouchableOpacity>
        </SettingsSection>

        {/* الدعم */}
        <SettingsSection title="الدعم">
          <TouchableOpacity onPress={() => navigation.navigate('HelpSupport')}>
            <SettingItem icon="help-circle" title="المساعدة والدعم" type="navigation" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
            <SettingItem icon="chatbubble" title="اتصل بنا" type="navigation" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <SettingItem icon="information-circle" title="حول بركة" type="navigation" />
          </TouchableOpacity>
        </SettingsSection>

        {/* إجراءات التطبيق */}
        <SettingsSection title="إجراءات التطبيق">
          <TouchableOpacity onPress={() => handleClearCache()}>
            <SettingItem icon="refresh" title="مسح الذاكرة المؤقتة" type="navigation" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SettingItem icon="phone-portrait" title="إصدار التطبيق" subtitle="الإصدار 1.0.0" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('LanguageSettings')}>
            <SettingItem icon="globe-outline" title="اللغة" subtitle="العربية" />
          </TouchableOpacity>
        </SettingsSection>

        {/* معلومات التطبيق */}
        <View className="items-center mb-10">
          <Text className="text-gray-500 text-sm font-tajawal">بركة v1.0.0</Text>
          <Text className="text-gray-400 text-xs mt-1 font-tajawal">
            تم التطوير بكل ❤️ بواسطة عمر ديف
          </Text>
        </View>
      </ScrollView>
      <AlertComponent />
    </SafeAreaView>
  );
};

export default SettingsScreen;
