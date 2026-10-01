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

const ShippingGuideScreen = ({ navigation }) => {
  const shippingMethods = [
    {
      icon: 'rocket',
      title: 'الشحن العادي',
      duration: 'من ٣ إلى ٥ أيام عمل',
      price: '$5.99',
      free: 'مجاني للطلبات التي تتجاوز $50'
    },
    {
      icon: 'flash',
      title: 'الشحن السريع',
      duration: 'من ١ إلى ٢ يوم عمل',
      price: '$12.99',
      free: 'مجاني للطلبات التي تتجاوز $100'
    },
    {
      icon: 'car',
      title: 'توصيل في نفس اليوم',
      duration: 'نفس اليوم (داخل المدينة)',
      price: '$19.99',
      free: 'متاح في مناطق محددة فقط'
    }
  ];

  const ShippingMethod = ({ method, index }) => (
    <View className={`bg-white p-4 rounded-2xl mb-4 ${index === 0 ? 'border-2 border-red-200' : 'border border-gray-200'}`}>
      <View className="flex-row-reverse items-center mb-3">
        <Icon name={method.icon} size={24} color={theme.praimary} />
        <Text className="text-lg text-gray-800 mr-3 font-tajawal-medium">{method.title}</Text>
      </View>
      <View className="space-y-2">
        <View className="flex-row-reverse">
          <Text className="text-gray-600 flex-1 text-right font-tajawal">مدة التوصيل:</Text>
          <Text className="text-gray-800 font-tajawal">{method.duration}</Text>
        </View>
        <View className="flex-row-reverse">
          <Text className="text-gray-600 flex-1 text-right font-tajawal">التكلفة:</Text>
          <Text className="text-gray-800 font-tajawal">{method.price}</Text>
        </View>
        <View className="flex-row-reverse">
          <Text className="text-gray-600 flex-1 text-right font-tajawal">عرض خاص:</Text>
          <Text className="text-green-600 font-tajawal">{method.free}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header 
        title="دليل الشحن"
        showBack={true}
        showCart={false}
      />
      
      <ScrollView className="flex-1 p-4" contentContainerStyle={{ flexGrow: 1 }}>
        <Text className="text-lg font-tajawal-bold text-gray-800 mb-6 text-right">
          معلومات الشحن وخيارات التوصيل
        </Text>

        {/* Shipping Methods */}
        <Text className="text-lg font-semibold text-gray-800 mb-4 text-right font-tajawal">
          خيارات التوصيل
        </Text>
        {shippingMethods.map((method, index) => (
          <ShippingMethod key={method.title} method={method} index={index} />
        ))}

        {/* Important Notes */}
        <View className="bg-blue-50 rounded-2xl p-4 border border-blue-200 mt-6">
          <Text className="text-lg font-semibold text-blue-800 mb-3 text-right font-tajawal">ملاحظات هامة</Text>
          <View className="space-y-2">
            <View className="flex-row-reverse">
              <Icon name="time" size={16} color="#2563eb" />
              <Text className="text-blue-700 mr-2 flex-1 text-right font-tajawal">
                وقت المعالجة: من ١ إلى ٢ يوم عمل
              </Text>
            </View>
            <View className="flex-row-reverse">
              <Icon name="calendar" size={16} color="#2563eb" />
              <Text className="text-blue-700 mr-2 flex-1 text-right font-tajawal">
                لا يتم التوصيل في عطلات نهاية الأسبوع أو العطلات الرسمية
              </Text>
            </View>
            <View className="flex-row-reverse">
              <Icon name="alert-circle" size={16} color="#2563eb" />
              <Text className="text-blue-700 mr-2 flex-1 text-right font-tajawal">
                قد يُطلب توقيع عند استلام الطلب
              </Text>
            </View>
          </View>
        </View>

        {/* International Shipping */}
        <View className="bg-white rounded-2xl p-4 border border-gray-200 mt-6">
          <Text className="text-lg font-semibold text-gray-800 mb-3 text-right font-tajawal">
            الشحن الدولي
          </Text>
          <Text className="text-gray-600 leading-6 text-right font-tajawal">
            نقوم بالشحن إلى أكثر من ٥٠ دولة حول العالم. يستغرق الشحن الدولي من ٧ إلى ١٤ يوم عمل،
            وتختلف التكلفة حسب الوجهة. رسوم الجمارك والضرائب تقع على مسؤولية العميل.
          </Text>
        </View>

        {/* Tracking */}
        <View className="bg-green-50 rounded-2xl p-4 border border-green-200 mt-6 mb-9">
          <View className="flex-row-reverse items-start">
            <Icon name="location" size={20} color="#10b981" />
            <View className="mr-3 flex-1">
              <Text className="text-green-800 font-semibold mb-1 text-right font-tajawal">تتبع الطلب</Text>
              <Text className="text-green-700 text-right font-tajawal">
                يمكنك تتبع طلبك في الوقت الفعلي من خلال حسابك. سيتم إرسال معلومات التتبع عبر البريد الإلكتروني بمجرد شحن الطلب.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShippingGuideScreen;
