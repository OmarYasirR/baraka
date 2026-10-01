import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/common/Header';
import { mockOrders } from '../../data/mockData';
import { formatDate, formatPrice, getStatusColor } from '../../utils/helpers';
import Button from '../../components/common/Button';

const OrderHistoryScreen = () => {
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'جميع الطلبات' },
    { id: 'pending', label: 'قيد الانتظار' },
    { id: 'delivered', label: 'تم التوصيل' },
    { id: 'cancelled', label: 'ملغية' },
  ];

  const filteredOrders = selectedFilter === 'all' 
    ? mockOrders 
    : mockOrders.filter(order => order.status === selectedFilter);

  const getStatusIcon = (status) => {
    const icons = {
      pending: 'time',
      confirmed: 'checkmark-circle',
      shipped: 'rocket',
      delivered: 'checkmark-done',
      cancelled: 'close-circle',
    };
    return icons[status] || 'layers';
  };

  const getStatusText = (status) => {
    const statusMap = {
      pending: 'قيد الانتظار',
      confirmed: 'مؤكدة',
      shipped: 'تم الشحن',
      delivered: 'تم التوصيل',
      cancelled: 'ملغية',
    };
    return statusMap[status] || status;
  };

  const OrderCard = ({ order }) => (
    <TouchableOpacity 
      className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-200"
    >
      <View className="flex-row-reverse justify-between items-start mb-3">
        <View>
          <Text className="text-lg font-tajawal-bold text-gray-800 text-right">
            {order.orderNumber}
          </Text>
          <Text className="text-gray-500 text-sm mt-1 text-right font-tajawal">
            {formatDate(order.date)}
          </Text>
        </View>
        <View className={`px-3 py-1 rounded-full ${
          getStatusColor(order.status) === '#10b981' ? 'bg-green-100' :
          getStatusColor(order.status) === '#f59e0b' ? 'bg-yellow-100' :
          getStatusColor(order.status) === '#ef4444' ? 'bg-red-100' :
          'bg-blue-100'
        }`}>
          <Text className={`text-xs font-tajawal-medium text-right capitalize ${
            getStatusColor(order.status) === '#10b981' ? 'text-green-800' :
            getStatusColor(order.status) === '#f59e0b' ? 'text-yellow-800' :
            getStatusColor(order.status) === '#ef4444' ? 'text-red-800' :
            'text-blue-800'
          }`}>
            {getStatusText(order.status)}
          </Text>
        </View>
      </View>

      <View className="mb-3">
        {order.items.slice(0, 2).map((item, index) => (
          <Text key={index} className="text-gray-600 text-sm text-right font-tajawal">
            {item.quantity} × {item.name}
          </Text>
        ))}
        {order.items.length > 2 && (
          <Text className="text-gray-500 text-sm text-right font-tajawal">
            +{order.items.length - 2} منتجات إضافية
          </Text>
        )}
      </View>

      <View className="flex-row-reverse justify-between items-center pt-3 border-t border-gray-100">
        <Text className="text-lg font-tajawal-bold text-gray-800">
          {formatPrice(order.total)}
        </Text>
        <View className="flex-row-reverse items-center">
          <Icon 
            name={getStatusIcon(order.status)} 
            size={16} 
            color={getStatusColor(order.status)} 
            className="ml-1"
          />
          <Text className="text-gray-600 text-sm text-right font-tajawal">
            {getStatusText(order.status)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header 
        title="سجل الطلبات"
        showBack={true}
        showCart={false}
      />
      
      <View className="p-6 flex-1">
        {/* Filter Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className='basis-1/5'
          contentContainerStyle={{ flexDirection: 'row-reverse' }}
        >
          <View className="flex-row-reverse space-x-reverse space-x-2">
            {filters.map((filter) => (
              <Button 
                key={filter.id}
                size='small'
                className={`border-orange-100 h-12 mx-1 ${selectedFilter !== filter.id? 'bg-orange-100' : 'bg-orange-500'}`}
                variant={selectedFilter === filter.id? 'error' : "outline"}
                onPress={() => setSelectedFilter(filter.id)}
                title = {filter.label}
                icon={getStatusIcon(filter.id)}
                textClassName={`mr-2 font-tajawal ${selectedFilter !== filter.id? 'text-orange-500' : ''}`}
                iconColor={`${selectedFilter !== filter.id? 'text-orange-500' : ''}`}
              />
            ))}
          </View>
        </ScrollView>

        {filteredOrders.length === 0 ? (
          <View className="items-center justify-start pt-2 basis-4/5">
            <Icon name="receipt-outline" size={64} color="#d1d5db" />
            <Text className="text-xl font-tajawal-bold text-gray-400 mt-4 text-right">لا توجد طلبات</Text>
            <Text className="text-gray-500 mt-2 font-tajawal text-right">
              {selectedFilter === 'all' 
                ? "لم تقم بتقديم أي طلبات حتى الآن."
                : `لا توجد طلبات ${getStatusText(selectedFilter)}.`
              }
            </Text>
            {selectedFilter !== 'all' && (
              <Button 
                title="عرض جميع الطلبات"
                variant="outline"
                onPress={() => setSelectedFilter('all')}
                className="mt-4"
              />
            )}
          </View>
        ) : (
          <FlatList
            data={filteredOrders}
            renderItem={({ item }) => <OrderCard order={item} />}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default OrderHistoryScreen;