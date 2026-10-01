import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Header from '../../components/common/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../../styles/colors';

const AboutUsScreen = ({ navigation }) => {
  const stats = [
    { number: '50,000+', label: 'منتج متاح' },
    { number: '100+', label: 'علامة تجارية' },
    { number: '1M+', label: 'عميل سعيد' },
    { number: '15+', label: 'سنة من الخبرة' },
  ];

  const features = [
    {
      icon: 'shield-checkmark',
      title: 'ضمان الجودة',
      description: 'جميع القطع مفحوصة ومضمونة من حيث الأداء والجودة',
    },
    {
      icon: 'rocket',
      title: 'شحن سريع',
      description: 'شحن في نفس اليوم لمعظم الطلبات مع خيارات توصيل متعددة',
    },
    {
      icon: 'headset',
      title: 'دعم فني متخصص',
      description: 'خدمة عملاء على مدار الساعة يقدمها خبراء قطع السيارات',
    },
    {
      icon: 'card',
      title: 'أفضل الأسعار',
      description: 'أسعار منافسة مع ضمان مطابقة السعر',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header 
        title="من نحن"
        showBack={true}
        showCart={false}
      />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View className="bg-red-600 p-6">
          <Text className="text-2xl font-tajawal-bold text-white text-center mb-2">
            بركة برو
          </Text>
          <Text className="text-red-100 text-center text-lg font-tajawal">
            موردك الموثوق لقطع غيار السيارات
          </Text>
        </View>

        {/* Company Story */}
        <View className="p-6">
          <Text className="text-lg font-tajawal-bold text-gray-800 mb-4 text-right">
            قصتنا
          </Text>
          <Text className="text-gray-600 leading-6 mb-6 font-tajawal text-right">
            بدأت شركة بركة برو كمتجر محلي صغير لتصبح اليوم واحدة من أبرز
            متاجر قطع الغيار الإلكترونية. هدفنا بسيط — تقديم قطع غيار
            سيارات عالية الجودة بأسعار منافسة، مع خدمة عملاء مميزة ودعم
            فني من الخبراء. نفخر بأننا أول تطبيق من نوعه في السودان، مما
            يجعل عملية البحث وطلب القطع أسهل وأسرع وأكثر ثقة.
          </Text>

          {/* Stats */}
          <View className="flex-row flex-wrap justify-between mb-8">
            {stats.map((stat) => (
              <View key={stat.label} className="w-1/2 p-2">
                <View className="bg-red-50 rounded-2xl p-4 items-center shadow-sm">
                  <Text className="text-2xl font-tajawal-bold text-red-600">{stat.number}</Text>
                  <Text className="text-gray-600 text-sm text-center mt-1 font-tajawal">{stat.label}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Features */}
          <Text className="text-lg font-tajawal-bold text-gray-800 mb-4 text-right">لماذا نحن؟</Text>
          <View className="space-y-4 mb-8">
            {features.map((feature) => (
              <View key={feature.title} className="bg-red-50 rounded-2xl p-4 flex-row items-start shadow-sm">
                <Icon name={feature.icon} size={24} color={theme.praimary} />
                <View className="ml-4 flex-1">
                  <Text className="font-tajawal-bold text-gray-800 text-lg text-right">{feature.title}</Text>
                  <Text className="text-gray-600 mt-1 font-tajawal text-right">{feature.description}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Mission & Vision */}
          <View className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
            <Text className="text-lg font-tajawal-bold text-purple-800 mb-3 text-right">رسالتنا</Text>
            <Text className="text-purple-700 leading-6 mb-4 font-tajawal text-right">
              نسعى لجعل شراء قطع غيار السيارات سهلاً وموثوقاً وبأسعار مناسبة
              لكل مالك سيارة أو فني ميكانيكي.
            </Text>
            
            <Text className="text-lg font-tajawal-bold text-purple-800 mb-3 text-right">رؤيتنا</Text>
            <Text className="text-purple-700 leading-6 font-tajawal text-right">
              أن نصبح المنصة الأكثر ثقة وشمولاً في مجال قطع غيار السيارات على مستوى العالم، 
              والمعروفة بالجودة والخدمة والابتكار.
            </Text>
          </View>

          {/* Team */}
          <View className="mt-8">
            <Text className="text-lg font-tajawal-bold text-gray-800 mb-4 text-right">فريقنا</Text>
            <Text className="text-gray-600 leading-6 mb-4 font-tajawal text-right">
              يتكون فريقنا من خبراء سيارات ومهندسين ومتخصصين في خدمة العملاء،
              يعملون لمساعدتك في العثور على القطع المناسبة لسيارتك بكل سهولة.
            </Text>
          </View>

          {/* Contact Info */}
          <View className="bg-gray-100 rounded-2xl p-6 mt-6">
            <Text className="text-lg font-tajawal-bold text-gray-800 mb-4 text-right">تواصل معنا</Text>
            <View className="space-y-3">
              <View className="flex-row items-center">
                <Icon name="mail" size={20} color="#64748b" />
                <Text className="text-gray-600 ml-3 font-tajawal">support@autoparts-pro.com</Text>
              </View>
              <View className="flex-row items-center">
                <Icon name="call" size={20} color="#64748b" />
                <Text className="text-gray-600 ml-3 font-tajawal">1-800-AUTO-PRO</Text>
              </View>
              <View className="flex-row items-center">
                <Icon name="time" size={20} color="#64748b" />
                <Text className="text-gray-600 ml-3 font-tajawal">دعم العملاء على مدار الساعة</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUsScreen;
