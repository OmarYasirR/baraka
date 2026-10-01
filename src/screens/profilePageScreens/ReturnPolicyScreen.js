import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Header from '../../components/common/Header';
import Icon from 'react-native-vector-icons/Ionicons';

const ReturnPolicyScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header 
        title="سياسة الإرجاع"
        showBack={true}
        showCart={false}
      />
      
      <ScrollView className="flex-1 p-4">
        <Text className="text-lg text-gray-800 mb-6 text-right font-tajawal-extrabold">
          سياسة الإرجاع واسترداد المبالغ
        </Text>

        {/* Return Period */}
        <View className="bg-white rounded-2xl p-4 border border-gray-200 mb-6">
          <View className="flex-row-reverse items-center mb-3">
            <Icon name="calendar" size={24} color="#2563eb" />
            <Text className="text-lg text-gray-800 mr-3 font-tajawal-bold">
              سياسة الإرجاع خلال ٣٠ يوماً
            </Text>
          </View>
          <Text className="text-gray-600 leading-6 text-right font-tajawal">
            لديك مهلة ٣٠ يوماً من تاريخ استلام الطلب لإرجاع معظم المنتجات واسترداد المبلغ بالكامل. 
            يجب أن يكون المنتج في حالته الأصلية مع جميع الملحقات والتغليف.
          </Text>
        </View>

        {/* Return Process */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-4 text-right font-tajawal">
            خطوات عملية الإرجاع
          </Text>
          <View className="space-y-4">

            {/* Step 1 */}
            <View className="bg-white rounded-2xl p-4 border border-gray-200">
              <View className="flex-row-reverse items-center mb-2">
                <View className="bg-blue-100 w-8 h-8 rounded-full items-center justify-center">
                  <Text className="text-blue-600 font-bold font-tajawal">1</Text>
                </View>
                <Text className="text-gray-800 font-semibold mr-3 font-tajawal">
                  طلب الإرجاع
                </Text>
              </View>
              <Text className="text-gray-600 mr-11 text-right font-tajawal">
                قم بتسجيل الدخول إلى حسابك وانتقل إلى "سجل الطلبات" لطلب الإرجاع.
              </Text>
            </View>

            {/* Step 2 */}
            <View className="bg-white rounded-2xl p-4 border border-gray-200">
              <View className="flex-row-reverse items-center mb-2">
                <View className="bg-blue-100 w-8 h-8 rounded-full items-center justify-center">
                  <Text className="text-blue-600 font-bold font-tajawal">2</Text>
                </View>
                <Text className="text-gray-800 font-semibold mr-3 font-tajawal">
                  طباعة ملصق الشحن
                </Text>
              </View>
              <Text className="text-gray-600 mr-11 text-right font-tajawal">
                سنرسل لك عبر البريد الإلكتروني ملصق شحن مدفوع مسبقاً.
              </Text>
            </View>

            {/* Step 3 */}
            <View className="bg-white rounded-2xl p-4 border border-gray-200">
              <View className="flex-row-reverse items-center mb-2">
                <View className="bg-blue-100 w-8 h-8 rounded-full items-center justify-center">
                  <Text className="text-blue-600 font-bold font-tajawal">3</Text>
                </View>
                <Text className="text-gray-800 font-semibold mr-3 font-tajawal">
                  شحن المنتج
                </Text>
              </View>
              <Text className="text-gray-600 mr-11 text-right font-tajawal">
                قم بتغليف المنتج بإحكام وأرسله إلى أي مركز شحن معتمد.
              </Text>
            </View>

            {/* Step 4 */}
            <View className="bg-white rounded-2xl p-4 border border-gray-200">
              <View className="flex-row-reverse items-center mb-2">
                <View className="bg-blue-100 w-8 h-8 rounded-full items-center justify-center">
                  <Text className="text-blue-600 font-bold font-tajawal">4</Text>
                </View>
                <Text className="text-gray-800 font-semibold mr-3 font-tajawal">
                  استلام المبلغ
                </Text>
              </View>
              <Text className="text-gray-600 mr-11 text-right font-tajawal">
                سيتم معالجة المبلغ خلال ٥ إلى ٧ أيام عمل بعد استلام المنتج وفحصه.
              </Text>
            </View>
          </View>
        </View>

        {/* Non-Returnable Items */}
        <View className="bg-red-50 rounded-2xl p-4 border border-red-200 mb-6">
          <Text className="text-lg font-semibold text-red-800 mb-3 text-right font-tajawal">
            المنتجات غير القابلة للإرجاع
          </Text>
          <View className="space-y-2">
            <View className="flex-row-reverse">
              <Icon name="close-circle" size={16} color="#ef4444" />
              <Text className="text-red-700 mr-2 flex-1 text-right font-tajawal">
                السوائل المفتوحة (مثل الزيت أو سائل التبريد)
              </Text>
            </View>
            <View className="flex-row-reverse">
              <Icon name="close-circle" size={16} color="#ef4444" />
              <Text className="text-red-700 mr-2 flex-1 text-right font-tajawal">
                المكونات الكهربائية (في حال تم تركيبها)
              </Text>
            </View>
            <View className="flex-row-reverse">
              <Icon name="close-circle" size={16} color="#ef4444" />
              <Text className="text-red-700 mr-2 flex-1 text-right font-tajawal">
                المنتجات الخاصة أو المخصصة حسب الطلب
              </Text>
            </View>
            <View className="flex-row-reverse">
              <Icon name="close-circle" size={16} color="#ef4444" />
              <Text className="text-red-700 mr-2 flex-1 text-right font-tajawal">
                المنتجات التالفة نتيجة تركيب غير صحيح
              </Text>
            </View>
          </View>
        </View>

        {/* Refund Information */}
        <View className="bg-green-50 rounded-2xl p-4 border border-green-200 mb-9">
          <Text className="text-lg font-semibold text-green-800 mb-3 text-right font-tajawal">
            معلومات استرداد المبالغ
          </Text>
          <View className="space-y-2">
            <View className="flex-row-reverse">
              <Icon name="checkmark-circle" size={16} color="#10b981" />
              <Text className="text-green-700 mr-2 flex-1 text-right font-tajawal">
                يتم استرداد المبلغ بالكامل إلى وسيلة الدفع الأصلية
              </Text>
            </View>
            <View className="flex-row-reverse">
              <Icon name="checkmark-circle" size={16} color="#10b981" />
              <Text className="text-green-700 mr-2 flex-1 text-right font-tajawal">
                تكاليف الشحن غير قابلة للاسترداد
              </Text>
            </View>
            <View className="flex-row-reverse">
              <Icon name="checkmark-circle" size={16} color="#10b981" />
              <Text className="text-green-700 mr-2 flex-1 text-right font-tajawal">
                قد تُطبّق رسوم إعادة التخزين على بعض المنتجات
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReturnPolicyScreen;
