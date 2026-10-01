import React, { useState } from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import { mockAddresses } from '../../data/mockData';
import { Text } from '../../components/GlobalText';

const ShippingAddressesScreen = () => {
  const navigation = useNavigation();
  const [addresses, setAddresses] = useState(mockAddresses);

  const handleSetDefault = (addressId) => {
    const updatedAddresses = addresses.map(address => ({
      ...address,
      isDefault: address.id === addressId
    }));
    setAddresses(updatedAddresses);
    Alert.alert('Success', 'Default address updated!');
  };

  const handleDeleteAddress = (addressId) => {
    Alert.alert(
      'Delete Address',
      'Are you sure you want to delete this address?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => {
            const updatedAddresses = addresses.filter(addr => addr.id !== addressId);
            setAddresses(updatedAddresses);
            Alert.alert('Success', 'Address deleted successfully!');
          }
        }
      ]
    );
  };

  const AddressCard = ({ address }) => (
    <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-200">
      <View className="flex-row-reverse justify-between items-start mb-3">
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-800">{address.title}</Text>
          {address.isDefault && (
            <View className="bg-orange-100 px-2 py-1 rounded-full self-end mt-1">
              <Text className="text-orange-800 text-xs font-medium">الافتراضي</Text>
            </View>
          )}
        </View>
        <View className="flex-row space-x-2">
          <TouchableOpacity 
            onPress={() => navigation.navigate('EditAddress', { address })}
            className="p-2"
          >
            <Icon name="pencil" size={18} color="#3b82f6" />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => handleDeleteAddress(address.id)}
            className="p-2"
          >
            <Icon name="trash" size={18} color="#ef4444" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="mb-4">
        <Text className="text-gray-600">{address.fullName}</Text>
        <Text className="text-gray-600">{address.street}</Text>
        <Text className="text-gray-600">
          {address.city}, {address.state} {address.zipCode}
        </Text>
        <Text className="text-gray-600">{address.country}</Text>
        <Text className="text-gray-600 mt-1 text-right">{address.phone}</Text>
      </View>

      <View className="flex-row space-x-3">
        {!address.isDefault && (
          <Button 
            title=" تعيين كافتراضي"
            variant="outline"
            size="small"
            onPress={() => handleSetDefault(address.id)}
            className="flex-1"
          />
        )}
        <Button 
          title={address.isDefault ? "العنوان الافتراضي" : "تعديل"}
          variant={address.isDefault ? "error" : "outline"}
          size="small"
          onPress={() => navigation.navigate('EditAddress', { address })}
          className="flex-1"
          // variant={address.isDefault && 'error'}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header 
        title="عناوين الشحن"
        showBack={true}
        showCart={false}
      />
      
      <ScrollView className="flex-1 p-6">
        <Text className="text-gray-600 mb-6 font-tajawal-medium">
          إدارة عناوين الشحن الخاصة بك لإتمام الشراء بسرعة
        </Text>

        {addresses.length === 0 ? (
          <View className="items-center justify-center py-12">
            <Icon name="location-outline" size={64} color="#d1d5db" />
            <Text className="text-xl font-bold text-gray-400 mt-4">No Addresses</Text>
            <Text className="text-gray-500 text-center mt-2">
              You haven't added any shipping addresses yet.
            </Text>
          </View>
        ) : (
          <View>
            {addresses.map((address) => (
              <AddressCard key={address.id} address={address} />
            ))}
          </View>
        )}

        <Button 
          title="اضافه عنوان جديد"
          icon="add"
          onPress={() => navigation.navigate('EditAddress', { address: null })}
          className="mt-4 mb-9"
          variant='error'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShippingAddressesScreen;