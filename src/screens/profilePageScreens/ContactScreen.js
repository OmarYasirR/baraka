import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Header from '../../components/common/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/common/Button';
import { theme } from '../../styles/colors';

const ContactScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const contactMethods = [
    {
      icon: 'call',
      title: 'الدعم عبر الهاتف',
      details: '1-800-AUTO-PRO',
      description: 'دعم العملاء على مدار الساعة',
      action: 'اتصل الآن'
    },
    {
      icon: 'mail',
      title: 'الدعم عبر البريد الإلكتروني',
      details: 'support@autoparts-pro.com',
      description: 'نرد عادة خلال ساعتين',
      action: 'أرسل بريدًا إلكترونيًا'
    },
    {
      icon: 'chatbubble',
      title: 'الدردشة المباشرة',
      details: 'متاح على مدار الساعة',
      description: 'احصل على مساعدة فورية من خبرائنا',
      action: 'ابدأ الدردشة'
    },
    {
      icon: 'location',
      title: 'قم بزيارتنا',
      details: '123 طريق قطع الغيار',
      description: 'لوس أنجلوس، كاليفورنيا 90001',
      action: 'احصل على الاتجاهات'
    },
  ];

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      Alert.alert('خطأ', 'يرجى ملء جميع الحقول');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'تم إرسال الرسالة!',
        'شكرًا لتواصلك معنا. سنقوم بالرد خلال 24 ساعة.',
        [
          {
            text: 'حسنًا',
            onPress: () => {
              setFormData({ name: '', email: '', subject: '', message: '' });
            }
          }
        ]
      );
    }, 2000);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const ContactMethod = ({ method }) => (
    <TouchableOpacity className="bg-white rounded-2xl p-4 border border-gray-200 mb-4">
      <View className="flex-row items-center mb-3">
        <Icon name={method.icon} size={24} color={theme.praimary} />
        <View className="ml-3 flex-1">
          <Text className="font-tajawal-bold text-gray-800 text-lg text-right">{method.title}</Text>
          <Text className="text-gray-600 font-tajawal text-right">{method.description}</Text>
        </View>
      </View>
      <Text className="text-red-600 font-tajawal-bold mb-2 text-right">{method.details}</Text>
      <Text className="text-red-500 font-tajawal-medium text-right">{method.action}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header title="تواصل معنا" showBack={true} showCart={false} />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* طرق التواصل */}
        <View className="p-4">
          <Text className="text-lg font-tajawal-bold text-gray-800 mb-4 text-right">وسائل التواصل السريعة</Text>
          {contactMethods.map((method) => (
            <ContactMethod key={method.title} method={method} />
          ))}
        </View>

        {/* نموذج الاتصال */}
        <View className="p-4">
          <Text className="text-lg font-tajawal-bold text-gray-800 mb-4 text-right">أرسل لنا رسالة</Text>

          <View className="bg-white rounded-2xl p-4 border border-gray-200">
            {/* الاسم */}
            <View className="mb-4">
              <Text className="text-gray-700 font-tajawal-medium mb-2 text-right">الاسم الكامل</Text>
              <TextInput
                value={formData.name}
                onChangeText={(value) => handleChange('name', value)}
                placeholder="أدخل اسمك الكامل"
                className="bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200 text-right font-tajawal"
              />
            </View>

            {/* البريد الإلكتروني */}
            <View className="mb-4">
              <Text className="text-gray-700 font-tajawal-medium mb-2 text-right">البريد الإلكتروني</Text>
              <TextInput
                value={formData.email}
                onChangeText={(value) => handleChange('email', value)}
                placeholder="أدخل بريدك الإلكتروني"
                keyboardType="email-address"
                className="bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200 text-right font-tajawal"
              />
            </View>

            {/* الموضوع */}
            <View className="mb-4">
              <Text className="text-gray-700 font-tajawal-medium mb-2 text-right">الموضوع</Text>
              <TextInput
                value={formData.subject}
                onChangeText={(value) => handleChange('subject', value)}
                placeholder="ما هو سبب الرسالة؟"
                className="bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200 text-right font-tajawal"
              />
            </View>

            {/* الرسالة */}
            <View className="mb-6">
              <Text className="text-gray-700 font-tajawal-medium mb-2 text-right">الرسالة</Text>
              <TextInput
                value={formData.message}
                onChangeText={(value) => handleChange('message', value)}
                placeholder="أخبرنا كيف يمكننا مساعدتك..."
                multiline
                numberOfLines={4}
                className="bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200 min-h-[100px] text-right font-tajawal"
                textAlignVertical="top"
              />
            </View>

            <Button
              title={loading ? "جارٍ الإرسال..." : "إرسال الرسالة"}
              onPress={handleSubmit}
              loading={loading}
              variant='error'
            />
          </View>
        </View>

        {/* الأسئلة الشائعة */}
        <View className="p-4">
          <Text className="text-lg font-tajawal-bold text-gray-800 mb-4 text-right">الأسئلة الشائعة</Text>

          <View className="space-y-3">
            <TouchableOpacity className="bg-white rounded-2xl p-4 border border-gray-200">
              <Text className="font-tajawal-bold text-gray-800 text-right">كيف يمكنني تتبع طلبي؟</Text>
              <Text className="text-gray-600 text-sm mt-1 font-tajawal text-right">
                يمكنك تتبع طلبك من خلال حسابك أو باستخدام رقم التتبع المرسل إلى بريدك الإلكتروني.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white rounded-2xl p-4 border border-gray-200">
              <Text className="font-tajawal-bold text-gray-800 text-right">ما هي سياسة الإرجاع لديكم؟</Text>
              <Text className="text-gray-600 text-sm mt-1 font-tajawal text-right">
                نقدم سياسة إرجاع لمدة 30 يومًا على معظم المنتجات. راجع صفحة سياسة الإرجاع للمزيد من التفاصيل.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white rounded-2xl p-4 border border-gray-200">
              <Text className="font-tajawal-bold text-gray-800 text-right">هل تشحنون دوليًا؟</Text>
              <Text className="text-gray-600 text-sm mt-1 font-tajawal text-right">
                نعم، نقوم بالشحن إلى أكثر من 50 دولة حول العالم. تختلف تكاليف الشحن حسب الموقع.
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ساعات العمل */}
        <View className="p-4">
          <View className="bg-red-50 rounded-2xl p-6 border border-red-200">
            <Text className="text-lg font-tajawal-bold text-red-800 mb-3 text-right">ساعات العمل</Text>
            <View className="space-y-2">
              <View className="flex-row justify-between">
                <Text className="text-red-700 font-tajawal">الاثنين - الجمعة</Text>
                <Text className="text-red-700 font-tajawal-bold">8:00 ص - 8:00 م</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-red-700 font-tajawal">السبت</Text>
                <Text className="text-red-700 font-tajawal-bold">9:00 ص - 6:00 م</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-red-700 font-tajawal">الأحد</Text>
                <Text className="text-red-700 font-tajawal-bold">10:00 ص - 4:00 م</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactScreen;
