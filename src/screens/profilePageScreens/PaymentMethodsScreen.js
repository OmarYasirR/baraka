import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import { theme } from '../../styles/colors';

const PaymentMethodsScreen = () => {
  const navigation = useNavigation();
  
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'card',
      last4: '4242',
      brand: 'visa',
      expiry: '12/25',
      isDefault: true,
      holderName: 'محمد أحمد'
    },
    {
      id: 2,
      type: 'card',
      last4: '8888',
      brand: 'mastercard',
      expiry: '08/24',
      isDefault: false,
      holderName: 'محمد أحمد'
    }
  ]);

  const handleSetDefault = (methodId) => {
    const updatedMethods = paymentMethods.map(method => ({
      ...method,
      isDefault: method.id === methodId
    }));
    setPaymentMethods(updatedMethods);
    Alert.alert('تم بنجاح', 'تم تحديث طريقة الدفع الافتراضية!');
  };

  const handleDeleteMethod = (methodId) => {
    Alert.alert(
      'حذف طريقة الدفع',
      'هل أنت متأكد من أنك تريد حذف طريقة الدفع هذه؟',
      [
        { text: 'إلغاء', style: 'cancel' },
        { 
          text: 'حذف', 
          style: 'destructive',
          onPress: () => {
            const updatedMethods = paymentMethods.filter(method => method.id !== methodId);
            setPaymentMethods(updatedMethods);
            Alert.alert('تم بنجاح', 'تم حذف طريقة الدفع بنجاح!');
          }
        }
      ]
    );
  };

  const getCardIcon = (brand) => {
    const icons = {
      visa: 'card',
      mastercard: 'card',
      amex: 'card',
      discover: 'card',
      paypal: 'logo-paypal',
    };
    return icons[brand] || 'card';
  };

  const getCardColor = (brand) => {
    const colors = {
      visa: '#1a1f71',
      mastercard: '#eb001b',
      amex: '#2e77bc',
      discover: '#ff6000',
      paypal: '#003087',
    };
    return colors[brand] || '#374151';
  };

  const PaymentMethodCard = ({ method }) => (
    <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-200">
      <View className="flex-row-reverse justify-between items-start mb-3">
        <View className="flex-row-reverse items-center flex-1">
          <View 
            className="w-10 h-10 rounded-lg items-center justify-center ml-3"
            style={{ backgroundColor: getCardColor(method.brand) }}
          >
            <Icon name={getCardIcon(method.brand)} size={20} color="white" />
          </View>
          <View className="flex-1">
            <Text className="text-lg font-tajawal-bold text-gray-800 text-right">
              {method.brand === 'visa' ? 'فيزا' : 
               method.brand === 'mastercard' ? 'ماستركارد' : 
               method.brand} •••• {method.last4}
            </Text>
            <Text className="text-gray-600 text-sm text-right font-tajawal">
              ينتهي في {method.expiry}
            </Text>
            <Text className="text-gray-600 text-sm text-right font-tajawal">
              {method.holderName}
            </Text>
          </View>
        </View>
        
        {method.isDefault && (
          <View
            className="px-2 py-1 rounded-full"
            style={{backgroundColor: theme.background}}
            >
            <Text
              className="text-xs font-tajawal-medium text-right"
              style={{color: theme.praimary}}
              >افتراضي</Text>
          </View>
        )}
      </View>

      <View className="flex-row-reverse space-x-reverse space-x-3">
        {!method.isDefault && (
          <Button 
            title="تعيين كافتراضي"
            variant="outline"
            size="small"
            onPress={() => handleSetDefault(method.id)}
            className="flex-1"
          />
        )}
        <Button 
          title="تعديل"
          variant="outline"
          size="small"
          onPress={() => navigation.navigate('EditPaymentMethod', { method })}
          className="flex-1"
        />
        <TouchableOpacity 
          className="w-10 h-10 items-center justify-center border border-gray-300 rounded-2xl"
          onPress={() => handleDeleteMethod(method.id)}
        >
          <Icon name="trash" size={18} color="#ef4444" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar backgroundColor={theme.background} />
      <Header 
        title="طرق الدفع"
        showBack={true}
        showCart={false}
      />
      
      <ScrollView className="flex-1 p-6">
        <Text className="text-gray-600 mb-6 text-right font-tajawal">
          إدارة طرق الدفع الخاصة بك لإتمام الشراء بسرعة.
        </Text>

        {paymentMethods.length === 0 ? (
          <View className="items-center justify-center py-12">
            <Icon name="card-outline" size={64} color="#d1d5db" />
            <Text className="text-xl font-tajawal-bold text-gray-400 mt-4 text-right">لا توجد طرق دفع</Text>
            <Text className="text-gray-500 mt-2 font-tajawal text-right">
              لم تقم بإضافة أي طرق دفع بعد.
            </Text>
          </View>
        ) : (
          <View>
            {paymentMethods.map((method) => (
              <PaymentMethodCard key={method.id} method={method} />
            ))}
          </View>
        )}

        <View className="space-y-3">
          <Button 
            title="إضافة بطاقة ائتمان/مدينة"
            icon="card"
            variant="outline"
            onPress={() => navigation.navigate('AddPaymentMethod', { type: 'card' })}
          />
          
          <Button 
            title="إضافة حساب باي بال"
            icon="logo-paypal"
            variant="outline"
            onPress={() => navigation.navigate('AddPaymentMethod', { type: 'paypal' })}
          />
        </View>

        <View className="mt-6 bg-orange-50 rounded-2xl p-4 mb-10">
          <Text className="text-orange-800 font-tajawal-medium mb-2 text-right">إشعار الأمان</Text>
          <Text className="text-orange-700 text-sm text-right font-tajawal">
            معلومات الدفع الخاصة بك مشفرة ومخزنة بأمان. نحن لا نشارك تفاصيلك مع أطراف ثالثة.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentMethodsScreen;