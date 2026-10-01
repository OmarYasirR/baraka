import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Header from '../../components/common/Header';
import Icon from 'react-native-vector-icons/Ionicons';

const WarrantyInfoScreen = ({ navigation }) => {
  const warrantyTypes = [
    {
      type: 'ضمان مدى الحياة المحدود',
      products: ['أقراص الفرامل', 'ممتصات الصدمات', 'أنظمة العادم'],
      coverage: 'يغطي العيوب في المواد والتصنيع مدى الحياة',
      terms: 'يتطلب تركيبًا احترافيًا'
    },
    {
      type: 'ضمان لمدة 3 سنوات',
      products: ['شمعات الإشعال', 'فلاتر الهواء', 'البطاريات'],
      coverage: 'استبدال كامل للعيوب الناتجة عن التصنيع',
      terms: 'لا يشمل التآكل الطبيعي'
    },
    {
      type: 'ضمان لمدة سنة واحدة',
      products: ['المكونات الكهربائية', 'الحساسات', 'الإضاءة'],
      coverage: 'إصلاح أو استبدال للعيوب الوظيفية',
      terms: 'يُطلب إثبات الشراء'
    }
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header 
        title="معلومات الضمان"
        showBack={true}
        showCart={false}
      />
      
      <ScrollView className="flex-1 p-4">
        <Text className="text-lg font-tajawal-bold text-gray-800 mb-6 text-right">
          تغطية ضمان المنتج
        </Text>

        {/* أنواع الضمان */}
        {warrantyTypes.map((warranty) => (
          <View key={warranty.type} className="bg-white rounded-2xl p-4 border border-gray-200 mb-4">
            <View className="flex-row-reverse items-center mb-3">
              <Icon name="shield-checkmark" size={24} color="#10b981" />
              <Text className="text-lg font-tajawal-bold text-gray-800 mr-3">{warranty.type}</Text>
            </View>
            
            <View className="mb-3">
              <Text className="text-gray-600 font-tajawal-medium mb-1 text-right">المنتجات المشمولة:</Text>
              <Text className="text-gray-800 font-tajawal text-right">{warranty.products.join('، ')}</Text>
            </View>
            
            <View className="mb-3">
              <Text className="text-gray-600 font-tajawal-medium mb-1 text-right">التغطية:</Text>
              <Text className="text-gray-800 font-tajawal text-right">{warranty.coverage}</Text>
            </View>
            
            <View>
              <Text className="text-gray-600 font-tajawal-medium mb-1 text-right">الشروط:</Text>
              <Text className="text-gray-800 font-tajawal text-right">{warranty.terms}</Text>
            </View>
          </View>
        ))}

        {/* عملية المطالبة بالضمان */}
        <View className="bg-blue-50 rounded-2xl p-4 border border-blue-200 mt-4">
          <Text className="text-lg font-tajawal-bold text-blue-800 mb-3 text-right">عملية المطالبة بالضمان</Text>
          <View className="space-y-3">
            <View className="flex-row-reverse">
              <View className="bg-blue-100 w-6 h-6 rounded-full items-center justify-center ml-3">
                <Text className="text-blue-600 font-tajawal-bold text-xs">1</Text>
              </View>
              <Text className="text-blue-700 font-tajawal flex-1 text-right">
                اتصل بفريق الدعم لدينا مع تفاصيل الطلب الخاصة بك
              </Text>
            </View>
            <View className="flex-row-reverse">
              <View className="bg-blue-100 w-6 h-6 rounded-full items-center justify-center ml-3">
                <Text className="text-blue-600 font-tajawal-bold text-xs">2</Text>
              </View>
              <Text className="text-blue-700 font-tajawal flex-1 text-right">
                قدّم صورًا أو مقاطع فيديو للمنتج المعيب
              </Text>
            </View>
            <View className="flex-row-reverse">
              <View className="bg-blue-100 w-6 h-6 rounded-full items-center justify-center ml-3">
                <Text className="text-blue-600 font-tajawal-bold text-xs">3</Text>
              </View>
              <Text className="text-blue-700 font-tajawal flex-1 text-right">
                سنراجع الطلب ونعالجه خلال 48 ساعة
              </Text>
            </View>
            <View className="flex-row-reverse">
              <View className="bg-blue-100 w-6 h-6 rounded-full items-center justify-center ml-3">
                <Text className="text-blue-600 font-tajawal-bold text-xs">4</Text>
              </View>
              <Text className="text-blue-700 font-tajawal flex-1 text-right">
                ستتلقى استبدالًا أو استردادًا وفقًا لشروط الضمان
              </Text>
            </View>
          </View>
        </View>

        {/* استثناءات الضمان */}
        <View className="bg-red-50 rounded-2xl p-4 border border-red-200 mt-6 mb-9">
          <Text className="text-lg font-tajawal-bold text-red-800 mb-3 text-right">الاستثناءات من الضمان</Text>
          <View className="space-y-2">
            <Text className="text-red-700 font-tajawal text-right">• التركيب أو الاستخدام غير الصحيح</Text>
            <Text className="text-red-700 font-tajawal text-right">• التآكل الطبيعي</Text>
            <Text className="text-red-700 font-tajawal text-right">• الأضرار الناتجة عن الحوادث أو التعديلات</Text>
            <Text className="text-red-700 font-tajawal text-right">• المنتجات المستخدمة في السباقات أو الأغراض التجارية</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WarrantyInfoScreen;
